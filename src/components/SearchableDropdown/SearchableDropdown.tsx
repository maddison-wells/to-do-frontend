import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchableDropdown.module.scss";

interface SearchableDropdownProps {
  options: DropdownItem[];
  onChange: (item: number) => unknown;
  placeholder: string;
}

interface DropdownItem {
  label: string;
  value: number;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  onChange,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [filter, setFilter] = useState<string>("");

  const [list, setList] = useState<boolean>(false);

  const handleRemoveSearch = () => {
    setFilter("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const isClearVisible = filter !== "";

  return (
    <div className={styles.relative}>
      <input
        // error={false}
        className={styles.wrapper}
        type="text"
        placeholder={placeholder}
        onChange={(e) => setFilter(e.target.value)}
        ref={inputRef}
        data-testid="dropdownInput"
        onFocus={() => {
          setList(true);
        }}
        onBlur={() => setList(false)}
      />
      {isClearVisible && (
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.clear}
          onClick={handleRemoveSearch}
          data-testid="reset"
        />
      )}
      {list && (
        <ul className={styles.options} onMouseDown={(e) => e.preventDefault()}>
          {options
            .filter((item) =>
              item.label.toLowerCase().includes(filter.toLowerCase())
            )
            .map((item, i) => (
              <li
                className={styles.list}
                key={i}
                onClick={() => {
                  onChange(item.value);
                  if (inputRef.current) {
                    inputRef.current.value = item.label;
                  }
                }}
              >
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
