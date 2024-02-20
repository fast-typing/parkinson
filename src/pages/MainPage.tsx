import React, { useState } from "react";
import Tabs from "../components/Tabs/Tabs.tsx";

export default function MainPage() {
  const [index, setIndex] = useState(0);

  function changeIndex(newIndex: number) {
    console.log(newIndex);
    setIndex(newIndex);
  }

  function render(): JSX.Element {
    switch (index) {
      case 0:
        return (
          <div>
            <p>
              Углубитесь в то, как передовые алгоритмы DKD приносят пользу научным и медицинским исследованиям в области нейродегенеративных
              заболеваний
            </p>
            <br />
            <button className="button">Узнать больше</button>
          </div>
        );
      case 1:
        return (
          <div>
            <p>Узнайте, как диагностические решения DKD позволяют медицинским работникам добиваться лучших результатов лечения пациентов.</p>
            <br />
            <button className="button">Посмотреть наш вклад</button>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Изучите, как алгоритмы машинного обучения DKD находятся на передовой медицинской технологии.</p>
            <br />
            <button className="button">Узнать больше</button>
          </div>
        );
      default:
        return <></>;
    }
  }

  return (
    <div className="grid gap-44">
      <div className="flex justify-between items-center w-full xl:w-11/12">
        <h1 className="text-4xl leading-snug font-bold w-[520px]">Инновационная диагностика Болезни Паркинсона</h1>
        <img src="./imgs/brain.png" alt="" />
      </div>

      <section>
        <h3 className="text-2xl font-semibold mb-6">DKD привносит инновации в диагностику нейродегенеративных заболеваний.</h3>
        <p>
          Используя глубокое машинное обучение, обученное на данных биоэлектрической активности мозга, наше программное обеспечение предлагает
          трансформационный, массово доступный диагностический инструмент на данный момент способный диагностировать болезнь Паркинсона. Мы
          поддерживаем медицинские учреждения, передовых врачей и новаторских нейроученых в обнаружении заболеваний.
        </p>
        <br />
        <div>
          <Tabs onChange={changeIndex}>
            <label>Исследователям</label>
            <label>Медработникам</label>
            <label>Энтузиастам</label>
          </Tabs>
          <div className="p-4 bg-[var(--bg-color1)]">{render()}</div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6">Численные методы и нейронные сети в анализе ЭЭГ.</h3>
        <p>
          В нашей компании мы активно используем численные методы и нейронные сети для анализа ЭЭГ с целью диагностики и исследования нейрологических
          заболеваний, таких как болезнь Паркинсона. Эти технологии позволяют нам расшифровывать сложные данные ЭЭГ, предоставляя медицинским
          специалистам ценную информацию о динамике мозга.
          <br />
          <br />
          Мы обнаружили, что сверточные нейронные сети (СНС) особенно эффективны в изучении пространственных и временных характеристик данных ЭЭГ. Они
          помогают нам автоматически выявлять ключевые признаки и устанавливать связи между различными аспектами данных ЭЭГ, что критически важно для
          точной диагностики.
          <br />
          <br />
          Мы также уделяем внимание многоканальному анализу, где каждый канал обрабатывается независимо, но в то же время взаимодействует с другими
          каналами, обеспечивая более глубокое понимание процессов, происходящих в мозге. Это помогает нам лучше понять движения и внимание, что может
          быть критически важно для диагностики болезни Паркинсона.
          <br />
          <br />
          Сочетание численных методов и нейронных сетей открывает перед нами новые горизонты в области нейронаук и медицинской диагностики, обогащая
          наш путь понимания и лечения нейрологических заболеваний. Мы продолжаем исследовать и развивать эти технологии, стремясь улучшить качество
          жизни пациентов.
        </p>
      </section>
    </div>
  );
}