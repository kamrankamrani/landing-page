import { Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { ShopDetailPageType } from "../../../Services/Types";

export default function DetailsTab() {
  const shopItem: ShopDetailPageType = useAppSelector(
    (state) => state.shopSlice.shopDetailPage
  );
  return <Typography>{shopItem.technical_text}</Typography>;
}
