import "./HomePage.css";
import { MDBContainer, MDBNavbar, MDBBtn, MDBBadge } from "mdb-react-ui-kit";
import { sessionStorageTypes } from "../../Constants/Constants";
import {
  clearSessionStorage,
  getSessionStorageItems,
} from "../../SessionStorageFunction/SessionStorageFunction";

export const HomePage = ({ setIsUserLoggedIn }) => {
  const { [sessionStorageTypes.userName]: userName } = getSessionStorageItems();

  return (
    <MDBNavbar dark bgColor="dark">
      <MDBContainer fluid>
        <div className="merger">
          <MDBBadge className="px-2" color="secondary" light>
            <h5 className="my-0 badgeText">Welcome back, {userName}!</h5>
          </MDBBadge>
          <MDBBtn
            color="success"
            className="me-2 logoutButton"
            type="button"
            onClick={() => {
              clearSessionStorage();
              setIsUserLoggedIn(false);
            }}
          >
            Logout
          </MDBBtn>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
};