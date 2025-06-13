import React from "react";

const ViewProperty = ({ selectProperty, onClose, updateProperty }) => {
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
        {selectProperty.map((value, key) => {
          return (
            <React.Fragment key={key}>
              <div
                className="modal-content"
                style={{ backgroundColor: "#e2f9f4" }}
                key={key}
              >
                <div className="modal-header">
                  <h4 className=" col-11 modal-title ">
                    Property Details ({value.ppdId}){" "}
                  </h4>
                  <button
                    type="button"
                    className="btn-close p2 col-1"
                    onClick={onClose}
                  ></button>
                </div>

                <div
                  className="modal-body"
                  style={{ backgroundColor: "#fafbfc" }}
                >
                  <div className="container mb-2 text-left">
                    <div className="row mt-3 prop">
                      <div className="col-12 p-3 text-center">
                        <h3>Basic Info</h3>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Propert Type:</strong>{" "}
                          {value.basicInfo.propertyType.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Negotable:</strong>{" "}
                          {value.basicInfo.negotable.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Price:</strong>{" "}
                          {value.basicInfo.price}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Property Age:</strong>{" "}
                          {value.basicInfo.propertyAge === "new"
                            ? value.basicInfo.propertyAge.toUpperCase()
                            : `${value.basicInfo.propertyAge} YEARS`}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Property Approved:</strong>{" "}
                          {value.basicInfo.propertyApproved.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Property Description:</strong>{" "}
                          {value.basicInfo.propertyDescription}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Bank Loan:</strong>{" "}
                          {value.basicInfo.bankLoan.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Ownership:</strong>{" "}
                          {value.basicInfo.ownership.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className="row mt-5 prop">
                      <div className="col-12 p-3 text-center">
                        <h3>Property Details</h3>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Length:</strong>{" "}
                          {value.propertyDetails.length}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Breadth:</strong>{" "}
                          {value.propertyDetails.breadth}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Total Area:</strong>{" "}
                          {value.propertyDetails.totalArea}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Area Unit:</strong>{" "}
                          {value.propertyDetails.areaUnit}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">No of BHK:</strong>{" "}
                          {value.propertyDetails.noOfBhk.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">No of Floor:</strong>{" "}
                          {value.propertyDetails.noOfFloor}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Attached:</strong>{" "}
                          {value.propertyDetails.attached.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Western Toilet:</strong>{" "}
                          {value.propertyDetails.westernToilet.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Furnished:</strong>{" "}
                          {value.propertyDetails.furnished.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Car Parking:</strong>{" "}
                          {value.propertyDetails.carParking}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Lift:</strong>{" "}
                          {value.propertyDetails.lift.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Electricity:</strong>{" "}
                          {value.propertyDetails.electricity.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Facing:</strong>{" "}
                          {value.propertyDetails.facing.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className="row mt-5 prop">
                      <div className="col-12 p-3 text-center">
                        <h3>General Info</h3>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Name:</strong>{" "}
                          {value.generalInfo.name.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Mobile:</strong>{" "}
                          {value.generalInfo.mobile}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Posted By:</strong>{" "}
                          {value.generalInfo.postedBy.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Sale Type:</strong>{" "}
                          {value.generalInfo.saleType.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Featured Package:</strong>{" "}
                          {value.generalInfo.featuredPackage.toUpperCase()}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">PPD Package:</strong>{" "}
                          {value.generalInfo.ppdPackage.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className="row mt-5 mb-3 prop">
                      <div className="col-12 p-3 text-center">
                        <h3>Location Info</h3>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Email:</strong>{" "}
                          {value.locationInfo.email}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">City:</strong>{" "}
                          {value.locationInfo.city}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Area:</strong>{" "}
                          {value.locationInfo.area}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Pincode:</strong>{" "}
                          {value.locationInfo.pincode}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Address:</strong>{" "}
                          {value.locationInfo.address}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Lanmark:</strong>{" "}
                          {value.locationInfo.landmark}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Latitude:</strong>{" "}
                          {value.locationInfo.latitude}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mt-3 ms-2">
                          <strong className="">Longitude:</strong>{" "}
                          {value.locationInfo.longitude}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-center">
                    {value.soldStatus === false ? (
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          updateProperty(value._id, { soldStatus: true });
                        }}
                      >
                        Mark as Sold
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          updateProperty(value._id, { soldStatus: false });
                        }}
                      >
                        Mark as Unsold
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ViewProperty;
