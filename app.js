// 14. Resume Project
import express from 'express';
const app = express();
const port  = process.env.PORT || 3000;
import web from './routes/web.js'

// Set Template Engine
app.set('view engine', 'ejs')

// Middleware is used to serve static file
// express.static = middleware
// all the files inside public are ready to be served
app.use(express.static('public'))

// Load Routes
app.use('/', web)

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);;
})