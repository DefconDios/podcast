import { useEffect, useState } from 'react'
import './SearchBar.scss'
import { getPodcast } from '../../core/services/ItunesSearchAPI/itunes.service'
import { useAppContext } from '../../AppContext'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { setResults, clearResults, searchResults } = useAppContext()
  const [previousSearchTerm, setPreviousSearchTerm] = useState<string>('')

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.length >= 3 && searchTerm !== previousSearchTerm) {
        clearResults()
        fetchData()
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchTerm, previousSearchTerm])

  const fetchData = async () => {
    const results = await getPodcast(searchTerm)
    if (results) {
      setResults(results)
    }

    setPreviousSearchTerm(searchTerm)
  }

  const clearDataSearch = () => {
    clearResults()
  }

  return (
    <div className='search'>
      {searchResults && (
        <button className='search__button' onClick={clearDataSearch}>
          <ArrowBackIosRoundedIcon />
        </button>
      )}
      <input
        type='search'
        placeholder='podcast'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBarComponent
