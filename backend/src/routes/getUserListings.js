import Boom from '@hapi/boom';
import { fakeMyListings } from './fake-data';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        /*const userId = req.params.userId;
        const listing =  fakeMyListings.find(listing => listing.userId === userId);

        if (!listing) {
            throw Boom.notFound(`User's listing does not existe with user id ${userId}`);
        }*/

        return fakeMyListings;
    }
}