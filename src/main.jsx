import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import './scss/index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppLayout, Header, HeaderMobile } from "./components"
import useStore from "./store/index.js"

function Main() {
  const { width, setWidth } = useStore()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {width >= 576 ? <Header /> : <HeaderMobile />}
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
