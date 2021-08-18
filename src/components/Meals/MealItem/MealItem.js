import React, {useContext} from 'react'
import classes from './Mealitem.module.css'
import MealitemForm from './MealitemForm'
import CartContext from '../../../Store/Cart-context'




export default function Mealitem(props) {
   const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
    cartCtx.addItem({
        id:props.id,
        name: props.name,
        amount: amount,
        price: props.price
    })
    }
    return (
        <>
          <li className={classes.meal}>
              <div>
              <h3>{props.name}</h3>
              <div className={classes.description}>{props.description}</div>
              <div className={classes.price}>{price}</div>
              </div>
              <div>
                  <MealitemForm id={props.id}  onAddToCart = {addToCartHandler}/>
              </div>
          </li>  
        </>
    )
}
