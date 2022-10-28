import { Grid } from "@mui/material";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterSocialMedia from "../FooterSocialMedia/FooterSocialMedia";
import FooterSymbols from "../FooterSymbols/FooterSymbols";
import "./Style/style.css";

export default function FooterDetails() {
  return (
    <Grid container className="footer-details-container">
      <FooterSymbols />
      <FooterLinks />
      <FooterSocialMedia />
    </Grid>
  );
}
