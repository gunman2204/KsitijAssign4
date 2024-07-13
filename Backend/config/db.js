



const mongoose = require('mongoose');
const uri = "mongodb+srv://vermaaman714600:Aman%40600@cluster0.9o1c3rp.mongodb.net/employees/?appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    // await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoose.disconnect();
  }
}
connectDB().catch(console.dir);
module.exports = connectDB;

