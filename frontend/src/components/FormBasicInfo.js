import { Link } from "react-router-dom";
const FormBasicInfo = ({ formSubmit, formData, handleOnChange, stepNext }) => {
  return (
    <form onSubmit={formSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Property Type</label>
          <select
            name="propertyType"
            className="form-select"
            value={formData.basicInfo?.propertyType || ""}
            onChange={handleOnChange("basicInfo", "propertyType")}
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
            value={formData.basicInfo?.negotable || ""}
            onChange={handleOnChange("basicInfo", "negotable")}
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
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            className="form-control"
            required
            placeholder="Example: 10000"
            value={formData.basicInfo?.price || ""}
            onChange={handleOnChange("basicInfo", "price")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Ownership</label>
          <select
            name="ownership"
            className="form-select"
            value={formData.basicInfo?.ownership || ""}
            onChange={handleOnChange("basicInfo", "ownership")}
            required
          >
            <option value="" disabled hidden>
              Select Ownership
            </option>
            <option value="freehold">Freehold</option>
            <option value="leasehold">Unsold</option>
            <option value="coOperativeSociety">Co-operative Society</option>
            <option value="power-of-attorney">Power of Attorney</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Property Age</label>
          <select
            name="propertyAge"
            className="form-select"
            value={formData.basicInfo?.propertyAge || ""}
            onChange={handleOnChange("basicInfo", "propertyAge")}
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
            value={formData.basicInfo?.propertyApproved || ""}
            onChange={handleOnChange("basicInfo", "propertyApproved")}
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
            value={formData.basicInfo?.propertyDescription || ""}
            onChange={handleOnChange("basicInfo", "propertyDescription")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Bank Loan</label>
          <select
            name="bankLoan"
            className="form-select"
            value={formData.basicInfo?.bankLoan || ""}
            onChange={handleOnChange("basicInfo", "bankLoan")}
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

      <div className="Buttons d-flex justify-content-center gap-3 mt-3">
        <Link to="/properties" className="btn btn-primary btn-prev btn-cancel">
          Cancel
        </Link>
        <button type="submit" className="btn btn-success btn-submit">
          Submit & Continue
        </button>
      </div>
    </form>
  );
};

export default FormBasicInfo;
