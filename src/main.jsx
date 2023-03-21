import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home";
import PostDetailsView from "./feature/PostDetailsSlice/PostDetailsView";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/post/:postId",
    element: <PostDetailsView></PostDetailsView>,
  },
  {
    path: "/user/:userId",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
