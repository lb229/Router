import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export  function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users`);
        if (!response.ok) {
          throw new Error(`Error 404: Not Found`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="flex flex-wrap">
  <div className="w-full md:w-1/2 px-4 mb-4">
    {/* Render list if users array is not empty */}
    {users.length > 0 && (
      <ul className="list-none p-0">
        {users.map((user) => (
          <li key={user.id} className="mb-2 hover:bg-indigo-50">
            <Link to={`/userslist/${user.login}`} className="text-indigo-600">
              {user.login}
            </Link>
          </li>
        ))}
      </ul>
    )}
    {/* Render error message if error state is not null */}
    {error && <div>Error: {error.message}</div>}
    {/* Render loading message if loading state is true */}
    {loading && <div>Loading...</div>}
  </div>

  <div className="w-full md:w-1/2 px-4">
    <Outlet />
  </div>
   
  </div>


  );
}
