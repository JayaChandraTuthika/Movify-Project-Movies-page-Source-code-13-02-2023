import {BsSearch} from 'react-icons/bs'
import {Component} from 'react'

import moviesList from './MoviesList'
import MovieCardItem from './MovieCardItem'
import './index.css'

const movies = [...moviesList]

class MoviesSection extends Component {
  state = {movieList: movies, searchInput: ''}

  onChangeSearchAllMovies = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {movieList, searchInput} = this.state

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

    const allMoviesInDateDesc = movieList.sort((a, b) => {
      const date1 = new Date(a.releaseDate)
      const date2 = new Date(b.releaseDate)
      if (date1 < date2) {
        return 1
      }
      return -1
    })

    const filteredAllMovies = allMoviesInDateDesc.filter(each =>
      each.movieName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="movies-list-bg-container">
        <div className="movies-header">
          <h1 className="latest-movies-heading">Latest Movies</h1>
        </div>
        <hr className="movies-separator-line" />
        <ul className="movies-list-container">
          {newLatestMoviesList.slice(0, 10).map(each => (
            <MovieCardItem movieDetails={each} key={each.id} />
          ))}
        </ul>
        <br />
        <div className="movies-header">
          <h1 className="latest-movies-heading">All Movies</h1>
          <div className="input-search-movies-container">
            <input
              type="search"
              className="search-input-movies"
              placeholder="Enter Movie Name"
              value={searchInput}
              onChange={this.onChangeSearchAllMovies}
            />
            <BsSearch className="search-icon-movies" />
          </div>
        </div>
        <hr className="movies-separator-line" />
        <ul className="movies-list-container">
          {filteredAllMovies.map(each => (
            <MovieCardItem movieDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MoviesSection
