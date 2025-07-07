const FormLocationInfo = ({
  formData,
  handleOnChange,
  stepBack,
  formSubmit,
}) => {
  return (
    <form onSubmit={formSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            required
            placeholder="Email"
            value={formData.locationInfo?.email || ""}
            onChange={handleOnChange("locationInfo", "email")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter City Name"
            value={formData.locationInfo?.city || ""}
            onChange={handleOnChange("locationInfo", "city")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Area</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter Area"
            value={formData.locationInfo?.area || ""}
            onChange={handleOnChange("locationInfo", "area")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Pincode</label>
          <input
            type="number"
            className="form-control"
            inputMode="numeric"
            pattern="[0-6]{6}"
            maxLength={6}
            required
            placeholder="Enter Pincode"
            value={formData.locationInfo?.pincode || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,6}$/.test(value)) {
                handleOnChange("locationInfo", "pincode")(e);
              }
            }}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Address"
            value={formData.locationInfo?.address || ""}
            onChange={handleOnChange("locationInfo", "address")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Landmark</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Landmark"
            value={formData.locationInfo?.landmark || ""}
            onChange={handleOnChange("locationInfo", "landmark")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Latitude</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Latitude"
            value={formData.locationInfo?.latitude || ""}
            onChange={handleOnChange("locationInfo", "latitude")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Longitude</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Longitude"
            value={formData.locationInfo?.longitude || ""}
            onChange={handleOnChange("locationInfo", "longitude")}
          />
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
          Add Property
        </button>
      </div>
    </form>
  );
};

export default FormLocationInfo;
