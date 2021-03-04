import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const id = uuid();
        const { name = '', description = '', price = 0 } = req.payload;
        const userId = '1';
        const views = 0;

        return { id, name, description, price, user_id: userId, views };
    }
}