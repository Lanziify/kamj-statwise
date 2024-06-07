import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
