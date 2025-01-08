import style from "./style.module.css";

const Content = () => {
  return (
    <div className={style.content}>
      <p className={style.info}>
        Кроссовки известных брендов с доставкой по России и СНГ
      </p>
      <p className={style.text}>
        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
        многие другие по низким ценам
      </p>
      <button className={style.shopping}>Перейти к покупкам</button>
    </div>
  );
};

export default Content;

