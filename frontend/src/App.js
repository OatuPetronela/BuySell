import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Register from "./components/features/auth/Register";
import Home from "./components/features/pages/Home";
import Login from "./components/features/auth/Login";
import { AuthContextProvider } from "components/features/auth/Auth.context";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<h2>Adauga un nou anunt</h2>} path="/new-item" />
            <Route element={<h2>Mesaje</h2>} path="/message" />
            <Route element={<h2>Favorite</h2>} path="/favourite" />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
