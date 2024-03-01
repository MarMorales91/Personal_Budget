
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


const updateExpense = (id, newData) => {
    const index = db.findIndex(obj => obj.id === id)
    if(index !== -1){
       newData.id = id
       db[index] = newData;
       return newData
    }
    return false
}

const deleteExpense = (id) => {
    const index = db.findIndex(obj => obj.id === id);
    if(index !== -1){
        db.splice(index, 1);
        return true;
    }else{
        return false;
    }
}

module.exports = {
    updateExpense,
    allExpenses,
    saveToDb, 
    getExpenseById,
    balance,
    deleteExpense
}