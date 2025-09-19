import mongoose from "mongoose";

const connect = async() => {
    try {mongoose.connect(process.env.MONGODB_URL!);
        
    } catch (error) {throw new Error("Could not connect to database" + error);
        
        
    }
}

export default connect;