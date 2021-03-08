import { fakeListings } from './fake-data';
import Boom from '@hapi/boom';

export const updateListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const listing =  fakeListings.find(listing => listing.id === id);
        if (!listing) {
            throw Boom.notFound(`Listing does not existe with id ${id}`);
        }

        return listing;
    }
}