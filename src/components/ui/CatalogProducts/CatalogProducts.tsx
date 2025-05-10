import style from './CatalogProducts.module.css'


export const CatalogProducts = () => {
    const productArray = [
        {id: 1,
            name: "Botines Messi",
            productType: "calzado",
            price: "2500",
            urlImg: "https://www.bing.com/th/id/OIP.vsbuDz6DRJDWeRMuzq6KSAHaFS?w=195&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
        }
    ]

    return (
    <div>
        {/* Esto es mapeo de objetos en javascript */}
        {productArray.map((product) => (
            <div className={style.card} key={product.id}>
                <img src={product.urlImg} alt="" width={"50px"} />
                <p className={style.cardText}>{product.name}</p>
                <p className={style.cardText}>${product.price}</p>
            </div>
            ))
        }
    </div>
    );
};