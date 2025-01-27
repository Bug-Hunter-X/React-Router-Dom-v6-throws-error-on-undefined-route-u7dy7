import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
export default function Home(){
  return(
    <div>Home</div>
  );
}

// About.js
export default function About(){
  return(
    <div>About</div>
  );
}
//This code will cause an error if you try to navigate to a path that does not have a matching route defined. For example, if you try to navigate to `/contact`, the application will throw an error.
