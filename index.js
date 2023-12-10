import express from "express";
import Connection from "./database/db.js";
import cors from 'cors';
import morgan from 'morgan'
import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by')
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const port = process.env.PORT||8000;

/** HTTP GET REQUEST */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

/** start server only when we have valid connection */
Connection();
// .then(() => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server connected to http://localhost:${port}`);
//         })
//     } catch (error) {
//         console.log('Cannot connect to the server')
//     }
// }).catch(error => {
//     console.log("Invalid database connection...!");
// })

/**API Routes */
app.use('/api', router)
/**Start server */
app.listen(port,()=>{
    console.log (`Your server is running on port http://localhost:${port}`);
} )