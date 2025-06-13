import React, { useState } from "react";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [userData, setUserData] = useState({});

  const inputOneChage = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      try {
        const response = await fetch(
          "http://localhost:8080/realestate/signin",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        const result = await response.json();
        const { status, message, JWTtoken, userId } = result;
        console.log(result);

        if (status) {
          localStorage.setItem("token", JWTtoken);
          localStorage.setItem("loggedInUser", userId);
          setTimeout(() => {
            navigate("/properties");
          }, 1000);
          setUserData({});
        } else if (!status) {
          alert(message);
        }
      } catch (e) {
        console.error("Error:", e);
        alert("Failed to Sign Up");
      }

      // console.log("Sign In:", userData);
    } else {
      if (userData.password !== userData.conPassword) {
        return alert("Passwords do not match");
      }
      try {
        const response = await fetch(
          "http://localhost:8080/realestate/signup",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const result = await response.json();
        const { status, message, userId } = result;

        console.log(result);
        if (status) {
          alert(message);
          setUserData({ userId: userId });
          setIsSignIn(true);
        } else if (!status) {
          alert(message);
        }
      } catch (e) {
        console.error("Error:", e);
        alert("Failed to Sign Up");
      }

      console.log("Sign Up:", userData);
    }
  };

  const toggleForm = () => {
    setUserData("");
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="AuthMainContainer">
      <div className="formContainer">
        <div className="logo">
          <img src="*" alt="" />
          Logo
        </div>
        <p>
          {isSignIn
            ? "Enter your credential to access your account"
            : "Create New Account"}
        </p>
        <form onSubmit={handleSubmit}>
          {isSignIn ? (
            <>
              <div>
                <input
                  placeholder="User ID"
                  type="text"
                  name="userId"
                  value={userData.userId || ""}
                  onChange={inputOneChage}
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={userData.password || ""}
                  onChange={inputOneChage}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={userData.email || ""}
                  onChange={inputOneChage}
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={userData.password || ""}
                  onChange={inputOneChage}
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  name="conPassword"
                  value={userData.conPassword || ""}
                  onChange={inputOneChage}
                  required
                />
              </div>
            </>
          )}

          <div>
            <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
          </div>

          <div></div>
        </form>

        <div>
          {isSignIn ? (
            <p>
              Don’t have an account?{" "}
              <button type="button" onClick={toggleForm}>
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button type="button" onClick={toggleForm}>
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
