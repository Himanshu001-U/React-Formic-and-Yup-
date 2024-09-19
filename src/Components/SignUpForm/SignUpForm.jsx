import { useFormik } from "formik";
import "./SignUpForm.css";
import { sIngUpValidation } from "../../Validations/SIngUpValidation";
import { setSessionData } from "../../SessionStorageFunction/SessionStorageFunction";
import { sessionStorageTypes } from "../../Constants/Constants";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export const SignUpForm = ({ setIsUserLoggedIn }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    agree_terms: false,
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleReset,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: sIngUpValidation,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values, action) => {
      setSessionData({
        [sessionStorageTypes.IsUserLoggedIn]: true,
        [sessionStorageTypes.userName]: values.name,
      });
      setIsUserLoggedIn(true);
      action.resetForm();
    },
  });

  // Code for disable the reset button
  let disableResetButton = Object.keys(values);
  disableResetButton = disableResetButton.filter((name) => values[name]).length;

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              {/* Name  */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <div className="d-flex flex-column widthSetter">
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <span className="errorMessage">{errors.name}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Email  */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <div className="d-flex flex-column widthSetter">
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <span className="errorMessage">{errors.email}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Password  */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <div className="d-flex flex-column widthSetter">
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <span className="errorMessage">{errors.password}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Confirm password  */}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <div className="d-flex flex-column widthSetter">
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <span className="errorMessage">
                      {errors.confirm_password}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Terms and conditions  */}
              <div className="mb-4 checkboxLabel">
                <MDBCheckbox
                  name="agree_terms"
                  id="flexCheckDefault"
                  label="By clicking this you are agree to our terms and conditions"
                  checked={values.agree_terms ? true : false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.agree_terms && touched.agree_terms ? (
                  <div className="termsAndConditionErrorSetter">
                    <span className="errorMessage ">{errors.agree_terms}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* Buttons  */}
              <div className="spaceBetweenClass">
                <MDBBtn
                  className="mb-4 padding-removed"
                  size="lg"
                  color="success"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </MDBBtn>
                <MDBBtn
                  className="mb-4 padding-removed"
                  size="lg"
                  color="danger"
                  onClick={handleReset}
                  disabled={disableResetButton === 0}
                >
                  Reset form
                </MDBBtn>
              </div>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};