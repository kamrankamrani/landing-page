import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppSelector } from "../../../hooks";
import ImageModalBody from "../ImageModalBody/ImageModalBody";
import "./Style/style.css";

const imgModalRoot = document.getElementById("image-modal");

export default function ImageModal() {
  const openImageModal = useAppSelector(
    (state) => state.portalSlice.openImageModal
  );
  const imageUrl = useAppSelector(
    (state) => state.shopSlice.shopDetailPage.index_image_url
  );
  const imgModalEl = useRef<HTMLDivElement | null>(null);
  if (!imgModalEl.current) {
    imgModalEl.current = document.createElement("div");
    imgModalEl.current.classList.add("img-modal-container");
  }

  useEffect(() => {
    if (imgModalRoot && imgModalEl.current) {
      imgModalRoot.appendChild<HTMLDivElement>(imgModalEl.current);
    }
    return () => {
      if (imgModalRoot && imgModalEl.current) {
        imgModalRoot.removeChild(imgModalEl.current);
      }
    };
  }, []);

  useEffect(() => {
    if (imgModalEl.current) {
      if (openImageModal) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        // imgModalEl.current.style.backgroundImage = `url(${imageUrl})`;
        imgModalEl.current.style.zIndex = "10";
        imgModalEl.current.style.opacity = "1";
      } else {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("position");
        // imgModalEl.current.style.backgroundImage = "none";
        imgModalEl.current.style.opacity = "0";
        imgModalEl.current.style.zIndex = "-10";
      }
    }
  }, [openImageModal]);

  return (
    imgModalEl.current && createPortal(<ImageModalBody />, imgModalEl.current)
  );
}
