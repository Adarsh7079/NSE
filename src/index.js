// Import necessary modules
import axios from 'axios';
import { MongoClient } from 'mongodb';

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await axios.get('https://www.nseindia.com/api/corporates-financial-results?index=equities&from_date=11-04-2023&to_date=11-04-2024&symbol=TATAMOTORS&period=Quarterly');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to connect to MongoDB and store data
async function storeData(data) {
    const uri = 'mongodb://localhost:27017'; // MongoDB URI
    const dbName = 'financialData'; // Database name
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('tatamotors_data');
        const result = await collection.insertOne(data);
        console.log(`${result.insertedCount} documents inserted into the database.`);
    } catch (error) {
        console.error('Error storing data:', error);
    } finally {
        await client.close();
    }
}

// Main function to fetch and store data
async function main() {
    const data = await fetchData();
    if (data) {
        await storeData(data);
    }
}

// Call the main function
main();
