import { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({
  className = "",
  name,
  value,
  options,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (optionValue) => {
    onChange(name, optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdown} ${isOpen ? styles.open : ""} ${className}`}
      role="listbox"
      aria-expanded={isOpen}
      tabIndex={0}
      onClick={toggleDropdown}
    >
      {/* Selected Option */}
      <div className={styles.selectedOption}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Options */}
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                option.value === value ? styles.selected : ""
              }`}
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
