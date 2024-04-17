import { useState, useEffect } from 'react';

const useGithubUser = (username = '') => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          if (response.status === 404) {
            setError('User not found');
          } else {
            setError(`Error fetching user data: ${response.statusText}`);
          }
        }
      } catch (error) {
        setError('OOPS! Something went wrong ');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { user, loading, error };
};

export default useGithubUser;