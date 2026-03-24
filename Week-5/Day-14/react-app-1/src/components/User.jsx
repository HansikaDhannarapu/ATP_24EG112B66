function User(props ){
    //{user :{}}
    let {user} =props
    return(
        <div className="text-center p- shadow-2xl riunded-2xl shadow-gray-400">
            <h2 className="text-3xl text-red-400">{user.name}</h2>
            <p className="font-bold mt-5">{user.email}</p>
            <img src={user.image} alt="" className="block mx-auto rounded-3xl mt-5"></img>
        </div>
    )
}
export default User