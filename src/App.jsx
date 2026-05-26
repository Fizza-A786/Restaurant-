import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import AnnouncementBanner from "./Common/NavbarTop";
import Hero from "./Pages/Home";
import Footer from "./Common/Footer";
import Languages from "./components/MultiLanguage/Languages";

// 1. Define your layout wrapper
const MainLayout = () => {
  return (
    <>
      <AnnouncementBanner /> {/* Added since it was imported */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// 2. Create the router outside of the components
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", 
        element: <Hero />
      },
      {
        path: "/languages", 
        element: <Languages />
      },
      // Add more routes here later (e.g., /pricing, /about)
    ]
  }
]);

// 3. Pass the router to the provider
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;