import { Grid, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import AppTab from "../AppTab/AppTab";
import DetailsTab from "../DetailsTab/DetailsTab";
import "./Style/style.css";

export default function TabsMenu() {
  const [tabSelected, setTabSelected] = useState(0);
  const handleTabClick = (value: number) => {
    //0 : مشخصات فنی
    //1 : اپلیکیشن
    //2 : پرسش و پاسخ
    setTabSelected(value);
  };

  return (
    <div className="tabs-container">
      <Grid container className="tabs">
        <Tabs value={4}>
          <Tab
            disableTouchRipple
            onClick={() => handleTabClick(0)}
            className={`tab-header ${tabSelected === 0 ? "selected" : ""}`}
            label={<Typography>مشخصات فنی</Typography>}
          />
          <Tab
            disableTouchRipple
            onClick={() => handleTabClick(1)}
            className={`tab-header ${tabSelected === 1 ? "selected" : ""}`}
            label={<Typography>اپلیکیشن</Typography>}
          />
          <Tab
            disableTouchRipple
            onClick={() => handleTabClick(2)}
            className={`tab-header ${tabSelected === 2 ? "selected" : ""}`}
            label={<Typography>پرسش و پاسخ</Typography>}
          />
        </Tabs>
        <Grid container className="tab-panel-container">
          {tabSelected === 0 && <DetailsTab />}
          {tabSelected === 1 && <AppTab />}
          {tabSelected === 2 && <Typography>Q&A</Typography>}
        </Grid>
      </Grid>
    </div>
  );
}
