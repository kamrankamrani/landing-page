import { Grid } from "@mui/material";
import { useState } from "react";
import "./Style/style.css";

export default function ClubForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const ValidateEmail = (email: string) => {
    if (typeof email !== "string") return;
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignFormClick = () => {
    if (!ValidateEmail(email)) {
      setIsError(true);
      return;
    }
    setIsSuccess(true);
  };

  const handleFormEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    isError && setIsError(false);
    setEmail(e.target.value);
  };

  return (
    <Grid xs={10} md={6} className="signup-club">
      <div className="club-signup-form-main-wrapper">
        <div className="club-signupform-container">
          <input
            className={`form-input ${isSuccess ? "disable" : ""}`}
            placeholder="ایمیل خود را وارد کنید"
            disabled={isSuccess}
            value={email}
            onChange={(e) => handleFormEmail(e)}
          ></input>
          <button onClick={handleSignFormClick} className="form-button">
            <div
              id="signup-club-form-button"
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
        </div>
        <div className={`form-error-text-container ${isError && "visible"}`}>
          <p>اطلاعات وارد شده اشتباه است!</p>
        </div>
      </div>
    </Grid>
  );
}
