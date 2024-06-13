import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Hello from "./pages/hello.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./pages/navbar.jsx";
import About from "./pages/about.jsx";
import TableSource from "./pages/TableSource.jsx";
import { Layout } from "antd";
const { Sider, Header, Content, Footer } = Layout;

import "antd/dist/antd.css";

export const routeContext = createContext();

function App() {
  // const [count, setCount] = useState(0);
  const route = [
    {
      path: "/",
      label: "Home",
      key: "home",
      element: () => {
        return <Home />;
      },
    },
    {
      path: "/hello",
      label: "Hello",
      key: "hello",
      element: () => {
        return <Hello />;
      },
    },
    {
      path: "/about",
      label: "About",
      key: "about",
      element: () => {
        return <About />;
      },
    },
    {
      path: "/information",
      label: "Information",
      key: "information",
      element: () => {
        return <TableSource />;
      },
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Layout>
          <routeContext.Provider value={route}>
            <Sider style={{ background: "#fff" }}>
              <Navbar />
            </Sider>
          </routeContext.Provider>
          <Layout style={{ height: "100vh" }}>
            <Header style={{ width: "2000px", color: "white" }}>Header</Header>
            <Content>
              <Routes>
                {route.map((item) => {
                  return (
                    <Route
                      path={item.path}
                      element={<item.element />}
                      key={item.label}
                    />
                  );
                })}
              </Routes>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default App;
