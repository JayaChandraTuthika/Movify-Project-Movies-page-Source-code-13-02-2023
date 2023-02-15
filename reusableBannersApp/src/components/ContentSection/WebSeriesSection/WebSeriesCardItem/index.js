import './index.css'

const WebSeriesCardItem = props => {
  const {movieDetails} = props
  const {movieName, thumbnailUrl} = movieDetails
  //   console.log(new Date(releaseDate))

  const selectionStyle = {
    backgroundImage: `url(${thumbnailUrl})`,
  }

  return (
    <li>
      <div className="list-item-container" style={selectionStyle}>
        <div className="details-of-movie-card-1">
          <i className="fa-solid fa-circle-play play-icon-1">{}</i>
        </div>
      </div>
      <p className="movie-name-1">{movieName}</p>
    </li>
  )
}

export default WebSeriesCardItem
