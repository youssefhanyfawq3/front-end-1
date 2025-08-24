import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div className="text-red-500">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
