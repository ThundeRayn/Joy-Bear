import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

const Search: React.FC<SearchProps> = ({ 
  onSearch, 
  placeholder = 'Search',
  onFocus,
  onBlur,
  value,
  onChange,
  onClear
}) => {
  const [query, setQuery] = useState<string>(value || '')

  useEffect(() => {
    if (value !== undefined) {
      setQuery(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setQuery(newValue)
    onChange?.(newValue)
    onSearch?.(newValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  const handleClear = () => {
    setQuery('')
    onChange?.('')
    onSearch?.('')
    onClear?.()
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-Joybrown focus:border-transparent transition-all duration-300"
          aria-label="Search"
        />
        <FiSearch className="absolute left-3 text-gray-400 pointer-events-none" size={18} />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  )
}

export default Search