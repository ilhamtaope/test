import Navigation from "./components/Navigation";
import Hero from "./components/homePage/hero";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/blog";
import Test from "./components/homePage/Test";

function App() {
  return (
    <>
      {" "}
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Test />
    </>
  );
}

export default App;
