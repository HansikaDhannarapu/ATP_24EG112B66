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
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-purple-50 to-purple-100">

    <Header />

    <div className="flex-grow mx-6 md:mx-16 lg:mx-32 py-8">
      <Outlet />
    </div>

    <Footer />

  </div>
);
}

export default RootLayout;