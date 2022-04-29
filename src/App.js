import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Promo1 from './components/Promo1';
import Promo from './components/Promo';
import {convertDateFormat} from './format/FormatDate';

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/Promo/:promo_no" element={<Promo1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
