import { CreditCard } from '../../ui2/CreditCard/CreditCard';
import { Header } from '../../ui2/Header/Header';
import { LatestTransactions } from '../../ui2/LatestTransactions/LatestTransactions';
import style from './LatestTreansactionsScreen.module.css'

export const LatestTreansactionsScreen = () => {
    return (
        <div>
            <Header/>
            <CreditCard/>
            <LatestTransactions/>
        </div>
    );
};