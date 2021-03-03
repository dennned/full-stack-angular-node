import mysql from 'mysql';

let connection;

export const db = {
    connect: () => {
        connection = mysql.createConnection({
            host: 'db',
            user: 'root',
            password: 'root',
            database: 'buy-and-sell',
            //socketPath: process.env.DB_SOCKET,
        });
        connection.connect();
    },
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}