import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal.tsx";

interface Modal {
  isOpen: boolean;
  type: "signin" | "signup";
}

export default function Header() {
  const [modal, setModal] = useState<Modal>({
    isOpen: false,
    type: "signin",
  });

  function openModal(type: "signin" | "signup") {
    setModal({
      isOpen: true,
      type: type,
    });
  }

  function closeModal() {
    setModal({
      ...modal,
      isOpen: false
    })
  }

  return (
    <>
      <div className="w-full bg-white/30 flex justify-center h-24 sticky top-0 backdrop-blur border-b-[1px] border-slate-900/10">
        <header className="flex justify-between items-center max-w-full w-[var(--page-width)] px-8">
          <Link to={"/"} className="flex items-center gap-2">
            <img src="./imgs/logo.png" className="w-16" alt="" />
            <div>
              <h4 className="text-xl font-medium">DKD</h4>
              <span className="w-32 block text-sm text-balance">Умные решения для диагностики</span>
            </div>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link to={"/"}>Главная</Link>
            <Link to={"/ai"}>ИИ</Link>
            <Link to={"/samples"}>Образцы</Link>
            <Link to={"/upload"}>Загрузить</Link>
            <div className="flex gap-4">
              <button className="button" onClick={() => openModal("signin")}>
                Вход
              </button>
              <button className="button" onClick={() => openModal("signup")}>
                Регистрация
              </button>
            </div>
          </nav>
        </header>
      </div>
      
      {modal.isOpen ? <AuthModal onClose={closeModal} type={modal.type} /> : null}
    </>
  );
}
