import { sessionStorageTypes } from "../Constants/Constants";

export const setSessionData = (obj) => {
  Object.keys(obj).map((data) => sessionStorage.setItem(data, obj[data]));
};

export const getSessionStorageItems = () => {
  return {
    [sessionStorageTypes.IsUserLoggedIn]: sessionStorage.getItem(
      sessionStorageTypes.IsUserLoggedIn
    ),
    [sessionStorageTypes.userName]: sessionStorage.getItem(
      sessionStorageTypes.userName
    ),
  };
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};