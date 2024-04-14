import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        
        await mongoose.connect(uri, {
        });

        console.log("BD CONECTADA");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
    }
};
