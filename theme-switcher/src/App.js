import './App.css';
import React,{useState} from 'react';


import ThemeToggler from "./components/ThemeToggler";
import HeroSection from "./components/HeroSection";

import Context from "./context/Context";

function App() {
    const themeHook = useState("light");
  return (
      <Context.Provider value={themeHook}>
          <div>
              <ThemeToggler/>
              <HeroSection />
          </div>

      </Context.Provider>
  );
}

export default App;
