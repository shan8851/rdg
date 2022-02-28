import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Sorry } from "./components/sorry/Sorry";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Thanks } from "./components/thanks/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/sorry" element={<Sorry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
