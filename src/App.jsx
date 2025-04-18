import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";


function App() {
  const inputs = {
    initial_investment: 0,
    annual_investment: 0,
    expected_return: 0,
    duration: 0
  }
  
  let results = []

  function handleInputChange(inputs) {
    results = calculateInvestmentResults(inputs)
  }

  return (
    <>
      <UserInput 
        onInputChange={ handleInputChange }
        inputs={ inputs }
      />
      <Result />
    </>
  );
}

export default App
