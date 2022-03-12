import { connect } from "mongoose";

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost/mevn-database')
        console.log('Connected to MongoDB successfully!');
    } catch(error) {
        console.log('There was an error trying to connect to mongodb' + error)
    }
    
}