const express =require('express')
const cors =require('cors');5
const dotenv =require('dotenv').config()
const port =process.env.PORT || 3001
const app =express()

app.use(express.json());
app.use(cors());


app.use('/openai',require('./routes/openaiRoutes'));

app.listen(port,()=>{
    console.log(`Listening to port :${port}`)
})