import express from 'express'
const PORT=3998;
const app = express();

app.get('/',(req,res)=>{
    res.send('hello');
})
app.listen(PORT,()=>{
    console.log(`is Listening at ${PORT}`)
})