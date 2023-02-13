import {Switch, Route} from 'react-router-dom'
import HomeSection from './HomeSection'
import MoviesSection from './MoviesSection'

import './movieCards.css'
import './moviesPageStyles.css'

const ContentSection = () => (
  <Switch>
    <Route path="/home" component={HomeSection} />
    <Route path="/movies" component={MoviesSection} />
  </Switch>
)

export default ContentSection
