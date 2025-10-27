import { useContext } from 'react';
import { CartContext } from './../../contexts/CartContext'
import './CartBlock.css'

function CartBlock(props){
    const {removeItem} = useContext(CartContext)

    function clickHandle(){
        removeItem(props.id)
    }
    return(
        <div className="cartBlock">
            <img src="./кабуто.jpg" className="clothes_block_img"></img>
            <span>{props.name}</span>
            <span>{props.price} ₽</span>
            <button onClick={clickHandle}>Удалить</button>
        </div>
    )
}

export default CartBlock