import style from './CreditCard.module.css'


export const CreditCard = () => {
    return (
    <div className={style.card}>

        <div className={style.cardTop}>
            <img src="./assets/naranja.svg" alt="" width={"50px"} />
        <p className={style.cardNumber}>1234 5678 0109 2321 </p>
        </div>

        <div className={style.cardBottom}>
            <p className={style.cardName}>Nombre: <br></br> Uriel Castellino </p>

            <p className={style.cardDate}> Valido: <br></br> 12/29 </p>
        </div>


    </div>
    );
};