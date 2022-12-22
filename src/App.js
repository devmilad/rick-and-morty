import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu"
import HomeCard from './pages/HomeCard'
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route   path="*" element={<Navigate to="/" replace />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
