import useModalStore from '../../../store/modalStore';
import usePaymentStore from '../../../store/paymentStore';
import style from './PaymentsModal.module.css'
export const PaymentsModal = () => {
    //traemos el estado de ActivePayment
    const {unsetActivePayment, activePayment} = usePaymentStore()

    //traemos la Store
    const {setNotVisible} = useModalStore();
    return (
    <div className={style.modal}>
        <button className={style.modalButton} onClick={()=> {
            setNotVisible()
            unsetActivePayment() //esto es para que lo haga nulo cuando cerremos el modal
            }}>✖️</button>
        <div className={style.modalPaymentText}>
            <h2>{activePayment?.merchant}</h2>
            <p>Date: {activePayment?.date}</p>
            <p>Installment: {activePayment?.installment}</p>
            <p>Status: {activePayment?.status}</p>
        </div>

    </div>
    );
};