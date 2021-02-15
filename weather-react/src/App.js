import React from 'react';
const api ={
  key: "fb608b3c98ccd4802fce970cb91830ba",
  base: "https//api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
    </div>
    </main>
    </div>
  );
}

export default App;
