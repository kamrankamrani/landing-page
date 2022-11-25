/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Grid, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { setComments } from "../../../features/commentsSlice/commentsSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { NumToPersian } from "../../../Services/ConvertNumber";
import { commentType } from "../../../Services/Types";
import commentSource from "./CommentSource";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import "./Style/comments.css";

export default function Comments() {
  const [sliderEl, setSliderEl] = useState<HTMLElement>();
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);
  const dispatch = useAppDispatch();
  const commentsArr: commentType[] = useAppSelector(
    (state) => state.commentsSlice.comments
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    if (!sliderEl) {
      return;
    }
    startX.current = e.pageX - sliderEl.offsetLeft;
    scrollLeft.current = sliderEl.scrollLeft;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleSliderDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      e.preventDefault();
      if (!sliderEl) {
        return;
      }
      const x = e.pageX + sliderEl.offsetLeft;

      const walk = ~((x - startX.current) * 2); //scroll-fast
      sliderEl.scrollLeft = scrollLeft.current + walk;
    }
    return;
  };

  const sortComments = () => {
    const sortedArray = commentSource.slice();
    sortedArray.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    return sortedArray;
  };

  useEffect(() => {
    if (commentSource.length) {
      const sortedArray_ = sortComments().slice();
      dispatch(setComments(sortedArray_));
    }
    const el_ = document.querySelector(".comments-container") as HTMLElement;
    if (el_) {
      setSliderEl(el_);
    }
  }, []);

  return (
    <Grid container className="comments-parent">
      <Grid container className="header">
        <InsertCommentRoundedIcon fontSize="small" />
        <Typography>مردم درباره ما چه میگویند؟</Typography>
      </Grid>
      <Grid
        container
        className={`comments-container ${
          isMouseDown ? "" : "comments-scroll-enable"
        }`}
        onMouseUp={handleMouseUp}
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseMove={(event) => handleSliderDrag(event)}
      >
        {commentsArr.map((value, index) => {
          return (
            <Grid
              xs={12}
              sm={4}
              lg={3}
              key={index}
              className="single-item-container"
            >
              <div className="comment-item">
                <Typography variant="body2">{value.text}</Typography>
                <div>
                  <Typography variant="caption">
                    {NumToPersian(value.date)}
                  </Typography>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
