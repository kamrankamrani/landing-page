import { Grid } from "@mui/material";
import ClubForm from "../ClubFrom/ClubForm";
import FooterDetails from "../FooterDetails/FooterDetail";
import "./Style/style.css";

export default function Footer() {
  return (
    <Grid container className="footer-container">
      <ClubForm />
      <FooterDetails />
    </Grid>
  );
}
