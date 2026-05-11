import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";
import {
  pageWrapper,
  pageTitleClass,
  errorClass,
  loadingClass,
  emptyStateClass
} from "../styles/common";

function AdminProfile() {
  const { currentUser, logout } = useAuth((state) => state);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://atp-24eg112b66.onrender.com/admin/users`, { withCredentials: true });
      setUsers(res.data.payload || []);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleBlock = async (userId, isCurrentlyActive) => {
    try {
      if (isCurrentlyActive) {
        await axios.put(`https://atp-24eg112b66.onrender.com/admin/user/${userId}`, {}, { withCredentials: true });
      } else {
        await axios.put(`https://atp-24eg112b66.onrender.com/admin/user-unblock/${userId}`, {}, { withCredentials: true });
      }
      // Refresh user list
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update user status.");
    }
  };

  if (loading) return <div className={loadingClass}>Loading users...</div>;
  if (error) return <div className="text-center mt-10"><div className={errorClass}>{error}</div></div>;

  return (
  <div className={pageWrapper}>

    {/* PROFILE HEADER */}
    <div className="bg-white shadow-lg rounded-3xl p-6 mb-8 flex items-center justify-between border border-purple-100">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        {currentUser?.profileImageUrl ? (
          <img
            src={currentUser.profileImageUrl}
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-200 shadow-sm"
            alt="profile"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-semibold shadow-sm">
            {currentUser?.firstName?.charAt(0).toUpperCase() || "A"}
          </div>
        )}

        {/* Name */}
        <div>
          <p className="text-sm text-purple-400">
            Welcome back, Admin
          </p>
        </div>

      </div>

      {/* LOGOUT */}
      <button
        className="bg-purple-500 text-white text-sm px-5 py-2 rounded-full hover:bg-purple-600 transition-all duration-300 cursor-pointer shadow-md"
        onClick={onLogout}
      >
        Logout
      </button>

    </div>

    {/* TITLE */}
    <h1 className={`${pageTitleClass} text-purple-700`}>
      Admin Dashboard
    </h1>

    <p className="text-purple-400 mb-10">
      Manage registered users and authors.
    </p>

    {/* EMPTY STATE */}
    {users.length === 0 ? (
      <div className={`${emptyStateClass} bg-white rounded-3xl shadow-md text-purple-400`}>
        No users found.
      </div>
    ) : (

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            {/* TABLE HEADER */}
            <thead className="bg-purple-100 border-b border-purple-200 text-sm font-semibold text-purple-700">
              <tr>
                <th className="px-6 py-5">Name</th>
                <th className="px-6 py-5">Email</th>
                <th className="px-6 py-5">Role</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right w-32">Actions</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="divide-y divide-purple-100 text-sm text-gray-700">

              {users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-purple-50 transition-all duration-300"
                >

                  {/* NAME */}
                  <td className="px-6 py-4 font-medium flex items-center gap-3">

                    {user.profileImageUrl ? (
                      <img
                        src={user.profileImageUrl}
                        alt="avatar"
                        className="w-8 h-8 rounded-full border border-purple-200"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                        {user.firstName?.charAt(0) || "U"}
                      </div>
                    )}

                    <span>
                      {user.firstName} {user.lastName}
                    </span>

                  </td>

                  {/* EMAIL */}
                  <td className="px-6 py-4 text-purple-500 font-medium">
                    {user.email}
                  </td>

                  {/* ROLE */}
                  <td className="px-6 py-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold text-[10px] uppercase tracking-wider">
                      {user.role}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">

                    {user.isUserActive !== false ? (
                      <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full font-semibold text-[10px] uppercase tracking-wide">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-600 bg-red-100 px-3 py-1 rounded-full font-semibold text-[10px] uppercase tracking-wide">
                        Blocked
                      </span>
                    )}

                  </td>

                  {/* ACTION */}
                  <td className="px-6 py-4 text-right">

                    <button
                      onClick={() =>
                        handleToggleBlock(
                          user._id,
                          user.isUserActive !== false
                        )
                      }
                      className={
                        user.isUserActive !== false
                          ? "bg-red-400 text-white font-semibold flex-1 px-4 py-1.5 rounded-full hover:bg-red-500 transition-all duration-300 cursor-pointer text-xs w-full text-center"
                          : "bg-green-400 text-white font-semibold flex-1 px-4 py-1.5 rounded-full hover:bg-green-500 transition-all duration-300 cursor-pointer text-xs w-full text-center"
                      }
                    >
                      {user.isUserActive !== false
                        ? "Block"
                        : "Unblock"}
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>
    )}
  </div>
);
}

export default AdminProfile;


//admin@gmail.com
//Password123!
