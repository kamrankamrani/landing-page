import { Grid } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setOpenImageModal } from "../../../features/portalSlice/portalSlice";
import "./Style/style.css";

export default function ImageModalBody() {
  const openImageModal = useAppSelector(
    (state) => state.portalSlice.openImageModal
  );
  const imageUrl = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.index_image_url
  );
  const dispatch = useAppDispatch();

  const handleCloseImageModal = () => {
    dispatch(setOpenImageModal(false));
  };

  return (
    <>
      <Grid
        container
        className="extra-img-div"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></Grid>
      <Grid container className="img-modal-body">
        <Grid container className="icon-container">
          <CloseRoundedIcon fontSize="large" onClick={handleCloseImageModal} />
        </Grid>
        <Grid container className="img-container">
          <Grid item className="img-wrapper">
            <img alt="modal-img" src={imageUrl} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
