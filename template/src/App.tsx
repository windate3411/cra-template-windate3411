import { Routes, Route } from 'react-router-dom';
import Home from 'views/home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="mt-5">
        Welcome to the custom cra template, sky's the limit!
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
