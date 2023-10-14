import './SearchBar.scss';

const SearchBarComponent = () => {
    return (
        <div className="search">
            <button className='search__button'>BACK</button>
            <input type="search" placeholder="podcast" />
        </div>
    )
};

export default SearchBarComponent;
