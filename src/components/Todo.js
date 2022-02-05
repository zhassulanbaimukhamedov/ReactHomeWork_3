import Input from "./Input.js/Input";
import Task from "./Tasks/Task";
import "./todo.css";
import React, { useState } from "react";

function Todo() {
  const [color, setColor] = useState("green");
  const [age, setAge] = useState(20);
  const [year, setYear] = useState(0);
  const [inputValues, setInputValues] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0
  });
  const [avrgSum, setAvrgSum] = useState(0);
  const changeInput = ({ name, value }) => {
    inputValues[name] = Number(value);
    calcAvrgSum(inputValues);
  };
  const calcAvrgSum = (values) => {
    let sum = 0;
    for (var i in inputValues) {
      sum += inputValues[i];
    }
    setAvrgSum(sum / 5);
  };

  return (
    <div>
      <div style={{ backgroundColor: color, width: "400px" }}>
        <button onClick={() => setColor("red")}>click</button>
      </div>
      <div>
        <h2>
          Задача #1. Создать две кнопки. Первая увеличивает возраст на единицу,
          а вторая уменьшает его
        </h2>
        <h4>Решение:</h4>
        <div>
          <button onClick={() => setAge(age + 1)}>+</button>
          <button onClick={() => setAge(age - 1)}>-</button>
          <p>Возраст: {age}</p>
        </div>
      </div>
      <div>
        <h2>
          Задача #2. Дан инпут и абзац. В инпут вводится возраст пользователя.
          Сделайте так, чтобы при наборе текста, в абзаце автоматический
          появлялся год рождения пользователя
        </h2>
        <h4>Решение:</h4>
        <div>
          <input
            type="text"
            onChange={(e) => setYear(2022 - Number(e.target.value))}
          />
          <p>Год: {year}</p>
        </div>
      </div>
      <div>
        <h2>
          Задача #3. Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши
          инпуты в абзац выводилось среднее арифметическое введенных чисел
        </h2>
        <h4>Решение:</h4>
        <div>
          <input
            type="number"
            name="input1"
            onChange={({ target }) => changeInput(target)}
          />
          <input
            type="number"
            name="input2"
            onChange={({ target }) => changeInput(target)}
          />
          <input
            type="number"
            name="input3"
            onChange={({ target }) => changeInput(target)}
          />
          <input
            type="number"
            name="input4"
            onChange={({ target }) => changeInput(target)}
          />
          <input
            type="number"
            name="input5"
            onChange={({ target }) => changeInput(target)}
          />
          <p>Cр.зн.: {avrgSum} </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;

//create div width: 200px ,color 'yellow
// onClick color "blue"
