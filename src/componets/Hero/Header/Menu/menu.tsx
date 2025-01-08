import style from "./style.module.css";

const Menu = () => {
  return (
    <div className={style.menu}>
      <a href="">Каталог</a>
      <a href="">О нас</a>
      <a href="">Подбор товара</a>
      <a href="">Наша команда</a>
      <a href="">Доставка и оплата</a>
      <a href="">Контакты</a>
    </div>
  );
};

export default Menu;
