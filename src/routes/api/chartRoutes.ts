import express from "express";
import chartControllers from "../../controllers/chartControllers";

const router = express.Router();

//@route    GET/api/chart/all
//@desc     Get all chart types
//@access   Public
router.get("/all", async (req, res) =>
  chartControllers.getChartTypes(req, res)
);

export default router;
