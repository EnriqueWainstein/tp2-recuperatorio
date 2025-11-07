import express from "express";
import { getAllListings, getListingId,getListingsType,getListingsHost,getListbyTotalPrice} from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();
router.get("/",authMiddleware, getAllListings);
router.get("/:id", authMiddleware, getListingId);
router.get("/type/:type",authMiddleware, getListingsType);
router.get("host/:hostId",authMiddleware, getListingsHost);
router.get("/", authMiddleware,getListbyTotalPrice);
export default router;
