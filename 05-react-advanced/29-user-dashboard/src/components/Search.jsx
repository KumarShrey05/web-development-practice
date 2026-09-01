function Search({ value, onChange, onSearch, placeholder }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form className="searchBox" onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default Search;
