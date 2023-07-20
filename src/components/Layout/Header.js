import { Fragment } from "react";

import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCardButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={meals} alt="food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
