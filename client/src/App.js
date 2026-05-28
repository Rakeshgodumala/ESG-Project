import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import UploadPage from "./pages/UploadPage";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-dark bg-dark p-3">

        <div className="container">

          <Link
            to="/"
            className="navbar-brand"
          >
            ESG Platform
          </Link>

          <div>

            <Link
              to="/"
              className="btn btn-light me-2"
            >
              Dashboard
            </Link>

            <Link
              to="/upload"
              className="btn btn-warning"
            >
              Upload
            </Link>

          </div>
        </div>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/upload"
          element={<UploadPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;