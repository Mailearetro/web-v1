
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
// import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
// import Dashboard from "./pages/Dashboard.tsx";
import PageNotFound from "./components/PageNotFound.tsx";
import EmailDisplay from "./pages/EmailDisplay.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import { Chat } from "./pages/chat.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import {OAuthSelection} from "./pages/oAuthSelection.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "/chat-dashboard",
        element: (
          // <AuthLayout authentication>
          // <Dashboard />
          <Chat />
          // </AuthLayout>
        ),
      },
      {
        path: "/oauth-select",
        element: (
          // <AuthLayout authentication>
          // <Dashboard />
          <OAuthSelection/>
          // </AuthLayout>
        ),
      },
      {
        path: "*",
        element: (
          // <AuthLayout authentication>
            <PageNotFound />
          //  </AuthLayout>
        ),
      },
      {
        path: "/test",
        element: (
          // <AuthLayout authentication>
            <EmailDisplay/>
          //  </AuthLayout>
        ),
      },
      {
        path: "/contact",
        element: (
          // <AuthLayout authentication>
            <ContactUs/>
          //  </AuthLayout>
        ),
      },
      {
        path: "/about",
        element: (
          // <AuthLayout authentication>
            <AboutUs/>
          //  </AuthLayout>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          // <AuthLayout authentication>
            <PrivacyPolicy/>
          //  </AuthLayout>
        ),
      },
      {
        path: "/terms-and-conditions",
        element: (
          // <AuthLayout authentication>
            <TermsAndConditions/>
          //  </AuthLayout>
        ),
      },
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
  <KindeProvider
    clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
    domain={import.meta.env.VITE_KINDE_DOMAIN}
    logoutUri={window.location.origin}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      {/* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> */}
        <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </Provider>
  </KindeProvider>
);



