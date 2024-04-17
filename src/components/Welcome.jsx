import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
export const Welcome = ({name: initialName}) => {
  const [name, setName] = useState(initialName); 
  const inputRef = useRef();

  useEffect (() => {
    inputRef.current.focus();
  }, []);

  function handleNameChange(event){
    setName(event.target.value);
  }

  return (
    <>
      <h1>Hello, {name}!</h1>
      <form>
        <label
          htmlFor="nameInput"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="nameInput"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
            ref={inputRef}
            value={name}
            onChange={handleNameChange}
          />
          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
          >
            Username
          </span>
        </label>
      </form>
      <div>
        <br />
        <button>
          <Link
            to="/login"
            className="text-white bg-indigo-700 hover:bg-black rounded-md px-3 py-2 mt-4"
          >
            Go to login
          </Link>
        </button>
      </div>
    </>
  );
};

