interface CustomSearchBar{
  placeholder?: string
}

export default function SearchBar({placeholder = 'ponlo wei'}: CustomSearchBar) {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder={placeholder} />
        <button>Buscar</button>
      </div>
    </>
  );
}
