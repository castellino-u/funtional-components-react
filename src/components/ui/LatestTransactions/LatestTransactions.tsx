import useModalStore from '../../../store/modalStore';
import style from './LatestTransactions.module.css'

export const LatestTransactions = () => {
    const {setIsVisible} = useModalStore();
    // lógica antes del return
    const upcomingPayments = [
    {
        date: "JUN 7",
        merchant: "Nike",
        installment: "3 of 4",
        amount: 27.18,
        status: "Due in 1 day",
        },
    {
        date: "JUN 11",
        merchant: "Bed Bath & Beyond",
        installment: "4 of 4",
        amount: 46.14,
        status: "Autopay in 5 days",
    },
    {
        date: "JUN 15",
        merchant: "Target",
        installment: "3 of 4",
        amount: 23.78,
        status: "Autopay in 9 days",
    },
    ];


    return (
    <div className={style.mainContainer}>

        <div className={style.transactionsContainer}>
        <h3>Latest Transactions</h3>
            {/* //mapeo del array */}
            {
                upcomingPayments.map((payment)=>(
                    <div className={style.card} onClick={()=> setIsVisible()}>
                        <div className={style.date}>
                            <p>{payment.date}</p>
                        </div>
                        <div className={style.cardText} >
                            <p>{payment.merchant}</p>
                            <p>${payment.amount}</p>
                            <p>${payment.status}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
};