import React from "react";

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src='https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg' alt='A Table full of delicious food'/>
      </div>
    </React.Fragment>
  );
}
