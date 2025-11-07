import { getDb } from "./connection.js";

export async function findAllListings(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const listings = await db.collection("listingsAndReviews")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return listings;
    } else {
        // Sin paginación: trae todos los documentos
        const listings = await db.collection("listingsAndReviews").find().toArray();
        return listings;
    }
}

export async function findListingById(id) {
    const db = getDb();
    const listing = await db.collection("listingsAndReviews").findOne({ _id: id });
    console.log(listing);
    return listing;
}

export async function findListingsByType(type) {
    const db = getDb();
    const pageSize=20;
    const skip = (1 - 1) * pageSize;
    const listings = await db.collection("listingsAndReviews").find({ property_type: type })
     .find()
    .skip(skip)
    .limit(pageSize)
    .toArray();
    return listings;
}

export async function findListingsByHost(hostId) {

     const db = getDb();
    const pageSize=20;
    const skip = (1 - 1) * pageSize;
    const listings = await db.collection("listingsAndReviews").find({ host_id: hostId })
     .find()
    .skip(skip)
    .limit(pageSize)
    .toArray();
    return listings;
}

export async function findListingTotalPrice(){
   const db = getDb();
   
    const listing = await db.collection("listingsAndReviews").agreggate([
       
       $addFields={
         $precioTotal:{
                $add:[
                    {$ifnull: [$cleaning_fee,0]},
                    {$ifnull: [$security_deposit,0]},
                    {$ifnull: [$extra_people,0]},
                    {price}
                ]
         }
       }
    ]).find().toArray()

     return listing

}
