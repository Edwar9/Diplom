import style from  "./style.module.css"

const Cart = () => {
    return (
        <div className={style.cart}>
            <button className={style.basket}>Корзина</button>
            <span className={style.count}>10</span>
        </div>
    )
}

export default Cart