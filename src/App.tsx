import { Header } from "./components/ui/Header/Header"
import './App.css'
import { CreditCard } from "./components/ui/Header/CreditCard/CreditCard"
import { LatestTransactions } from "./components/ui/Header/LatestTransactions/LatestTransactions"


function App() {


  return (
    <div>
      <Header/>
      <CreditCard/>
      <LatestTransactions/>
    </div>
  )
}

export default App
