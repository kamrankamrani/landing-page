import { Grid } from "@mui/material";
import ClubForm from "../ClubFrom/ClubForm";
import "./Style/style.css";

export default function Footer() {
  return (
    <Grid container className="footer-container">
      <Grid xs={10} md={6} className="signup-club">
        <ClubForm />
      </Grid>
    </Grid>
  );
}
