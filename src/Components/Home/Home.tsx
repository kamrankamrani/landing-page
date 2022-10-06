import { Grid } from "@mui/material";
import "./Style/style.css";

export default function Home() {
  return (
    <Grid container className="home-main-container">
      <div className="lamp-container">
        <div className="lamp lamp-on"></div>
        <div className="shadow"></div>
      </div>
    </Grid>
  );
}
