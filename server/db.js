
let db = [
    {id: 0, title: "car", spend: 100}
]
let number = 1;
let balance = 2000

const saveToDb = (instance) =>{
    instance.id = number++;
    let spending = instance.budget
    balance = balance - Number(spending)
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
    getExpenseById,
    balance
}