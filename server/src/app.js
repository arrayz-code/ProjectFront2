import express from "express";
import morgan from "morgan";
import { createRoles } from "./libs/initialSetup.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Resend } from 'resend'; // Importa Resend desde la ruta correcta
import enviarCorreo from "./routes/sendEmail.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";
import upload from "./multerconfig.js";
import path from "path"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.post('/enviar-correo', enviarCorreo);
app.use(morgan("dev"));

app.use(cookieParser());

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));

// Middleware de Multer para procesar la carga de archivos en toda la aplicación
app.use(upload.single('image'));
app.use("/api", authRoutes);
app.use("/api/products", productRoutes);

export default app;
