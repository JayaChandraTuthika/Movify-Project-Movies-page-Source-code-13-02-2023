import './index.css'

const SideBar = () => (
  <div className="side-bar">
    <div className="menu-heading-container">
      <span className="menu">MENU</span>{' '}
      <i className="fa-solid fa-bars side-bar-icon">{}</i>
    </div>
    <hr className="seperator-line-sidebar" />
    <div className="side-bar-toggle-container">
      <div className="side-bar-options-container">
        <i className="fa-solid fa-user side-bar-icon">{}</i>
        <span className="side-bar-options">Profile</span>
      </div>
      <div className="side-bar-options-container">
        <i className="fa-regular fa-clock side-bar-icon">{}</i>
        <span className="side-bar-options">Recent</span>
      </div>
      <div className="side-bar-options-container">
        <i className="fa-solid fa-bookmark side-bar-icon">{}</i>
        <span className="side-bar-options">Bookmarked</span>
      </div>
      <div className="side-bar-options-container">
        <i className="fa-solid fa-download side-bar-icon">{}</i>
        <span className="side-bar-options">Downloaded</span>
      </div>
    </div>
    <hr className="seperator-line-sidebar" />
    <div className="side-bar-toggle-container">
      <div className="side-bar-options-container">
        <i className="fa-solid fa-gear side-bar-icon">{}</i>
        <span className="side-bar-options">Settings</span>
      </div>
      <div className="side-bar-options-container">
        <i className="fa-solid fa-circle-info side-bar-icon">{}</i>
        <span className="side-bar-options">Help</span>
      </div>
    </div>
    <div className="logout-toggle-container">
      <div className="log-out-options-container">
        <i className="fa-solid fa-right-from-bracket side-bar-icon">{}</i>
        <span className="side-bar-options">Log Out</span>
      </div>
    </div>
  </div>
)

export default SideBar
