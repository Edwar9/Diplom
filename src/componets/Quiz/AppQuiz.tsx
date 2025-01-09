import React, { useState } from "react";
import FirstChoice from "./FirstChoice/FirstChoice";
import SecondChoice from "./SecondChoice/SecondChoice";
import style from "./style.module.css";
import ThirdChoice from "./ThirdChoice/ThirdChoice";

const AppQuiz: React.FC = () => {
  const [currentChoice, setCurrentChoice] = useState<number>(0);
  const nextChoice = () => {
    setCurrentChoice((prev) => (prev + 1) % 3);
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <h1>Мы подберем идеальную пару для вас</h1>
          <p className={style.text}>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями{" "}
          </p>
          <div className={style.choice}>
            {currentChoice === 0 && <FirstChoice />}
            {currentChoice === 1 && <SecondChoice />}
            {currentChoice === 2 && <ThirdChoice />}
          </div>
          <div className={style.button}>
            <span className={style.score}>1 из 3</span>
            <button className={style.click} onClick={nextChoice}>
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppQuiz;
