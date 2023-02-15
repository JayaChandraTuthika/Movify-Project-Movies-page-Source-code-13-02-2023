import {Switch, Route} from 'react-router-dom'
import HomeSection from './HomeSection'
import MoviesSection from './MoviesSection'

import './moviesPageStyles.css'

const ContentSection = () => (
  <Switch>
    <Route exact path="/" component={HomeSection} />
    <Route exact path="/movies" component={MoviesSection} />
  </Switch>
)

export default ContentSection
