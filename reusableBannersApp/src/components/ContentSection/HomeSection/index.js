import './index.css'

const HomeSection = () => (
  <div>
    <h1 className="category-heading">
      Trending{' '}
      <img
        src="https://e.unicode-table.com/orig/cf/9a75973ba3bb465be5e9459a656458.png"
        className="star-image"
        alt=""
      />
    </h1>
    <div className="horizontal-scroll">
      <div className="stories-container">
        <div className="movie-card movie-1">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Tegimpu</p>
          </div>
        </div>
        <div className="movie-card movie-5">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Avatar</p>
          </div>
        </div>

        <div className="movie-card movie-4">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Pushpa</p>
          </div>
        </div>

        <button className="more-button" type="button">
          More
          <i className="fa-solid fa-chevron-right scroll-arrows to-right">{}</i>
        </button>
      </div>
    </div>

    <h1 className="category-heading">
      Top rated{' '}
      <img
        src="https://e.unicode-table.com/orig/5f/648215753933caf21bd05372c45c2c.png"
        className="star-image"
        alt=""
      />
    </h1>
    <div className="horizontal-scroll">
      <div className="stories-container">
        <div className="movie-card movie-Vikram">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Vikram-Hitlist</p>
          </div>
        </div>
        <div className="movie-card movie-RadheShyam">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Radhe Shyam</p>
          </div>
        </div>

        <div className="movie-card movie-RRR">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">RRR</p>
          </div>
        </div>

        <button className="more-button" type="button">
          More
          <i className="fa-solid fa-chevron-right scroll-arrows to-right">{}</i>
        </button>
      </div>
    </div>
    <h1 className="category-heading">
      Web Series{' '}
      <img
        src="https://e.unicode-table.com/orig/6d/977e6d5a5d9b507cf215dbb8eaa556.png"
        className="star-image"
        alt=""
      />
    </h1>
    <div className="horizontal-scroll">
      <div className="stories-container">
        <div className="movie-card webseries-parampara">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Vikram-Hitlist</p>
          </div>
        </div>
        <div className="movie-card webseries-Locked">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">Radhe Shyam</p>
          </div>
        </div>

        <div className="movie-card webseries-Kailasapuram">
          <div className="details-of-movie-card">
            <i className="fa-solid fa-circle-play play-icon">{}</i>
            <p className="movie-name">RRR</p>
          </div>
        </div>

        <button className="more-button" type="button">
          More
          <i className="fa-solid fa-chevron-right scroll-arrows to-right">{}</i>
        </button>
      </div>
    </div>
  </div>
)

export default HomeSection
