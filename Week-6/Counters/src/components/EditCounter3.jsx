import {useContext} from 'react'
import {Context} from '../contexts/ContextProvider'
import {useNavigate} from 'react-router'

function EditCounter3() {
    const {counters, increment, decrement} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">EditCounter 3</h2>
            <p className="text-lg mb-4">Counter: {counters[3]}</p>
            <div className="flex gap-3 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 font-bold text-white px-6 py-2 rounded-lg" onClick={() => increment(3)}>+</button>
                <button className="bg-red-500 hover:bg-red-600 font-bold text-white px-6 py-2 rounded-lg" onClick={() => decrement(3)}>-</button>
            </div>
        </div>
    )
}

export default EditCounter3