import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import webSeries from './WebSeriesList'
import WebSeriesCardItem from './WebSeriesCardItem'

class WebSeriesSection extends Component {
  state = {webSeriesList: webSeries}

  render() {
    const {webSeriesList} = this.state
    return (
      <div className="movies-list-bg-container">
        <div className="movies-header">
          <h1 className="latest-movies-heading">Latest Web Series</h1>
        </div>
        <hr className="movies-separator-line" />
        <ul className="movies-list-container">
          {webSeriesList.slice(0, 10).map(each => (
            <WebSeriesCardItem movieDetails={each} key={each.id} />
          ))}
        </ul>
        <br />
        <div className="movies-header">
          <h1 className="latest-movies-heading">Other Web Series</h1>
          <div className="input-search-movies-container">
            <input
              type="search"
              className="search-input-movies"
              placeholder="Enter Movie Name"
            />
            <BsSearch className="search-icon-movies" />
          </div>
        </div>
        <hr className="movies-separator-line" />
        <ul className="movies-list-container">
          {webSeriesList.map(each => (
            <WebSeriesCardItem movieDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default WebSeriesSection
