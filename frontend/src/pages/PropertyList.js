import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import "./PropertyList.css";
import { useState, useEffect } from "react";
import ViewProperty from "../components/ViewProperty";
import EditProperty from "../components/EditProperty";

const PropertyList = () => {
  const [propertyList, setPropertyList] = useState([]);
  const [selectProperty, setSelectProperty] = useState([]);
  const [openViewPopUp, setOpenViewPopUp] = useState(false);
  const [openEditPopUp, setOpenEditPopUp] = useState(false);
  const [searchPPD, setSearchPPD] = useState("");
  const [updateData, setUpdateData] = useState({});

  const list = async (e) => {
    // e.preventDefault();
    try {
      const userId = localStorage.getItem("loggedInUser");

      const response = await fetch(
        `https://real-estate-backend-p937.onrender.com/realestate/property/list/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const result = await response.json();
      setPropertyList(result.data);
      // console.log(result.data);
    } catch (e) {
      console.error("Error:", e);
      alert("Failed to Fetch Your data");
    }
  };

  useEffect(() => {
    list();
  }, []);

  // const [searchId, setSearchId] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://real-estate-backend-p937.onrender.com/realestate/property/search/${searchPPD}`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const result = await response.json();
      // console.log(result.data);

      if (result.status) {
        setPropertyList(result.data);
      } else {
        alert(result.message || "No results found.");
        setPropertyList([]);
      }
    } catch (e) {
      console.error("Error:", e);
      alert("Failed to fetch search results.");
    }
  };

  const handleViewData = async (id) => {
    try {
      const response = await fetch(
        `https://real-estate-backend-p937.onrender.com/realestate/property/search/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const result = await response.json();
      // console.log(result.data[0]);

      if (result.status) {
        setUpdateData(result.data[0]);
        setSelectProperty(result.data);
      } else {
        alert(result.message || "No results found.");
        setSelectProperty([]);
      }
    } catch (e) {
      console.error("Error:", e);
      alert("Failed to fetch search results.");
    }
  };

  const updateProperty = async (id, viewUpdateData) => {
    try {
      const response = await fetch(
        `https://real-estate-backend-p937.onrender.com/realestate/property/edit/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(viewUpdateData),
        }
      );

      const result = await response.json();
      const { status, message, error } = result;
      // console.log(result);

      if (status) {
        alert(message);
        if (openViewPopUp && !openEditPopUp) {
          handleViewData(selectProperty[0].ppdId);
        } else if (!openViewPopUp && openEditPopUp) {
          handleViewData(updateData.ppdId);
        }
        list();
      } else if (!status) {
        alert(message);
      } else if (error) {
        alert(error);
      }
    } catch (e) {
      console.error("Error:", e);
      alert("Failed to Add Property");
    }
  };

  const handleEditOnChange = (section, field) => (e) => {
    setUpdateData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: e.target.value,
      },
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row listContainor">
        <div className="col-auto p-0">
          <Sidebar />
        </div>
        <div className="col w-95 p-0">
          <Header />
          <div className="p-4 List">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex w-auto searchBar">
                <input
                  type="search"
                  placeholder="Search PPD ID"
                  className="form-control border-0 shadow-none w-100"
                  value={searchPPD}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchPPD(value);
                    if (value.trim() === "") {
                      list();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch(e);
                  }}
                />

                <div className="searchSeprate"></div>
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="btn border-0"
                >
                  <IoIosSearch />
                </button>
              </div>

              <Link
                to="/properties/add-property"
                className="btn btn-primary btn-add"
              >
                + Add Property
              </Link>
            </div>

            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th className="dataStart">PPD ID</th>
                  <th>Image</th>
                  <th>Property</th>
                  <th>Contact</th>
                  <th>Area</th>
                  <th>Views</th>
                  <th>Status</th>
                  <th>Days Left</th>
                  <th className="dataEnd">Action</th>
                </tr>
              </thead>
              <tbody>
                {propertyList.map((value, key) => {
                  return (
                    <tr key={key} className="tableRow">
                      <td className="dataStart">{value.ppdId}</td>
                      <td>
                        {/* <img src="*" alt="Property" width="50" /> */}
                        <FaImages />
                      </td>
                      <td>{value.basicInfo.propertyType}</td>
                      <td> {value.generalInfo.mobile} </td>
                      <td> {value.propertyDetails.totalArea} </td>
                      <td> {value.views} </td>
                      <td>
                        <div className="Status">
                          {" "}
                          {value.soldStatus === false ? "Unsold" : "Sold"}{" "}
                        </div>
                      </td>
                      <td>{value.daysleft}</td>
                      <td className="dataEnd">
                        <button
                          className="btn "
                          onClick={() => {
                            handleViewData(value.ppdId);
                            setOpenViewPopUp(true);
                            setOpenEditPopUp(false);
                          }}
                        >
                          <IoEye />
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            handleViewData(value.ppdId);
                            setOpenEditPopUp(true);
                            setOpenViewPopUp(false);
                          }}
                        >
                          <MdEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openViewPopUp && !openEditPopUp && (
        <ViewProperty
          selectProperty={selectProperty}
          onClose={() => {
            setSelectProperty([]);
            setUpdateData({});
            setOpenViewPopUp(false);
          }}
          updateProperty={updateProperty}
          setSelectProperty={setSelectProperty}
        />
      )}
      {openEditPopUp && !openViewPopUp && (
        <EditProperty
          handleEditOnChange={handleEditOnChange}
          updateData={updateData}
          onClose={() => {
            setUpdateData({});
            setSelectProperty([]);
            setOpenEditPopUp(false);
          }}
          updateProperty={updateProperty}
          setUpdateData={setUpdateData}
        />
      )}
    </div>
  );
};

export default PropertyList;
