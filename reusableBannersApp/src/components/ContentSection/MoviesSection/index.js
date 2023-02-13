import {BsSearch} from 'react-icons/bs'
import './index.css'

const MoviesSection = () => (
  <div className="movies-list-bg-container">
    <div className="movies-header">
      <h1 className="latest-movies-heading">Latest Movies</h1>
      <div className="input-search-movies-container">
        <input
          type="search"
          className="search-input-movies"
          placeholder="Enter Movie Name"
        />
        <BsSearch className="search-icon-movies" />
      </div>
    </div>
  </div>
)

export default MoviesSection
