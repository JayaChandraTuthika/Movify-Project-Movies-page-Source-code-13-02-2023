import './index.css'

const NavBar = () => (
  <nav>
    <div className="movify-logo-container-nav">
      <img
        src="https://ik.imagekit.io/93bbofu0i7/Netflix_project/short_videos/ff3fc80f0ee5d27d761296b66c163afa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673429939234"
        className="netflix-logo-nav"
        alt="logo"
      />
      <span className="logo-nav-part-text">OVIFY</span>
    </div>
    <div className="navigation-menu-navbar" id="navigationLinksContainer">
      <a className="navigation-link-style" href="/">
        Home
      </a>
      <a className="navigation-link-style" href="/movies">
        Movies
      </a>
      <a className="navigation-link-style" href="/webseries">
        Web series
      </a>
      <a className="navigation-link-style" href="/tvshows">
        TV shows
      </a>
      <a className="navigation-link-style" href="/contact">
        Contact us
      </a>
    </div>
    <img
      src="https://res.cloudinary.com/dds8wfxdw/image/upload/v1674146697/Movify-project-resources/profile-pic-movify_uiwlqb.jpg"
      className="profile-pic-nav"
      alt=""
    />
  </nav>
)

export default NavBar
