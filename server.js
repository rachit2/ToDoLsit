const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Databse
connectDB();

//Init middleware
app.use(express.json({extended:false}))


const PORT = process.env.port || 5000;

app.get('/',(req,res) => {
    res.send('API Running');
});


// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/list', require('./routes/api/list'));




app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));