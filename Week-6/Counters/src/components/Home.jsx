import EditCounter1 from './EditCounter1'
import EditCounter2 from './EditCounter2'
import EditCounter3 from './EditCounter3'
import EditCounter4 from './EditCounter4'

function Home() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <div className="bg-fuchsia-800  rounded-xl shadow-sm p-6 mb-8 border-3 border-black text-center">
                    <h1 className="text-4xl font-extrabold text-white  text-center">App</h1>
                </div>

                {/* 4 Boxes Grid Layout */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-amber-400 border-4 border-black text-white rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 p-8 flex flex-col items-center justify-center">
                        <EditCounter1 />
                    </div>
                    <div className="bg-amber-400 border-4 border-black text-white rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 p-8 flex flex-col items-center justify-center">
                        <EditCounter2 />
                    </div>
                    <div className="bg-amber-400 border-4 border-black text-white rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 p-8 flex flex-col items-center justify-center">
                        <EditCounter3 />
                    </div>
                    <div className="bg-amber-400 border-4 border-black text-white rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 p-8 flex flex-col items-center justify-center">
                        <EditCounter4 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home