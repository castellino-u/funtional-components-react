import './App.css'
import { LatestTreansactionsScreen } from './components/screens/LatestTransactionsScreens/LatestTreansactionsScreen';
import { PaymentsModal } from './components/ui/PaymentsModal/PaymentsModal'
import useModalStore from './store/modalStore';


function App() {

  const {isVisible} = useModalStore();

  return (
    <div>
      <LatestTreansactionsScreen/>
      {/* si esta visible el modal, entonces lo mostramos, sino no lo muestramos */}
      {isVisible&& <PaymentsModal/>}
    </div>
  )
}

export default App
