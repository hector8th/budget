import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: '',
      paycheckAmount: '',
      payFrequency: '',
      bills: '',
      budgetType: '1',
      advice: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { paycheckAmount, payFrequency, accountBalance, bills, budgetType } = this.state;
    const totalIncome = parseFloat(paycheckAmount) * parseInt(payFrequency);
    const newBalance = parseFloat(accountBalance) + totalIncome;
    const moneySaved = newBalance * (parseInt(budgetType) / 10);
    const payDiff = (newBalance - moneySaved).toFixed(2);
    let newAdvice = '';

    if (budgetType === '3') {
      if ((payFrequency >= 1) && (moneySaved > bills)) {
        newAdvice = `Light Budget(30%)!\nYour Balance before your Bills/Expenses is $${newBalance}, so you can spend up to $${payDiff}!`;
      } else if ((payFrequency >= 1) && (moneySaved <= bills)) {
        newAdvice = `SLOW DOWN!!!\nYou need to save your money!!!\nYour Balance($${newBalance}) will not survive on this budget!!!\nYou will only manage to save $${moneySaved.toFixed(2)}!!!`;
      } else {
        newAdvice = `Please enter a correct number for Times Paid.`;
      }
    } else if (budgetType === '5') {
      if ((payFrequency >= 1) && (moneySaved > bills)) {
        newAdvice = `Normal Budget(50%)!\nYour Balance before your Bills/Expenses is $${newBalance}, so you can spend up to $${payDiff}!`;
      } else if ((payFrequency >= 1) && (moneySaved <= bills)) {
        newAdvice = `SLOW DOWN!!!\nYou need to save your money!!!\nYour Balance($${newBalance}) will not survive on this budget!!!\nYou will only manage to save $${moneySaved.toFixed(2)}!!!`;
      } else {
        newAdvice = `Please enter a correct number for Times Paid.`;
      }
    } else if (budgetType === '7') {
      if ((payFrequency >= 1) && (moneySaved > bills)) {
        newAdvice = `Strict Budget(70%)!\nYour Balance before your Bills/Expenses is $${newBalance}, so you can spend up to $${payDiff}!`;
      } else if ((payFrequency >= 1) && (moneySaved <= bills)) {
        newAdvice = `SLOW DOWN!!!\nYou need to save your money!!!\nYour Balance($${newBalance}) will not survive on this budget!!!\nYou will only manage to save $${moneySaved.toFixed(2)}!!!`;
      } else {
        newAdvice = `Please enter a correct number for Times Paid.`;
      }
    } else {
      newAdvice = 'Please, choose a proper Budget type and make sure you entered correct values.';
    }
    this.setState({ advice: newAdvice });
  };

  render() {
    const { accountBalance, paycheckAmount, payFrequency, bills, budgetType, advice } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1>Intuitive Budget Calculator</h1>
          <h3>This tool will allow you to quickly budget your income.</h3>
          <h5>Choose between a Light(30%), Normal(50%), or a Strict(70%) budget!</h5>
          <h5>(If you'd like to simply calculate a paycheck, please put zero(0) in both Account Balance and Bills and Expenses Amount.)</h5>
          <div className="result">{advice}</div>
          <form className="form" onSubmit={this.handleSubmit}>
            <label>Account Balance: $</label>
            <input type="text" placeholder='0' value={accountBalance} onChange={(e) => this.setState({ accountBalance: e.target.value })} required />
            <label>Paycheck Amount: $</label>
            <input type="text" placeholder='0' value={paycheckAmount} onChange={(e) => this.setState({ paycheckAmount: e.target.value })} required />
            <label>Times Paid Before Due Date:</label>
            <input type="text" placeholder='1' value={payFrequency} onChange={(e) => this.setState({ payFrequency: e.target.value })} required />
            <label>Bills and Expenses Amount:</label>
            <input type="text" placeholder='0' value={bills} onChange={(e) => this.setState({ bills: e.target.value })} required />
            <label>Budget Type:</label>
            <select value={budgetType} onChange={(e) => this.setState({ budgetType: e.target.value })} required>
              <option value="1">---</option>
              <option value="3">Light</option>
              <option value="5">Normal</option>
              <option value="7">Strict</option>
            </select>
            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;


// ********************************  FUNCTIONAL VERSION  **************************************************

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [accountBalance, setAccountBalance] = useState('');
//   const [paycheckAmount, setPaycheckAmount] = useState('');
//   const [payFrequency, setPayFrequency] = useState('');
//   const [budgetType, setBudgetType] = useState('save');
//   const [advice, setAdvice] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const totalIncome = parseFloat(paycheckAmount) * parseInt(payFrequency);
//     let newAdvice = '';

//     if (budgetType === 'save') {
//       if (totalIncome >= parseFloat(accountBalance)) {
//         newAdvice = 'You can save all of your income!';
//       } else {
//         newAdvice = 'You can save a portion of your income.';
//       }
//     } else if (budgetType === 'spend') {
//       if (parseFloat(accountBalance) >= totalIncome) {
//         newAdvice = 'You have enough to cover your expenses.';
//       } else {
//         newAdvice = 'You might need to adjust your spending.';
//       }
//     }

//     setAdvice(newAdvice);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h1>Budget Calculator</h1>
//         <form onSubmit={handleSubmit}>
//           <label>Account Balance:</label>
//           <input type="number" value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} required />
//           <label>Paycheck Amount:</label>
//           <input type="number" value={paycheckAmount} onChange={(e) => setPaycheckAmount(e.target.value)} required />
//           <label>Times Paid Before Due Date:</label>
//           <input type="number" value={payFrequency} onChange={(e) => setPayFrequency(e.target.value)} required />
//           <label>Budget Type:</label>
//           <select value={budgetType} onChange={(e) => setBudgetType(e.target.value)} required>
//             <option value="save">Save</option>
//             <option value="spend">Spend</option>
//           </select>
//           <button type="submit">Calculate</button>
//         </form>
//         <div className="result">{advice}</div>
//       </div>
//     </div>
//   );
// }

// export default App;


// ********************************  CLASS VERSION  **************************************************

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       accountBalance: '',
//       paycheckAmount: '',
//       payFrequency: '',
//       budgetType: 'save',
//       advice: ''
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { paycheckAmount, payFrequency, accountBalance, budgetType } = this.state;
//     const totalIncome = parseFloat(paycheckAmount) * parseInt(payFrequency);
//     let newAdvice = '';

//     if (budgetType === 'save') {
//       if (totalIncome >= parseFloat(accountBalance)) {
//         newAdvice = 'You can save all of your income!';
//       } else {
//         newAdvice = 'You can save a portion of your income.';
//       }
//     } else if (budgetType === 'spend') {
//       if (parseFloat(accountBalance) >= totalIncome) {
//         newAdvice = 'You have enough to cover your expenses.';
//       } else {
//         newAdvice = 'You might need to adjust your spending.';
//       }
//     }

//     this.setState({ advice: newAdvice });
//   };

//   render() {
//     const { accountBalance, paycheckAmount, payFrequency, budgetType, advice } = this.state;

//     return (
//       <div className="App">
//         <div className="container">
//           <h1>Budget Calculator</h1>
//           <form onSubmit={this.handleSubmit}>
//             <label>Account Balance:</label>
//             <input type="number" value={accountBalance} onChange={(e) => this.setState({ accountBalance: e.target.value })} required />
//             <label>Paycheck Amount:</label>
//             <input type="number" value={paycheckAmount} onChange={(e) => this.setState({ paycheckAmount: e.target.value })} required />
//             <label>Times Paid Before Due Date:</label>
//             <input type="number" value={payFrequency} onChange={(e) => this.setState({ payFrequency: e.target.value })} required />
//             <label>Budget Type:</label>
//             <select value={budgetType} onChange={(e) => this.setState({ budgetType: e.target.value })} required>
//               <option value="save">Save</option>
//               <option value="spend">Spend</option>
//             </select>
//             <button type="submit">Calculate</button>
//           </form>
//           <div className="result">{advice}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;