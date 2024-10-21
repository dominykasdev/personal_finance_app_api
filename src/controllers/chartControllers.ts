import chartServices from "../services/chartServices";

const getChartTypes = async (req, res) => {
  try {
    const results = await chartServices.getChartTypes();

    if (results == undefined) {
      throw `Could not retrieve chart type list`;
    } else {
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

export default { getChartTypes };
