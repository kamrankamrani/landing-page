import { useState, useEffect } from "react";
import "./Style/style.css";

export default function ClubForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  //   const [tickElement, setTickElement] = useState<Element | null>(null);

  const handleSignFormClick = () => {
    setIsSuccess(true);
  };

  //   useEffect(() => {
  //     if (isSuccess) {
  //       if (!tickElement) {
  //         return;
  //       }
  //       tickElement.classList.add("success-button-animate");
  //     }
  //   }, [isSuccess]);

  //   useEffect(() => {
  //     const el_ = document.querySelector("#signup-club-form-button");
  //     if (el_) {
  //       setTickElement(el_);
  //     }
  //   }, []);

  return (
    <>
      <input
        className={`form-input ${isSuccess ? "disable" : ""}`}
        placeholder="ایمیل خود را وارد کنید"
        disabled={isSuccess}
      ></input>
      <button onClick={handleSignFormClick} className="form-button">
        <div
          id="signup-club-form-button"
          //   className="success-button"
          className={`success-button ${
            isSuccess ? "success-button-animate" : ""
          }`}
        >
          <span
            className={`${isSuccess ? "success-button-span-left" : ""}`}
          ></span>
          <span
            className={`${isSuccess ? "success-button-span-right" : ""}`}
          ></span>
        </div>
        <p>عضویت در باشگاه</p>
      </button>
    </>
  );
}
