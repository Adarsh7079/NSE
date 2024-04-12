import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {Data} from "../schema/user.schema.js"
import axios from "axios";

export const getdata = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get('https://www.nseindia.com/api/corporates-financial-results', {
        params: {
            index: 'equities',
            from_date: '11-04-2023',
            to_date: '11-04-2024',
            symbol: 'TATAMOTORS',
            period: 'Quarterly'
        }
    });

    // Parse response data and extract relevant information
    const financialResults = response.data; // Assuming the data structure matches what you expect

    // Save data to MongoDB
    await saveDataToMongoDB(financialResults);
} catch (error) {
    console.error('Error fetching data:', error);
}
});

export const putdata=asyncHandler(async(req,res)=>{
  try {
    // Loop through the data and save each entry to MongoDB
    for (const result of data) {
        const financialData = new Data({
            symbol: result.symbol,
            date: new Date(result.date), // Assuming 'date' is a date string
            financials: result.financials // Assuming 'financials' contains the financial data
        });
        await Data.save();
    }
    console.log('Data saved to MongoDB');
} catch (error) {
    console.error('Error saving data to MongoDB:', error);
}
})
