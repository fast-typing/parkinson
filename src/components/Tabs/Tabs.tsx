import React, { useState } from "react";
import "./Tabs.css";
const classes = "px-4 py-2 hover:bg-[--bg-color1] text-lg";

export default function Tabs({ children, onChange }) {
  const [choosen, setChoosen] = useState(0);

  function handleChange(index) {
    onChange(index);
    setChoosen(index);
  }

  function getClasses(index): string {
    return choosen === index ? "active " + classes : classes;
  }

  return (
    <div className="flex cursor-pointer w-fit mb-6">
      {children.map((child) => {
        const index = children.indexOf(child);
        return (
          <div className={getClasses(index)} onClick={() => handleChange(index)}>
            {child.props.children}
          </div>
        );
      })}
    </div>
  );
}
