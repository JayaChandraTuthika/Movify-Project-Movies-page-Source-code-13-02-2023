import {BrowserRouter} from 'react-router-dom'

import MoviesPage from './components/MoviesPage'

import './App.css'

const App = () => (
  <BrowserRouter>
    <MoviesPage />
  </BrowserRouter>
)

export default App
