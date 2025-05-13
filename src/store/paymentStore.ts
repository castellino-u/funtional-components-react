import { create } from "zustand";
import { IPayment } from "../types/IPayment";

interface IPaymentStore {
    activePayment: IPayment | null,  //Acá traemos la interface de IPayments de types
    setActivePayment: (payment: IPayment) => void, //para setear el estado
    unsetActivePayment: () => void,     //para desetear el estado 

}

const usePaymentStore = create<IPaymentStore> ((set) => ({
    activePayment: null,
    setActivePayment: (payment) => set (() => ({activePayment: payment})),
    unsetActivePayment: () => set (() => ({activePayment: null}))

}))

export default usePaymentStore;