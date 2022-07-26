const express = require('express');
const connectDB = require('./config/db');
const app = express();
const User = require('./models/User');

const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');



// app.use(cors());
app.use(bodyParser.json() ); 
app.use(bodyParser.urlencoded({extended:true}));



//Connect Databse
connectDB();

//Init middleware
app.use(express.json({extended:false}))


const PORT = process.env.port || 5000;

app.get('/',(req,res) => {
    res.send('API Running');
});





app.post('/loginGoogle', async (req, res) => {	
	try {
        
        const [sql] = await User.find({email:req.body.email, password:req.body.googleId})

		// const [sql] = await db_connection.execute("SELECT * FROM users WHERE email = ? AND password = ?",[req.body.email, req.body.googleId]);
		if (sql.length > 0) {
			return res.status(200).json({success: true, usersid:sql[0].users_id});
		}else { 



            user = new User({
                email:req.body.email,
                password:req.body.googleId
            });
            //Encrypt password

            await user.save();
            const [rows] = user


            if (rows.affectedRows === 1) {
				return res.json({ success: true, usersid:rows.insertId}) 
			}	
		}
	} catch (err) {console.log(err)}
});





// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/list', require('./routes/api/list'));




app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));