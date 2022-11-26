import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { setOpenMobileMenu } from "../../../features/portalSlice/portalSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import MobileMenuBody from "../MobileMenuBody/MobileMenuBody";
import "./Style/style.css";

const mobileModalRoot = document.getElementById("mobile-menu-modal");

export default function MobilMenu() {
  const openMobileMenu = useAppSelector(
    (state) => state.portalSlice.openMobileMenu
  );
  const dispatch = useAppDispatch();
  const elRef = useRef<HTMLDivElement | null>(null);

  const handleMobileModalClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    dispatch(setOpenMobileMenu(false));
    return;
  };

  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.classList.add("mobile-menu-container");
    elRef.current.addEventListener("click", (e) => handleMobileModalClick(e));
  }

  useEffect(() => {
    if (!elRef.current || !mobileModalRoot) return;
    mobileModalRoot.appendChild<HTMLDivElement>(elRef.current);
    return () => {
      dispatch(setOpenMobileMenu(false));
      if (elRef.current && mobileModalRoot) {
        mobileModalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!elRef.current) return;
    if (openMobileMenu) {
      elRef.current.style.width = "100%";
    } else {
      elRef.current.style.width = "0";
    }
  }, [openMobileMenu]);

  return mobileModalRoot && createPortal(<MobileMenuBody />, elRef.current);
}
