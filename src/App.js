import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
