import React, { useState } from "react";

interface Props {
  type: "signin" | "signup";
  onClose: () => void;
}

const label = {
  signin: "Вход",
  signup: "Регистрация",
};

export default function AuthModal(props: Props) {
  const [form, setForm] = useState({
    username: null,
    email: null,
    password: null,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault()
  }

  return (
    <>
      <div onClick={props.onClose} className="z-[2] fixed top-0 bottom-0 left-0 right-0 bg-black/10 backdrop-blur-sm"></div>
      <form onSubmit={submitForm} className="z-[3] fixed grid gap-4 bg-[var(--bg-color1)] top-1/2 left-1/2 p-8 translate-y-[-50%] translate-x-[-50%] rounded-lg w-[350px]">
        <h2 className="text-3xl font-medium">{label[props.type]}</h2>
        {props.type === "signin" ? (
          <div className="w-full">
            <label htmlFor="username"></label>
            <input className="w-full" type="text" placeholder="Имя" name="username" id="username" onChange={handleChange} />
          </div>
        ) : (
          <div className="w-full">
            <label htmlFor="email"></label>
            <input className="w-full" type="email" placeholder="Почта" name="email" id="email" onChange={handleChange} />
          </div>
        )}

        <div className="w-full">
          <label htmlFor="password"></label>
          <input className="w-full" type="password" placeholder="Пароль" id="password" onChange={handleChange} />
        </div>
        <button className="button">Подтвердить</button>
      </form>
    </>
  );
}
