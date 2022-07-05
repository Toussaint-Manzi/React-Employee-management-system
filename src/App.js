import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import Todo from "./components/Todo";
import Register from "./components/Register";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
// import NoPage from "./components/NoPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route index element={<Register />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}