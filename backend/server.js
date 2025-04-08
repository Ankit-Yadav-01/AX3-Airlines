require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const {
  signup,
  add_flight,
  get_Flights,
  get_user_profile,
  book_flight,
  get_Updated_Flight,
  get_comment_update,
  Update_Rating,
  list_all_flight,
  delete_flight,
  cancle_flight
} = require('./Controller/authController');

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/signup', signup);
app.post('/add_flight', add_flight);
app.post('/get_Flights', get_Flights);
app.post('/get_user_profile', get_user_profile);
app.post('/book_flight', book_flight);
app.post('/get_Updated_Flight', get_Updated_Flight);
app.post('/get_comment_update', get_comment_update);
app.post('/Update_Rating', Update_Rating);
app.post('/list_all_flight', list_all_flight);
app.post('/delete_flight', delete_flight);
app.post('/cancle_flight', cancle_flight);

// Additional routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
