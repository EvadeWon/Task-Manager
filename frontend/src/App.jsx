import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React from 'react';
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Home /></ProtectedRoute>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ])
  return (
    <div className="bg-white text-black h-screen p-2">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;