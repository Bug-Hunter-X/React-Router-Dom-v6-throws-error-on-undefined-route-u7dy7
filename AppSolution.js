import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
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
//This solution uses a catch all route '*' and redirects to the home route when no other path matches.  Consider a proper 404 page for better UX.