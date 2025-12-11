import express from 'express'
import cors from 'cors'
const PORT=3998;
const app = express();
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello');
})
app.post('/api/data',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
app.listen(PORT,()=>{
    console.log(`is Listening at ${PORT}`)
})