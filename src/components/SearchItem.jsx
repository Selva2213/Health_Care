
const SearchItem = ({ search, setSearch, placeHolder }) => {
    const handleSearch = (e) => {
        console.log(e.target);
    }

    return (
        <form className='searchForm flex gap-4 justify-center items-center' onSubmit={(e) => e.preventDefault()}>
            <span class="material-symbols-outlined">search</span>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder={placeHolder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 px-4 rounded-md"
            />
            <button onClick={e => handleSearch(e)} className="py-1 px-4 rounded-md bg-blue-600 text-white">Search</button>
        </form>
    )
}

export default SearchItem