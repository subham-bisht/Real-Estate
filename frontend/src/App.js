import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
// import Dashboard from "./pages/Dashboard";
import PropertyList from "./pages/PropertyList";
import AddProperty from "./pages/AddProperty";
import AuthForm from "./pages/AuthForm";
import RefreshHandeler from "./RefreshHandeler";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };
  return (
    <>
      <Router>
        <RefreshHandeler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route
            path="/properties"
            element={<PrivateRoute element={<PropertyList />} />}
          />
          <Route
            path="/properties/add-property"
            element={<PrivateRoute element={<AddProperty />} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
