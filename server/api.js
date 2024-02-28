const express = require('express');
const app = require('../server');
const { allExpenses, saveToDb, getExpenseById } = require('./db');
const budgetRouter = express.Router()


budgetRouter.get('/', (req, res, next) => {
   const data = allExpenses()
   if(data.length !== 0){
    res.status(200).send(data)
   }else{
    res.status(404).json(data)
   }
})

budgetRouter.post('/', (req, res, next) => {
    const newData = saveToDb(req.body)
    res.status(201).send(newData)
})

budgetRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = getExpenseById(id)
    if(data){
        res.send(data)
    }else{
        res.status(404).send()
    }
})

module.exports = budgetRouter