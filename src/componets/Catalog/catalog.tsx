import style from "./style.module.css";

const Catalog = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1 className={style.text}>Каталог</h1>
        <div className={style.catalog}>
          <div className={style.filters}></div>
          <div className={style.products}>
            <div className={style.box}>1</div>
            <div className={style.box}>2</div>
            <div className={style.box}>3</div>
            <div className={style.box}>4</div>
            <div className={style.box}>5</div>
            <div className={style.box}>6</div>
          </div>
        </div>
        <button className={style.show}>Показать ещё</button>
      </div>
    </div>
  );
};

export default Catalog;
