import {BsSearch} from 'react-icons/bs'
import {Component} from 'react'

import moviesList from './MoviesList'
import MovieCardItem from './MovieCardItem'
import './index.css'

const movies = [...moviesList]

class MoviesSection extends Component {
  state = {movieList: movies}

  render() {
    const {movieList} = this.state

    const latestMovies = movieList.filter(each => {
      const date = new Date(each.releaseDate)
      if (date.getFullYear() >= 2022) {
        return true
      }
      return false
    })

    const newLatestMoviesList = latestMovies.sort((a, b) => {
      const date1 = new Date(a.releaseDate)
      const date2 = new Date(b.releaseDate)
      if (date1 < date2) {
        return 1
      }
      return -1
    })

    return (
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
        <ul className="movies-list-container">
          {newLatestMoviesList.slice(0, 10).map(each => (
            <MovieCardItem movieDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MoviesSection
