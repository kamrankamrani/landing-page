import { Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks";

export default function DetailsTab() {
  const details: string = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.technical_text
  );
  return <Typography>{details}</Typography>;
}
