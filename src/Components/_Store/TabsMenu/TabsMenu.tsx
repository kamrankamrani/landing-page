import { Grid, Tabs, Tab, Typography } from "@mui/material";
import "./Style/style.css";

export default function TabsMenu() {
  return (
    <div className="tabs-container">
      <Grid container className="tabs">
        <Tabs>
          <Tab
            className="tab-header"
            label={<Typography>مشخصات فنی</Typography>}
          />
          <Tab
            className="tab-header"
            label={<Typography>اپلیکیشن</Typography>}
          />
          <Tab
            className="tab-header"
            label={<Typography>پرسش و پاسخ</Typography>}
          />
        </Tabs>
      </Grid>
    </div>
  );
}
