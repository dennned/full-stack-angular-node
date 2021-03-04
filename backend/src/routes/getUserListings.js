import { db } from '../database';
import { fakeListings } from './fake-data';
import Boom from '@hapi/boom';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const userId = req.params.userId;


        const listing =  fakeListings.find(listing => listing.userId === userId);
        if (!listing) {
            throw Boom.notFound(`Listing does not existe with user_id ${userId}`);
        }

        return listing;
    }
}