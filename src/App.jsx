import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Land, Bookings, About, Contact, Gallery } from "./pages";
import { Navbar } from "./components";
import Solution from "./components/Solution";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="book" element={<Bookings />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="solution" element={<Solution/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
