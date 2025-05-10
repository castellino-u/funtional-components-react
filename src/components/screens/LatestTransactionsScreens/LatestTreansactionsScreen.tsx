import { CreditCard } from '../../ui/CreditCard/CreditCard';
import { Header } from '../../ui/Header/Header';
import { LatestTransactions } from '../../ui/LatestTransactions/LatestTransactions';
// import style from './LatestTreansactionsScreen.module.css'

export const LatestTreansactionsScreen = () => {
    return (
        <div>
            <Header/>
            <CreditCard/>
            <LatestTransactions/>
            
        </div>
    );
};