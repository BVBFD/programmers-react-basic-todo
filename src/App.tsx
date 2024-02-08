import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About/About";
import { createContext, useContext, useMemo, useState } from "react";

const ContextStorage = createContext<ContextStorageType>({
  stock: 0,
  setStock: () => {},
});

export const useStock = () => useContext(ContextStorage);

function App() {
  const [contextStorageValue, setContextStorageValue] = useState<number>(0);
  const navigate = useNavigate();

  const initialContextStorageValue = useMemo(
    () => ({
      stock: contextStorageValue,
      setStock: setContextStorageValue,
    }),
    [contextStorageValue, setContextStorageValue]
  );

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Coffee Mate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={
            <ContextStorage.Provider value={initialContextStorageValue}>
              <Detail />
            </ContextStorage.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
