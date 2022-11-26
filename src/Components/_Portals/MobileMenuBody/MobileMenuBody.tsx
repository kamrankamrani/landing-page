import { Grid, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LoupeOutlinedIcon from "@mui/icons-material/LoupeOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import "./Style/style.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { setOpenMobileMenu } from "../../../features/portalSlice/portalSlice";

export default function MobileMenuBody() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleMobileMenuItemClick = (value: number) => {
    dispatch(setOpenMobileMenu(false));
    switch (value) {
      case 0: //home
        navigate("/");
        break;
      case 1: //shop
        navigate("/store");
        break;
      case 2: //solutions
        navigate("/solutions");
        break;
      case 3: //app
        navigate("#");
        break;
      case 4: //plus
        navigate("#");
        break;
      case 5: //call
        navigate("#");
        break;

      default:
        break;
    }
  };

  return (
    <Grid container className="mobile-menu">
      <Grid className="item" onClick={() => handleMobileMenuItemClick(0)}>
        <HomeOutlinedIcon fontSize="small" />
        <Typography variant="body2">خانه</Typography>
      </Grid>
      <Grid className="item" onClick={() => handleMobileMenuItemClick(1)}>
        <ShoppingBagOutlinedIcon fontSize="small" />
        <Typography variant="body2">فروشگاه</Typography>
      </Grid>
      <Grid className="item" onClick={() => handleMobileMenuItemClick(2)}>
        <EmojiObjectsOutlinedIcon fontSize="small" />
        <Typography variant="body2">راه کار ها</Typography>
      </Grid>
      <Grid className="item" onClick={() => handleMobileMenuItemClick(3)}>
        <PhoneAndroidOutlinedIcon fontSize="small" />
        <Typography variant="body2">اپلیکیشن</Typography>
      </Grid>
      <Grid className="item" onClick={() => handleMobileMenuItemClick(4)}>
        <LoupeOutlinedIcon fontSize="small" />
        <Typography variant="body2">ویستو پلاس</Typography>
      </Grid>
      <Grid className="item" onClick={() => handleMobileMenuItemClick(5)}>
        <AddIcCallOutlinedIcon fontSize="small" />
        <Typography variant="body2">تماس با ما</Typography>
      </Grid>
    </Grid>
  );
}
