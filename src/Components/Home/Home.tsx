import { Grid } from "@mui/material";
import Comments from "../Comments/Comments";
import Widget from "../Widget/Widget";
import "./Style/style.css";

export default function Home() {
  return (
    <Grid container className="home-main-container">
      <Widget />
      <Comments />
    </Grid>
  );
}
