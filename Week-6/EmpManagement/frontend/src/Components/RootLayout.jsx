import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      
      <Header />

      <div className="min-h-screen mx-10 md:mx-20 p-8 md:p-16">
        <Outlet />
      </div>

    </div>
  )
}

export default RootLayout