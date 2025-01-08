import style from "./style.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.content}>
        <div className={style.left}>
          <h1 className={style.title}>Пара слов о нас</h1>
          <p className={style.text}>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
          </p>
          <div className={style.lineLogo}>
            <span className={style.line}></span>
            <span className={style.logo}>SneakMax</span>
          </div>
        </div>
        <div className={style.right}>
        </div>
      </div>
    </div>
  );
};

export default About;
