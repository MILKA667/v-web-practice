import { useContext} from 'react';
import {CartContext} from './../../contexts/CartContext'
import CartBlock from '../../components/CartBlock/CartBlock'

function Cart(){
  const {items,clearCart} = useContext(CartContext)

  function clickHandle(){
    clearCart()
  }
  return(
    <div>
      {items.map((item, index) => (
        <CartBlock 
          key={index}
          name={item.name} 
          price={item.price}
          id={item.id}
        />
        ))}
        <button onClick={clickHandle}>Очистить корзину</button>
    </div>
  )
}

export default Cart