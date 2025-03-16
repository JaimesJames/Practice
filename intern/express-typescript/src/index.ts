import express, { NextFunction, Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/api/users')
app.listen(PORT, ()=>{
    console.log(`Running on Port:${PORT}`)
})