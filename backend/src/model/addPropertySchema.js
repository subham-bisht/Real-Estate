// const { number, boolean } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addpropertySchema = new Schema({
  userId: { type: String, required: true },
  ppdId: { type: String, required: true },
  soldStatus: { type: Boolean, required: true },
  daysleft: { type: String, required: true },
  views: { type: String, required: true },
  basicInfo: {
    propertyType: { type: String, required: true },
    negotable: { type: String, required: true },
    price: { type: Number, required: true },
    ownership: { type: String, required: true },
    propertyAge: { type: String, required: true },
    propertyApproved: { type: String, required: true },
    propertyDescription: { type: String, required: true },
    bankLoan: { type: String, required: true },
  },

  propertyDetails: {
    length: { type: Number, required: true },
    breadth: { type: Number, required: true },
    totalArea: { type: Number, required: true },
    areaUnit: { type: String, required: true },
    noOfBhk: { type: String, required: true },
    noOfFloor: { type: String, required: true },
    attached: { type: String, required: true },
    westernToilet: { type: String, required: true },
    furnished: { type: String, required: true },
    carParking: { type: String, required: true },
    lift: { type: String, required: true },
    electricity: { type: String, required: true },
    facing: { type: String, required: true },
  },

  generalInfo: {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    postedBy: { type: String, required: true },
    saleType: { type: String, required: true },
    featuredPackage: { type: String, required: true },
    ppdPackage: { type: String, required: true },
  },

  locationInfo: {
    email: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    pincode: { type: Number, required: true },
    address: { type: String, required: true },
    landmark: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const addPropertyModel = mongoose.model("property", addpropertySchema);

module.exports = addPropertyModel;
