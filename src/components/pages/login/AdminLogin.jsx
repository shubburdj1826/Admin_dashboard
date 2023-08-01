import React, { useState } from "react";
import "./adminLogin.scss";
// import { VisibilityOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({});
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: credentials,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const admin = { email: "xyz@gmail.com", password: "xyz123" };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
    if (
      credentials.email === admin.email &&
      credentials.password === admin.password
    ) {
      localStorage.setItem("adminToken", JSON.stringify(credentials));
      window.location.reload(1);
    } else {
      alert("Invalid Credentials");
      window.location.reload(1);
    }
  };

  const handleShowPassword = () => {
    const password = document.getElementById("password");
    password.type === "password"
      ? (password.type = "text")
      : (password.type = "password");
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <div className="login-image1">
          <img src="assets/images/image 97.png" alt="" />
        </div>
        <div className="login-image1">
          <img src="assets/images/image 96.png" alt="" />
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-form-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="57"
              viewBox="0 0 76 57"
              fill="none"
            >
              <path
                d="M75.3895 31.4985C75.3895 33.2978 75.4425 35.097 75.3781 36.8963C75.2342 41.0517 72.4349 44.548 68.0522 45.0859C67.5181 45.1503 66.984 45.2109 66.4537 45.1313C66.1393 45.0859 66.0256 45.2223 65.8779 45.4723C65.0862 46.8549 64.5066 48.3435 63.6241 49.6807C62.124 51.9573 60.2717 53.874 57.855 55.1694C55.7905 56.2755 53.5632 56.7907 51.2185 56.7907C45.5214 56.7907 39.8243 56.7907 34.1272 56.7907C33.4946 56.7907 32.8696 56.7187 32.2862 56.4422C31.5249 56.0786 31.1764 55.4384 31.1082 54.6316C30.9188 52.4459 32.7029 50.3928 34.8848 50.3133C36.7598 50.2451 38.6386 50.2678 40.5175 50.3057C41.6463 50.3284 42.5554 50.8247 43.26 51.6769C43.51 51.98 43.7827 52.0936 44.1539 52.0974C46.0176 52.1088 47.8775 52.1088 49.7412 52.1467C50.9571 52.1732 52.1768 52.2754 53.3662 51.9686C55.3852 51.4497 57.0936 50.3322 58.4005 48.764C61.552 44.9836 63.5142 40.6237 64.3097 35.7561C64.6582 33.6311 64.768 31.4757 64.5786 29.3393C64.2529 25.7029 63.3703 22.2028 61.5217 19.002C60.5255 17.2785 59.4952 15.5777 58.1883 14.0738C55.1466 10.5624 51.4571 7.94871 47.1085 6.31231C43.1501 4.82364 39.0402 4.31606 34.8355 4.75546C29.8544 5.27441 25.377 7.10778 21.4186 10.1571C16.1041 14.2481 12.6797 19.5702 11.3161 26.1499C10.6494 29.3658 10.6002 32.6197 11.1343 35.8811C11.6532 39.063 12.7328 42.029 14.3313 44.8169C14.801 45.6351 14.9449 46.4458 14.4033 47.264C13.8426 48.1087 13.0396 48.4951 12.0131 48.4004C11.2403 48.3284 10.7555 47.8473 10.3956 47.2299C10.0926 46.7147 9.81604 46.1806 9.58876 45.6276C9.42967 45.2336 9.20239 45.1427 8.80087 45.1579C6.28945 45.2563 4.09622 44.4533 2.36512 42.6237C0.910543 41.0858 0.0885545 39.1918 0.0506749 37.0706C-0.0175085 33.347 -0.0137207 29.6196 0.0430988 25.8961C0.0923423 22.6498 2.36512 18.9414 6.62658 18.0133C7.3425 17.858 8.05843 17.7633 8.78193 17.8315C9.15694 17.8694 9.35391 17.7368 9.52437 17.4148C10.5358 15.4868 11.6494 13.6117 13.0244 11.9185C15.5813 8.76312 18.5587 6.10019 22.1269 4.11529C24.7899 2.6342 27.5854 1.51675 30.5513 0.838707C34.131 0.0167193 37.7561 -0.233286 41.4039 0.232633C50.6806 1.41448 58.0595 5.80473 63.5142 13.4072C64.4233 14.6761 65.1657 16.0512 65.9044 17.43C66.0559 17.7103 66.2264 17.8429 66.5711 17.8277C70.3401 17.6573 73.5371 19.7975 74.8326 23.2483C75.2076 24.2521 75.4008 25.2749 75.4008 26.3431C75.4008 28.0628 75.4008 29.7825 75.4008 31.5023C75.4008 31.5023 75.397 31.5023 75.3932 31.5023L75.3895 31.4985Z"
                fill="#015BC4"
              />
              <path
                d="M59.2225 32.8091C59.1657 35.3167 58.7452 38.1955 57.4838 40.9039C56.8588 42.2411 55.8701 42.9608 54.3171 42.904C52.8095 42.851 51.3435 42.5934 49.8738 42.3093C46.9684 41.7487 44.0782 41.0933 41.135 40.76C39.2031 40.5403 37.2599 40.5365 35.3204 40.6767C31.6044 40.9456 27.9907 41.8282 24.3467 42.5403C23.1421 42.7752 21.9262 42.957 20.6837 42.8926C20.0852 42.8585 19.5928 42.6047 19.1534 42.2259C18.5966 41.7487 18.1648 41.1615 17.8693 40.4873C16.6912 37.8054 16.1609 34.9909 16.2102 32.0704C16.2783 28.1309 17.3162 24.4566 19.2784 21.0399C20.0739 19.6497 21.0436 18.3921 22.0626 17.1648C23.6838 15.214 25.7786 14.6837 28.2218 15.0322C30.2067 15.3163 32.1158 15.9261 34.0704 16.3352C36.9114 16.9299 39.7031 16.7746 42.4986 16.0814C44.3282 15.6269 46.1464 15.0852 48.0442 14.9526C49.8624 14.8276 51.5215 15.2367 52.7981 16.5814C55.605 19.5398 57.5596 22.9869 58.5369 26.9718C58.9687 28.7408 59.2111 30.5325 59.2149 32.8015L59.2225 32.8091ZM44.8964 28.8847C44.8964 31.0969 46.6389 32.8697 48.8283 32.881C50.9647 32.8924 52.8511 31.0666 52.8322 28.9264C52.817 27.2256 51.5481 24.9831 48.8435 24.9794C46.6502 24.9794 44.8926 26.7104 44.8926 28.8847H44.8964ZM22.5967 28.8923C22.5626 31.0211 24.3467 32.8356 26.5096 32.881C28.6195 32.9227 30.4302 31.1386 30.5438 29.0552C30.6575 26.9491 28.7862 24.9756 26.5475 24.968C24.3846 24.9604 22.6345 26.6764 22.6005 28.8885L22.5967 28.8923Z"
                fill="#015BC4"
              />
            </svg>
            <p>
              Chatbot
              <br />
              Management System
            </p>
          </div>
          <div className="login-form-heading">
            <h2 className="login-heading">Super Admin Login</h2>
          </div>
          <div className="login-form-inputs">
            <form onSubmit={handleClick}>
              <div className="form-div">
                <label htmlFor="email">Enter Email address</label>
                {/* <input type="email" name="email" id="email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})} /> */}
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  value={formik.values.email}
                  // onChange={formik.handleChange}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="form-div">
                <label htmlFor="password">Password</label>
                <div id="passwordWithShow">
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    // onChange={formik.handleChange}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <svg
                    className="showPassSVG"
                    onClick={handleShowPassword}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12.9833 10.0001C12.9833 11.6501 11.6499 12.9834 9.99993 12.9834C8.34993 12.9834 7.0166 11.6501 7.0166 10.0001C7.0166 8.35006 8.34993 7.01672 9.99993 7.01672C11.6499 7.01672 12.9833 8.35006 12.9833 10.0001Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.99987 16.8914C12.9415 16.8914 15.6832 15.1581 17.5915 12.1581C18.3415 10.9831 18.3415 9.00806 17.5915 7.83306C15.6832 4.83306 12.9415 3.09973 9.99987 3.09973C7.0582 3.09973 4.31654 4.83306 2.4082 7.83306C1.6582 9.00806 1.6582 10.9831 2.4082 12.1581C4.31654 15.1581 7.0582 16.8914 9.99987 16.8914Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {/* <span
                  onClick={handleShowPassword}
                  style={{
                    position: "absolute",
                    marginTop: "50px",
                    marginLeft: "380px",
                    cursor: "pointer",
                  }}
                >
                  
                </span> */}
              </div>
              <div className="form-checkbox">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    value="true"
                  />
                  <label htmlFor="vehicle1">Remember me</label>
                </div>
                <p
                  style={{
                    textDecoration: "underline",
                    color: "#58A0FF",
                    fontSize: "14px",
                  }}
                >
                  Forgot Password
                </p>
              </div>

              <button type="submit" className="btn-login">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
