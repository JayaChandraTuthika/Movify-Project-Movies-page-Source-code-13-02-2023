import './index.css'

const MovieCardItem = props => {
  const {movieDetails} = props
  const {movieName, releaseDate, thumbnailUrl} = movieDetails
  console.log(new Date(releaseDate))

  const selectionStyle = {
    backgroundImage: `url(${thumbnailUrl})`,
  }

  return (
    <li className="list-item-container" style={selectionStyle}>
      <div className="details-of-movie-card">
        <i className="fa-solid fa-circle-play play-icon">{}</i>
        <p className="movie-name">{movieName}</p>
      </div>
    </li>
  )
}

export default MovieCardItem
