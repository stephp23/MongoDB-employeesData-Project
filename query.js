const db = require("./db");
const Employee = require("./models/employee");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const findAllEmployee = async () => {
  const allEmployees = await Employee.find({});
  console.log('All Employees: ', allEmployees);
};

const createEmployee = async () => {
  const solomon = await Employee.insertMany({
    first_name: 'Solomon',
    last_name: 'Frenchie',
    email: 'sol@email.com',
    job_title: 'Athletic Director',
    address: {
      street: '101 Madison',
      city: 'New York',
      state: 'NY',
      zip: 10100,
    },
  });
  console.log('New Employee: ', solomon);
};
const updateEmployee = async () => {
  const updatedEmployeeJesus = await Employee.updateMany({
    first_name: 'Jesus'
  }, {
    $set: {
      job_title: 'MBA Student'
    }
  });
  console.log('Updated Job Title to: ', updatedEmployeeJesus);
};

const deleteEmployee = async () => {
  const deleteEmployeeSteph = await Employee.deleteMany({
    first_name: "Stephanie",
  });
  console.log("Deleted Employee: ", deleteEmployeeSteph);
};

const listAllEmployee = async () => {
  const allEmployeesFullNames = await Employee.find({ first_name } + { last_name });
  console.log('All Employees: ', allEmployeesFullNames);
};

const run = async () => {
  await findAllEmployee();
  await createEmployee();
  await updateEmployee();
  await deleteEmployee();
  await listAllEmployee();

  db.close();
};
run();