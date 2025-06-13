import React from "react";

const EditProperty = ({
  handleEditOnChange,
  updateData,
  onClose,
  updateProperty,
}) => {
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content" style={{ backgroundColor: "#e2f9f4" }}>
          <div className="modal-header">
            <h4 className=" col-11 modal-title ">
              Property Details ({updateData.ppdId}){" "}
            </h4>
            <button
              type="button"
              className="btn-close p2 col-1"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body" style={{ backgroundColor: "#fafbfc" }}>
            <form className="container mb-2 text-left">
              <div className="row mt-5 prop">
                <div className="col-12 p-3 text-center">
                  <h3>Basic Info</h3>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Property Type</label>
                  <select
                    name="propertyType"
                    className="form-select"
                    value={updateData.basicInfo?.propertyType || ""}
                    onChange={handleEditOnChange("basicInfo", "propertyType")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Property Type
                    </option>
                    <option value="flat">Flat</option>
                    <option value="independent-house">Independent House</option>
                    <option value="villa">Villa</option>
                    <option value="commercialShop">Commercial Shop</option>
                    <option value="officeSpace">Office Space</option>
                    <option value="studioApartment">Studio Apartment</option>
                    <option value="farmhouse">Farmhouse</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Negotable</label>
                  <select
                    name="negotable"
                    className="form-select"
                    value={updateData.basicInfo?.negotable || ""}
                    onChange={handleEditOnChange("basicInfo", "negotable")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Negotable
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Example: 10000"
                    value={updateData.basicInfo?.price || ""}
                    onChange={handleEditOnChange("basicInfo", "price")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Ownership</label>
                  <select
                    name="ownership"
                    className="form-select"
                    value={updateData.basicInfo?.ownership || ""}
                    onChange={handleEditOnChange("basicInfo", "ownership")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Ownership
                    </option>
                    <option value="freehold">Freehold</option>
                    <option value="leasehold">Unsold</option>
                    <option value="coOperativeSociety">
                      Co-operative Society
                    </option>
                    <option value="power-of-attorney">Power of Attorney</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Property Age</label>
                  <select
                    name="propertyAge"
                    className="form-select"
                    value={updateData.basicInfo?.propertyAge || ""}
                    onChange={handleEditOnChange("basicInfo", "propertyAge")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Property Age
                    </option>
                    <option value="new">New</option>
                    <option value="0-1">0-1 Year</option>
                    <option value="1-5">1-5 Years</option>
                    <option value="5-10">5-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Property Approved</label>
                  <select
                    name="propertyApproved"
                    className="form-select"
                    value={updateData.basicInfo?.propertyApproved || ""}
                    onChange={handleEditOnChange(
                      "basicInfo",
                      "propertyApproved"
                    )}
                    required
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="inProcess">In Process</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Property Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateData.basicInfo?.propertyDescription || ""}
                    onChange={handleEditOnChange(
                      "basicInfo",
                      "propertyDescription"
                    )}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Bank Loan</label>
                  <select
                    name="bankLoan"
                    className="form-select"
                    value={updateData.basicInfo?.bankLoan || ""}
                    onChange={handleEditOnChange("basicInfo", "bankLoan")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="notSure">Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="row mt-5 prop">
                <div className="col-12 p-3 text-center">
                  <h3>Property Details</h3>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Length</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Example: 1000"
                    value={updateData.propertyDetails?.length || ""}
                    onChange={handleEditOnChange("propertyDetails", "length")}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Breadth</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Example: 1000"
                    value={updateData.propertyDetails?.breadth || ""}
                    onChange={handleEditOnChange("propertyDetails", "breadth")}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Total Area</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Example: 7500"
                    value={updateData.propertyDetails?.totalArea || ""}
                    onChange={handleEditOnChange(
                      "propertyDetails",
                      "totalArea"
                    )}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Area Unit</label>
                  <select
                    name="areaUnit"
                    className="form-select"
                    value={updateData.propertyDetails?.areaUnit || ""}
                    onChange={handleEditOnChange("propertyDetails", "areaUnit")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Area Unit
                    </option>
                    <option value="sqft">Sq.ft</option>
                    <option value="sqm">Sq.m</option>
                    <option value="sqyards">Sq.yards</option>
                    <option value="marla">Marla</option>
                    <option value="kanal">Kanal</option>
                    <option value="acre">Acre</option>
                    <option value="hectare">Hectare</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">No of BHK</label>
                  <select
                    name="noOfBhk"
                    className="form-select"
                    value={updateData.propertyDetails?.noOfBhk || ""}
                    onChange={handleEditOnChange("propertyDetails", "noOfBhk")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select No of BHK
                    </option>
                    <option value="1rk">1 RK</option>
                    <option value="1bhk">1 BHK</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="4bhk">4 BHK</option>
                    <option value="5+bhk">5+ BHK</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">No of Floor</label>
                  <select
                    name="noOfFloor"
                    className="form-select"
                    value={updateData.propertyDetails?.noOfFloor || ""}
                    onChange={handleEditOnChange(
                      "propertyDetails",
                      "noOfFloor"
                    )}
                    required
                  >
                    <option value="" disabled hidden>
                      Select No of Floor
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10+">10+</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Attached</label>
                  <select
                    name="attached"
                    className="form-select"
                    value={updateData.propertyDetails?.attached || ""}
                    onChange={handleEditOnChange("propertyDetails", "attached")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Attached
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Western Toilet</label>
                  <select
                    name="westernToilet"
                    className="form-select"
                    value={updateData.propertyDetails?.westernToilet || ""}
                    onChange={handleEditOnChange(
                      "propertyDetails",
                      "westernToilet"
                    )}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Western Toilet
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Furnished</label>
                  <select
                    name="furnished"
                    className="form-select"
                    value={updateData.propertyDetails?.furnished || ""}
                    onChange={handleEditOnChange(
                      "propertyDetails",
                      "furnished"
                    )}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Furnished
                    </option>
                    <option value="unfurnished">Unfurnished</option>
                    <option value="semiFurnished">Semi-Furnished</option>
                    <option value="fullyFurnished">Fully Furnished</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Car Parking</label>
                  <select
                    name="carParking"
                    className="form-select"
                    value={updateData.propertyDetails?.carParking || ""}
                    onChange={handleEditOnChange(
                      "propertyDetails",
                      "carParking"
                    )}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Car Parking
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Lift</label>
                  <select
                    name="lift"
                    className="form-select"
                    value={updateData.propertyDetails?.lift || ""}
                    onChange={handleEditOnChange("propertyDetails", "lift")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Lift
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Electricity</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Example: 3 phase"
                    value={updateData.propertyDetails?.electricity || ""}
                    onChange={handleEditOnChange(
                      "propertyDetails",
                      "electricity"
                    )}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Facing</label>
                  <select
                    name="facing"
                    className="form-select"
                    value={updateData.propertyDetails?.facing || ""}
                    onChange={handleEditOnChange("propertyDetails", "facing")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Facing
                    </option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="northEast">North-East</option>
                    <option value="northWest">North-West</option>
                    <option value="southEast">South-East</option>
                    <option value="southWest">South-West</option>
                  </select>
                </div>
              </div>

              <div className="row mt-5 prop">
                <div className="col-12 p-3 text-center">
                  <h3>General Info</h3>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Owner"
                    value={updateData.generalInfo?.name || ""}
                    onChange={handleEditOnChange("generalInfo", "name")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Enter Mobile Number"
                    value={updateData.generalInfo?.mobile || ""}
                    onChange={handleEditOnChange("generalInfo", "mobile")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Posted By</label>
                  <select
                    name="postedBy"
                    className="form-select"
                    value={updateData.generalInfo?.postedBy || ""}
                    onChange={handleEditOnChange("generalInfo", "postedBy")}
                    required
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    <option value="owner">Owner</option>
                    <option value="dealer">Dealer</option>
                    <option value="builder">Builder</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Sale Type</label>
                  <select
                    name="saleType"
                    className="form-select"
                    value={updateData.generalInfo?.saleType || ""}
                    onChange={handleEditOnChange("generalInfo", "saleType")}
                    required
                  >
                    <option value="" disabled hidden>
                      Please Select
                    </option>
                    <option value="newBooking">New Booking</option>
                    <option value="resale">Resale</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Featured Package</label>
                  <select
                    name="featuredPackage"
                    className="form-select"
                    value={updateData.generalInfo?.featuredPackage || ""}
                    onChange={handleEditOnChange(
                      "generalInfo",
                      "featuredPackage"
                    )}
                    required
                  >
                    <option value="" disabled hidden>
                      Please Select
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">PPD Package</label>
                  <select
                    name="ppdPackage"
                    className="form-select"
                    value={updateData.generalInfo?.ppdPackage || ""}
                    onChange={handleEditOnChange("generalInfo", "ppdPackage")}
                    required
                  >
                    <option value="" disabled hidden>
                      Please Select
                    </option>
                    <option value="basic">Basic</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                  </select>
                </div>
              </div>

              <div className="row mt-5 prop">
                <div className="col-12 p-3 text-center">
                  <h3>Location Info</h3>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                    value={updateData.locationInfo?.email || ""}
                    onChange={handleEditOnChange("locationInfo", "email")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Enter City Name"
                    value={updateData.locationInfo?.city || ""}
                    onChange={handleEditOnChange("locationInfo", "city")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Enter Area"
                    value={updateData.locationInfo?.area || ""}
                    onChange={handleEditOnChange("locationInfo", "area")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    inputMode="numeric"
                    pattern="\d{6}"
                    maxLength="6"
                    required
                    placeholder="Enter Pincode"
                    value={updateData.locationInfo?.pincode || ""}
                    onChange={handleEditOnChange("locationInfo", "pincode")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Address"
                    value={updateData.locationInfo?.address || ""}
                    onChange={handleEditOnChange("locationInfo", "address")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Landmark"
                    value={updateData.locationInfo?.landmark || ""}
                    onChange={handleEditOnChange("locationInfo", "landmark")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Latitude</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Latitude"
                    value={updateData.locationInfo?.latitude || ""}
                    onChange={handleEditOnChange("locationInfo", "latitude")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Longitude</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Longitude"
                    value={updateData.locationInfo?.longitude || ""}
                    onChange={handleEditOnChange("locationInfo", "longitude")}
                  />
                </div>
              </div>
            </form>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-danger" onClick={onClose}>
                cancel
              </button>

              <button
                className="btn btn-success"
                type="submit"
                onClick={() => {
                  updateProperty(updateData._id, updateData);
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;
