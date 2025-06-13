const FormPropertyDetails = ({
  formData,
  handleOnChange,
  stepBack,
  formSubmit,
}) => {
  return (
    <form onSubmit={formSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Length</label>
          <input
            type="number"
            className="form-control"
            placeholder="Example: 1000"
            value={formData.propertyDetails?.length || ""}
            onChange={handleOnChange("propertyDetails", "length")}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Breadth</label>
          <input
            type="number"
            className="form-control"
            placeholder="Example: 1000"
            value={formData.propertyDetails?.breadth || ""}
            onChange={handleOnChange("propertyDetails", "breadth")}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Total Area</label>
          <input
            type="number"
            className="form-control"
            placeholder="Example: 7500"
            value={formData.propertyDetails?.totalArea || ""}
            onChange={handleOnChange("propertyDetails", "totalArea")}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Area Unit</label>
          <select
            name="areaUnit"
            className="form-select"
            value={formData.propertyDetails?.areaUnit || ""}
            onChange={handleOnChange("propertyDetails", "areaUnit")}
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
            value={formData.propertyDetails?.noOfBhk || ""}
            onChange={handleOnChange("propertyDetails", "noOfBhk")}
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
            value={formData.propertyDetails?.noOfFloor || ""}
            onChange={handleOnChange("propertyDetails", "noOfFloor")}
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
            value={formData.propertyDetails?.attached || ""}
            onChange={handleOnChange("propertyDetails", "attached")}
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
            value={formData.propertyDetails?.westernToilet || ""}
            onChange={handleOnChange("propertyDetails", "westernToilet")}
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
            value={formData.propertyDetails?.furnished || ""}
            onChange={handleOnChange("propertyDetails", "furnished")}
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
            value={formData.propertyDetails?.carParking || ""}
            onChange={handleOnChange("propertyDetails", "carParking")}
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
            value={formData.propertyDetails?.lift || ""}
            onChange={handleOnChange("propertyDetails", "lift")}
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
            value={formData.propertyDetails?.electricity || ""}
            onChange={handleOnChange("propertyDetails", "electricity")}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Facing</label>
          <select
            name="facing"
            className="form-select"
            value={formData.propertyDetails?.facing || ""}
            onChange={handleOnChange("propertyDetails", "facing")}
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

export default FormPropertyDetails;
