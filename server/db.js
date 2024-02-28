
let db = []
let number = 0;

const saveToDb = (instance) =>{
    instance.id = number++;
    db.push(instance);
}

const allExpenses = () => {
    return db
}


const getExpenseById = (id) => {
    let filteredArray = db.filter(obj => obj.id === id)
    return filteredArray
}


module.exports = {
    allExpenses,
    saveToDb, 
    getExpenseById
}