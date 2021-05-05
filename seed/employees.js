const {
  getMaxListeners
} = require('../db')
const db = require('../db')
const Employee = require('../models/employee')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const employees = [{
      first_name: "Stephanie",
      last_name: "Pena",
      email: "steph@email.com",
      job_title: "Front-End Web Developer",
      address: {
        street: "101 Street",
        city: "Bronx",
        state: "NY",
        zip: 10031
      },
    },
    {
      first_name: "Rusty",
      last_name: "Pena",
      email: "rusty@email.com",
      job_title: "Marketing Strategist",
      address: {
        street: "101 Street",
        city: "Bronx",
        state: "NY",
        zip: 10031
      },
    },
    {
      first_name: "Harry",
      last_name: "Potter",
      email: "harry@email.com",
      job_title: "Wizard",
      address: {
        street: "201 Street",
        city: "London",
        state: "England",
        zip: 20101
      },
    },
    {
      first_name: "Jesus",
      last_name: "Lopez",
      email: "jesus@email.com",
      job_title: "Host",
      address: {
        street: "100 Street",
        city: "Miami",
        state: "Florida",
        zip: 00505
      },
    },
    {
      first_name: "Juan",
      last_name: "Godoy",
      email: "juan@email.com",
      job_title: "Investment Banker",
      address: {
        street: "101 Street",
        city: "Miami",
        state: "Florida",
        zip: 00505
      },
    },
  ]

  await Employee.insertMany(employees);
  console.log("Created employees information")
}

const run = async () => {
  await main()
  db.close()
}
run()