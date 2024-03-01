const express = require('express');
const app = require('../server');
const { allExpenses, saveToDb, getExpenseById, balance, updateExpense, deleteExpense } = require('./db');
const budgetRouter = express.Router()


budgetRouter.get('/', (req, res, next) => {
   const data = allExpenses()
   if(data.length !== 0){
    res.status(200).send({data: data, balance: balance})
   }else{
    res.status(404).send()
   }
})



budgetRouter.post('/', (req, res, next) => {
    const newData = saveToDb(req.body)
    res.status(201).send(newData)
})



budgetRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = getExpenseById(Number(id))
    if(data){
        res.send(data)
    }else{
        res.status(404).send()
    }
})

budgetRouter.put('/:id', (req, res, next) => {
    const findId = req.params.id;
    const data = updateExpense(Number(findId), req.body)
    if(data){
        res.send(data);
    }else{
        res.status(404).send()
    }
})


budgetRouter.delete('/:id', (req, res, next) => {
    const findId = req.params.id;
    const deletedData = deleteExpense(Number(findId))
    if(deletedData){
        res.status(200).send()
    }else{
        res.status(500).send()
    }
})

module.exports = budgetRouter