import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import { Favourite } from "./pages/Favourite";
import { Home } from "./pages/Home";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
