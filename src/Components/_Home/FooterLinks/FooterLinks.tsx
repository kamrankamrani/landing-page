import { Grid, Typography } from "@mui/material";
import "./Style/style.css";

export default function FooterLinks() {
  const digikalaLink = "https://www.digikala.com/seller/dyh65/";
  const androidAppLink = "https://cafebazaar.ir/app/com.visto.Visto";
  const superAppLink = "https://app.visto.ir";

  const handleLinkClick = (link: string) => {
    if (!link) return;
    switch (link) {
      case "digikala":
        window.open(digikalaLink, "_blank")?.focus();
        break;
      case "androidapp":
        window.open(androidAppLink, "_blank")?.focus();
        break;
      case "superapp":
        window.open(superAppLink, "_blank")?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <Grid item xs={12} md={4} className="footer-links-container">
      <Typography className="footer-links-title" variant="body2">
        لینک های مفید
      </Typography>
      <Grid container className="footer-links-wrapper">
        <div className="footer-link-item-container">
          <Typography variant="body2">همکاری با ما</Typography>
        </div>
        <div className="footer-link-item-container">
          <Typography variant="body2">موقعیت های شغلی</Typography>
        </div>
        <div className="footer-link-item-container">
          <Typography
            onClick={() => handleLinkClick("digikala")}
            variant="body2"
          >
            فروشگاه دیجیکالا
          </Typography>
        </div>
        <div className="footer-link-item-container">
          <Typography
            onClick={() => handleLinkClick("androidapp")}
            variant="body2"
          >
            دانلود اپلیکیشن اندروید
          </Typography>
        </div>
        <div className="footer-link-item-container">
          <Typography
            variant="body2"
            onClick={() => handleLinkClick("superapp")}
          >
            دانلود وب اپلیکیشن ( برای آیفون و اندروید )
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
