import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/features/auth/Register";
import HomeScreen from "./components/screens/HomeScreen";
import Login from "./components/features/auth/Login";
import { AuthContextProvider } from "components/features/auth/Auth.context";
import FormAddProduct from "components/screens/FormAddProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<FormAddProduct />} path="/new-product" />
            <Route element={<h2>Mesaje</h2>} path="/message" />
            <Route element={<h2>Favorite</h2>} path="/favourite" />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
