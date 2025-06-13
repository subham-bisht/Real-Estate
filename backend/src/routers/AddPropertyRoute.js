const express = require("express");
const router = express.Router();
const addPropertyModel = require("../model/addPropertySchema");
const JWTauth = require("../middleware/JWTauth");

const generate_ppdId = async () => {
  const prifix = "PPD";
  const suffix = Math.floor(Math.random() * 9000 + 1000);
  const new_ppdId = `${prifix}${suffix}`;
  const check_ppdId = await addPropertyModel.findOne({ ppdId: new_ppdId });

  if (check_ppdId) {
    return generate_ppdId();
  } else {
    return new_ppdId;
  }
};

router.post("/add", JWTauth, async (req, res) => {
  try {
    const ppdId = await generate_ppdId();
    const data = await addPropertyModel.create({
      ppdId,
      soldStatus: false,
      daysleft: Math.floor(Math.random() * 90 + 10),
      views: Math.floor(Math.random() * 90 + 10),
      ...req.body,
    });
    console.log(data);

    res.status(201).json({
      status: true,
      message: "Property Added Successfully",
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      error: e.message,
    });
  }
});

router.get("/list/:userId", JWTauth, async (req, res) => {
  try {
    const data = await addPropertyModel.find({ userId: req.params.userId });

    if (!data) {
      return res.status(403).json({
        status: false,
        message: "PPD ID not found",
      });
    }
    console.log(data);

    res.status(201).json({
      status: true,
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      error: e.message,
    });
  }
});

router.get("/search/:id", JWTauth, async (req, res) => {
  try {
    const data = await addPropertyModel.find({
      ppdId: req.params.id,
    });

    if (!data) {
      return res.status(403).json({
        status: false,
        message: "PPD ID not found",
      });
    }
    console.log(data[0]._id);

    res.status(201).json({
      status: true,
      data,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      error: e.message,
    });
  }
});

router.put("/edit/:id", JWTauth, async (req, res) => {
  try {
    const updatedData = await addPropertyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({
        status: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Property updated successfully",
      data: updatedData,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      error: e.message,
    });
  }
});

module.exports = router;
