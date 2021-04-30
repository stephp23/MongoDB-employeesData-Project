const db = require('../db')
const Publisher = require('../models/publisher')
db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const employees = [
    
}
const run = async () => {
  await main()
  db.close()
}
run()