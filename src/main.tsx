import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Login />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/signup",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Signup />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/all-posts",
      //   element: (
      //     <AuthLayout authentication>
      //       {" "}
      //       <AllPosts />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/add-post",
      //   element: (
      //     <AuthLayout authentication>
      //       {" "}
      //       <AddPost />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/edit-post/:slug",
      //   element: (
      //     <AuthLayout authentication>
      //       {" "}
      //       <EditPost />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/post/:slug",
      //   element: <Post />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}  />
    </ThemeProvider>
  </Provider>
);
