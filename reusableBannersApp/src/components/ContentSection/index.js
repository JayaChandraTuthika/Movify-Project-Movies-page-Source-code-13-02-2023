import {Switch, Route} from 'react-router-dom'
import HomeSection from './HomeSection'
import MoviesSection from './MoviesSection'
import WebSeriesSection from './WebSeriesSection'

import './moviesPageStyles.css'

const ContentSection = () => (
  <Switch>
    <Route exact path="/" component={HomeSection} />
    <Route exact path="/movies" component={MoviesSection} />
    <Route exact path="/webseries" component={WebSeriesSection} />
  </Switch>
)

export default ContentSection
