import { getListings, getListingById ,getListingsByType,getListingsByHost, getListingTotalPrice } from "../services/listingsService.js";

export const getAllListings = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const listings = await getListings(page, pageSize);
        res.json(listings);
    } catch (error) {
        console.log("Error fetching listings: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const listing = await getListingById(id);
        res.json(listing);
    } catch (error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingsType = async  (req, res) =>{
    try{
        const type = req.params.type;
        const listing = await getListingsByType(type);
        res.json(listing);
    }catch (error) {
        console.log("Error fetching listing: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getListingsHost = async (req,res) =>{
   try {
            const host_id = req.params.type;
            const listing = await getListingsByHost(host_id);
            res.json(listing);
   }catch (error){
    console.log("Error fetching listing", error);
    res.status(500).json({message: "error interno"})
   }

};

export const getListbyTotalPrice = async (req,res) =>{
    try {
        const listing = await getListingTotalPrice();
        res.json(listing);
    }catch (error){
    console.log("Error fetching listing", error);
    res.status(500).json({message: "error interno"})
   }
};