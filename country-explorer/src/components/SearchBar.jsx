import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <div className="flex justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleChange}
        className="w-full max-w-md p-3 border rounded-lg shadow"
      />
    </div>
  );
}

export default SearchBar;