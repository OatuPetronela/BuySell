import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Register from "./components/features/auth/Register";
import Home from "./components/features/pages/Home";
function App() {
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<h2>Adauga un nou anunt</h2>} path="/new-item" />
        <Route element={<h2>Mesaje</h2>} path="/mesaje" />
        <Route element={<h2>Favorite</h2>} path="/favorite" />
     </Routes>
         </BrowserRouter>
    </>
  );
}

export default App;
