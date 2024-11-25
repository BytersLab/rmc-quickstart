import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { Home } from "./routes/Home/Home.route.jsx";
import { NotFound } from "./routes/NotFound/NotFound.route.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}
