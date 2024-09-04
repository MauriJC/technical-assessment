const express = require("express");
const { getAvailableCountries, getCountryInfo } = require("../controllers/countriesController");

const router = express.Router();

router.get("/available", getAvailableCountries);
router.get("/:countryName/:countryCode", getCountryInfo);

module.exports = router;

