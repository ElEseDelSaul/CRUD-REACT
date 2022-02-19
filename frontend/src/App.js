import logo from './logo.svg';
import './App.css';
//Enrutador de React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: "25%" }} />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;