import express from 'express';
import cors from 'cors';
//Conexion a DB
import db from './database/db.js';
//Routes
import routesBlog from './routes/routes.blog.js';

const app = express();

//Conexion a DB
try {
    await db.authenticate();
    console.log("DB is connected.")
} catch (error) {
    console.log("Error DB: " + error)
}

//Config
app.set("port", process.env.PORT || 8000)   //8000

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/blogs', routesBlog);


app.listen(app.get('port'), (req, res) => {
    console.log("Server on port " + app.get("port"));
})