const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes=require('./routes/authRoutes')

dotenv.config();
connectDB();

const app = express();

// Configure CORS
app.use(cors({
  origin: 'https://amanverma036' // Allow requests from this origin
}));

app.use(express.json());
app.use('/registeruser',authRoutes)
app.use('/check',authRoutes)
// app.use('/api/locations/',);
app.use('/api/locations', require('./routes/locationRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

