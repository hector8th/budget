// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: '',
      paycheckAmount: '',
      payFrequency: '',
      budgetType: 'save',
      advice: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { paycheckAmount, payFrequency, accountBalance, budgetType } = this.state;
    const totalIncome = parseFloat(paycheckAmount) * parseInt(payFrequency);
    let newAdvice = '';
    // *********************** START WITH THE BUDGET TYPES ******************************
    if (budgetType === 'save') {
      if (totalIncome >= parseFloat(accountBalance)) {
        newAdvice = 'You can save all of your income!';
      } else {
        newAdvice = 'You can save a portion of your income.';
      }
    } else if (budgetType === 'spend') {
      if (parseFloat(accountBalance) >= totalIncome) {
        newAdvice = 'You have enough to cover your expenses.';
      } else {
        newAdvice = 'You might need to adjust your spending.';
      }
    }

    this.setState({ advice: newAdvice });
  };

  render() {
    const { accountBalance, paycheckAmount, payFrequency, budgetType, advice } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1>Budget Calculator</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Account Balance: $</label>
            <input type="text" value={accountBalance} onChange={(e) => this.setState({ accountBalance: e.target.value })} required />
            <label>Paycheck Amount: $</label>
            <input type="text" value={paycheckAmount} onChange={(e) => this.setState({ paycheckAmount: e.target.value })} required />
            <label>Times Paid Before Due Date:</label>
            <input type="text" value={payFrequency} onChange={(e) => this.setState({ payFrequency: e.target.value })} required />
            <label>Budget Type:</label>
            <select value={budgetType} onChange={(e) => this.setState({ budgetType: e.target.value })} required>
              <option value="save">Save</option>
              <option value="spend">Spend</option>
            </select>
            <button type="submit">Calculate</button>
          </form>
          <div className="result">{advice}</div>
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