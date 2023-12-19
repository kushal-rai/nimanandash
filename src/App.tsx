import AppLayout from "./pages/AppLayout";
import GoogleForm from "./pages/GoogleForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/registration" element={<GoogleForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
