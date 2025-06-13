// import React, { use } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";
import ProgressBar from "../components/ProgressBar";
import FormBasicInfo from "../components/FormBasicInfo";
import FormPropertyDetails from "../components/FormPropertyDetails";
import FormGeneralInfo from "../components/FormGeneralInfo";
import FormLocationInfo from "../components/FormLocationInfo";
// import { Link } from "react-router-dom";

const AddProperty = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const stepNext = () => {
    setStep(step + 1);
  };

  const stepBack = () => {
    setStep(step - 1);
  };

  const [formData, setFormData] = useState({
    userId: localStorage.getItem("loggedInUser"),
  });

  const handleOnChange = (section, field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: e.target.value,
      },
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      // console.log(formData);
      stepNext();
    }
    if (step === 2) {
      // console.log(formData);
      stepNext();
    }
    if (step === 3) {
      // console.log(formData);
      stepNext();
    }
    if (step === 4) {
      // console.log(formData);
      try {
        const response = await fetch(
          "http://localhost:8080/realestate/property/add",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(formData),
          }
        );
        const result = await response.json();
        const { status, message, error } = result;
        // console.log(result);

        if (status) {
          alert(message);
          setTimeout(() => {
            navigate("/properties");
          }, 1000);
          setFormData({});
        } else if (!status) {
          alert(message);
        } else if (error) {
          alert(error);
        }
      } catch (e) {
        console.error("Error:", e);
        alert("Failed to Add Property");
      }
    }
  };

  // const basicInfoSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add form handling logic here
  //   alert("Property submitted!");
  // };

  return (
    <div className="container-fluid">
      <div className="row addFormContainer">
        <div className="col-auto p-0">
          <Sidebar />
        </div>
        <div className="col w-95 p-0">
          <Header />
          <div className="p-5 AddPropertyMainContainer">
            <div className="heading">ADD NEW PROPERTY</div>
            <ProgressBar step={step} />
            {step === 1 && (
              <FormBasicInfo
                formData={formData}
                handleOnChange={handleOnChange}
                formSubmit={formSubmit}
              />
            )}
            {step === 2 && (
              <FormPropertyDetails
                formData={formData}
                handleOnChange={handleOnChange}
                stepBack={stepBack}
                formSubmit={formSubmit}
              />
            )}
            {step === 3 && (
              <FormGeneralInfo
                formData={formData}
                handleOnChange={handleOnChange}
                stepBack={stepBack}
                formSubmit={formSubmit}
              />
            )}
            {step === 4 && (
              <FormLocationInfo
                formData={formData}
                handleOnChange={handleOnChange}
                stepBack={stepBack}
                formSubmit={formSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
