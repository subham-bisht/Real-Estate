const FormGeneralInfo = ({
  formData,
  handleOnChange,
  stepBack,
  formSubmit,
}) => {
  return (
    <form onSubmit={formSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Owner"
            value={formData.generalInfo?.name || ""}
            onChange={handleOnChange("generalInfo", "name")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter Mobile Number"
            value={formData.generalInfo?.mobile || ""}
            onChange={handleOnChange("generalInfo", "mobile")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Posted By</label>
          <select
            name="postedBy"
            className="form-select"
            value={formData.generalInfo?.postedBy || ""}
            onChange={handleOnChange("generalInfo", "postedBy")}
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
            value={formData.generalInfo?.saleType || ""}
            onChange={handleOnChange("generalInfo", "saleType")}
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
            value={formData.generalInfo?.featuredPackage || ""}
            onChange={handleOnChange("generalInfo", "featuredPackage")}
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
            value={formData.generalInfo?.ppdPackage || ""}
            onChange={handleOnChange("generalInfo", "ppdPackage")}
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
      <div className="Buttons d-flex justify-content-center gap-3 mt-3">
        <button
          type="button"
          className="btn btn-primary btn-prev"
          onClick={stepBack}
        >
          Previous
        </button>
        <button type="submit" className="btn btn-success btn-submit">
          Submit & Continue
        </button>
      </div>
    </form>
  );
};

export default FormGeneralInfo;
