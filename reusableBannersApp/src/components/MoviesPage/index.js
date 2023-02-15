import NavBar from '../NavBar'
import SideBar from '../SideBar'
import ContentSection from '../ContentSection'

const MoviesPage = () => (
  <>
    <NavBar />
    <div className="bottom-section">
      <SideBar />
      <div className="content-section">
        <ContentSection />
      </div>
    </div>
  </>
)

export default MoviesPage
