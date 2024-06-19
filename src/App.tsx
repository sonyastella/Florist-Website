import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';
import ContactUs from './components/ContactUs/ContactUs';
import OurTeam from './components/OurTeam/OurTeam';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <div className="max-w-screen-md mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
