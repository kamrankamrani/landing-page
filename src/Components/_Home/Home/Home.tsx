import { Grid } from "@mui/material";
import Comments from "../Comments/Comments";
import TextBox from "../TextBox/TextBox";
import Widget from "../Widget/Widget";
import "./Style/style.css";

export default function Home() {
  return (
    <Grid container className="home-main-container">
      <TextBox />
      <Widget />
      <Comments />
    </Grid>
  );
}
