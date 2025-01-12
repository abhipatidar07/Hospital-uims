const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/database");
const authRoutes = require("./routes/authRoutes")
// const profileDetails = require("./routes/profileRoute")
const cookieParser= require("cookie-parser")
const cors = require("cors")
const deliveryRoutes = require("./routes/deliveryRoutes")
const patientRoutes = require("./routes/patientRoutes")
// const billRoute = require("./routes/billRoute")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001
db.connect();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)


// app.use("/api/v1/auth",authRoute);
// app.use("/api/v1/profile",profileDetails);
// app.use("/api/v1/bills",billRoute);
app.use('/api/auth', authRoutes);
app.use('/api', deliveryRoutes);
app.use("/api/patients", patientRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is Listening on ${PORT}`);
}) 

