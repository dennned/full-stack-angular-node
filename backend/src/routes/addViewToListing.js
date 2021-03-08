import { db } from '../database';
import { fakeListings } from './fake-data';

export const addViewToListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id;
        const listing =  fakeListings.find(listing => listing.id === id);
        if (!listing) {
            throw Boom.notFound(`Listing does not existe with id ${id}`);
        }

        return listing;
    }
}