import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ShowGithubUser } from "../components/ShowGithubUser";

export default function Userpage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleInputUsername(event) {
    setUsername(event.target.value);
  }

  function handleSearch() {
    navigate(`/users/${username}`);
  }

  return (
    <div>
    <div className="bg-indigo-100 px-4 py-2 rounded-md shadow-sm">
      <label htmlFor="usernameInput" className="block text-sm font-medium text-gray-700">
        Search username:
      </label>
      <input
        type="text"
        value={username}
        id="usernameInput"
        onChange={handleInputUsername}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md border border-gray-300 px-3 py-2"
      />
      <button type="submit" onClick={handleSearch} className="mt-2 inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-100 font-medium rounded-md text-sm text-white">
        Search
      </button>
      <br />
     
    </div>
    <Outlet />
    </div>
  );
}
