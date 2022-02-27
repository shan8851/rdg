import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Testimonials } from "./components/testimonials/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
