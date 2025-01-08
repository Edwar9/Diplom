import Content from "./Content/content";
import Header from "./Header/header";
import style from "./style.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
    <Header />
    <Content />
  </div>
  );
};

export default Hero;
