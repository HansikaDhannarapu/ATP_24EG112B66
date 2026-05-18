import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useEffect } from 'react'
import { useAuth } from "../store/authStore";

function RootLayout() {

  //import check checkAuth
  let checkAuth = useAuth(state => state.checkAuth)

  useEffect(() => {
    checkAuth()
  }, [])

  return (
  <div className="min-h-screen flex flex-col bg-[#f7f8fa]">

    <Header />

    <div className="flex-grow mx-4 md:mx-10 lg:mx-20 py-8">
      <Outlet />
    </div>

    <Footer />

  </div>
);
}

export default RootLayout;
