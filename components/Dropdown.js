import { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({
  className,
  name,
  value,
  options,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (optionValue) => {
    onChange(name, optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      ref={inputRef}
      className={`${styles.dropdown} ${
        isOpen ? styles.opened : ""
      } ${className}`}
      onClick={handleToggle}
    >
      <div className={styles.selectedOption}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                option.value === value ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
