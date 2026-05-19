import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
 return (
  <div className="min-h-screen bg-slate-100">
    
    <Header />

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-10 min-h-[80vh]">
        <Outlet />
      </div>
    </div>

  </div>
)
}

export default RootLayout