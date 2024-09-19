import { useState } from "react";
import { HomePage } from "../HomePage/HomePage";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { getSessionStorageItems } from "../../SessionStorageFunction/SessionStorageFunction";
import { sessionStorageTypes } from "../../Constants/Constants";

export const ParentComponent = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    getSessionStorageItems()[sessionStorageTypes.IsUserLoggedIn] || false
  );

  return (
    <>
      {isUserLoggedIn ? (
        <HomePage setIsUserLoggedIn={setIsUserLoggedIn} />
      ) : (
        <SignUpForm setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </>
  );
};