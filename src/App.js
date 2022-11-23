// Imports
import logo from './logo.svg';
import './App.css';

import './Temp';
import Temp from './Temp';
import UserDisplay from './UserDisplay';
import Worker from './Worker';
import Expense from './Expense';


// Func

function TotalCalcEmployee() {
  let spending = 0;

  for (let i=0; i<employees.length; i++) {
    spending += (employees[i].hours * employees[i].pay);
  }

  return (spending * 4);
}
function TotalCalcExpenses() {
  let spending = 0;

  for (let i=0; i<expenses.length; i++) {
    spending += (expenses[i].cost);
  }

  return spending;
}

// Variables

const loggedUser = {
  profilePic: "https://image.khaleejtimes.com/?uuid=5328b42a-deb5-423d-9228-688a76d4042b&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0",
  userName: 'Sebastian Szuch',
 userTitle: 'Hiring Manager',
 storeTitle: 'Barnes and Noble #5624'
}

const employees = [
  {
    name: 'Jim',
    title: 'Sales Associate',
    pay: 10,
    hours: 20
  },

  {
    name: 'Joe',
    title: 'Sales Associate',
    pay: 23,
    hours: 40
  },

  {
    name: 'Ryan',
    title: 'Sales Associate',
    pay: 23,
    hours: 40
  }
]

let expenses = [
  {
    name: 'Electricity',
    cost: 500
  },

  {
    name: 'Electricity',
    cost: 500
  },
  
  {
    name: 'Electricity',
    cost: 500
  },
]


function App() {
  return (
    <div className="App">


    <div className='user-info'>
      <UserDisplay pic={loggedUser.profilePic} name={loggedUser.userName} title={loggedUser.userTitle} store={loggedUser.storeTitle}></UserDisplay>
    </div>

    <h3 className='section-title'>Employees:</h3>

    <div className='section-container'>
     <Worker name={employees[0].name} title={employees[0].title} payRate={employees[0].pay} hours={employees[0].hours}></Worker>
     <Worker name={employees[1].name} title={employees[1].title} payRate={employees[1].pay} hours={employees[1].hours}></Worker>
     <Worker name={employees[2].name} title={employees[2].title} payRate={employees[2].pay} hours={employees[2].hours}></Worker>
    </div>

    <div className='sect-footer'>
      <h3>Total employee wages for month: {TotalCalcEmployee()}</h3>
    </div>

    {/* Expenses */}

    <div className='section-title'>
      <h3>Estimated Expenses:</h3>
    </div>

    <div className='section-container'>
     <Expense></Expense>
     <Expense></Expense>
     <Expense></Expense>
    </div>

    <div className='sect-footer'>
      <h3>Total expenses for month: {TotalCalcExpenses()}</h3>
    </div>

    {/* Earnings */}

    <div className='section-title'>
      <h3>Estimated Earnings:</h3>
    </div>

   </div>
  );
}

export default App;
