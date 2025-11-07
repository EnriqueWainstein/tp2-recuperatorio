import { findAllListings, findListingById,findListingsByType, findListingsByHost, findListingTotalPrice } from "../data/listingsData.js";

export const getListings = async (page, pageSize) => {
    return await findAllListings(page, pageSize);
}

export const getListingById = async (id) => {
    return await findListingById(id);
}

export const getListingsByType = async (type) => {
    return await findListingsByType(type);
}

export const getListingsByHost = async (hostId) => {
    return await findListingsByHost(hostId);
}

export const getListingTotalPrice = async () => {
    return await findListingTotalPrice();
}