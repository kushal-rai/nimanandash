import AppLayout from "./pages/AppLayout";
import GoogleForm from "./pages/GoogleForm";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/registration" element={<GoogleForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
