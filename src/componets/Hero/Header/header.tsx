import Cart from "./Cart/cart";
import Logo from "./Logo/logo";
import Menu from "./Menu/menu";
import style from "./style.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Menu />
      <Cart />
    </div>
  );
};

export default Header;
