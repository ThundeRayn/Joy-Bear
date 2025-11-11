import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, placeholder = 'Search products by id' }) => {
  const [query, setQuery] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch?.(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  const handleClear = () => {
    setQuery('')
    onSearch?.('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#86A788] focus:border-transparent transition-all duration-300"
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