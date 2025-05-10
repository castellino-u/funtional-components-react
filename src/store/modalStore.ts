//Creación de un store e instanciarlo desde un principio

import {create} from 'zustand'  //importo create de zustand para crear el store 
//creamos la interface- Siempre hay que tipar la Store mediante una interface
interface IModalStore {
    isVisible: boolean,
    setIsVisible: () => void,
    setNotVisible: () => void
}


//declaramos el store
const useModalStore = create <IModalStore>((set) => ({
    isVisible: false,

     //Dos funciones que nos van a ayudar a acceder al estado desde cualquier parte
    setIsVisible: ()=> set (() => ({isVisible: true})),
    setNotVisible: ()=> set (() => ({isVisible: false}))

    //ya con esto estamos en condición de darle funcionalidad a un modal

    //esta forma de declararlo es para cuando ya estás más familiarizado, en un principio conviene ser más declarativo
    // //esto es para que modal desde la ap general, sepa cuando mostrase y cuando no 
    // isOpen: false,
    
    // //Dos funciones que nos van a ayudar a acceder al estado desde cualquier parte
    // onOpen: () => set({isOpen: true}),
    // onClose: () => set({isOpen: false}),


}))

//exportamos la Store
export default useModalStore;