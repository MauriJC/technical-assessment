const axios = require("axios");

exports.getAvailableCountries = async (req, res) => {
    try {
        const availableCountries = await axios.get(process.env.AVAILABLE_COUNTRIES_API_URL);
        return res.status(200).json(availableCountries.data);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

exports.getCountryInfo = async (req, res) => {
    try {
        const { countryName, countryCode } = req.params;
        const borders = await axios.get(`${process.env.BORDER_COUNTRIES_API_URL}/${countryCode}`);
        const population = await axios.post(`${process.env.COUNTRY_POPULATION_API_URL}`, {
            country: countryName
        });
        const flag = await axios.post(process.env.COUNTRY_FLAG_API_URL, {
            country: countryName
        });

        return res.status(200).json({
            borders: borders.data.borders,
            population: population.data.data.populationCounts,
            flag: flag.data.data.flag
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}