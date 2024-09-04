import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryInfoPage from './pages/countries/CountryInfoPage';
import CountryListPage from './pages/countries/CountryListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CountryListPage />} />
        <Route path='/:countryName/:countryCode' element={<CountryInfoPage />} />
      </Routes>
    </Router>
  )
}

export default App
