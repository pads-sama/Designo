import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/home";
import About from "./pages/about";
import Location from "./pages/location";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
