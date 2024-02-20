import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[var(--bg-color1)] flex justify-center h-32">
      <footer className="flex justify-between items-center max-w-full w-[var(--page-width)] px-8 py-4">
        <div className="grid">
          <h3 className="text-xl">Контакты</h3>
          <p>+7 (912) 4609518</p>
          <p>dkddecisions@gmail.com</p>
        </div>
        <div className="grid gap-4">
          <p>При поддержке Фонда Содействия Инновациям</p>
          <p>© 2023 DKD - Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
