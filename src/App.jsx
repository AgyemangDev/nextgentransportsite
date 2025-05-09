import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import { BookingProvider } from "./context/BookingContext";
import MyTicketsPage from "./pages/MyTicketsPage";
import "./App.css";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/my-tickets" element={<MyTicketsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
