import { useState } from "react";

import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

let inputs = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {
  const [ results, setResults ] = useState([])
  

  function handleInputChange(key, value) {
    inputs = {...inputs, [key]: value}
    setResults(_ => {
      return [
        ...calculateInvestmentResults(inputs)
      ]
    })
  }

  return (
    <>
      <UserInput 
        onInputChange={ handleInputChange }
      />
      <Result results={ results }/>
    </>
  );
}

export default App
