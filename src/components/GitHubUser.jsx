import React from 'react';
import useGithubUser from './useGithubUser';

export const GitHubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  if (!user) return null; 

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md p-4">
    <img src={user.avatar_url} alt={user.login} className="w-32 h-32 object-cover mx-auto mb-4" />
    <div>
      <h3 className="text-lg font-medium text-gray-900 text-center">{user.name}</h3>
      <p className="text-sm text-gray-600 text-center">@{user.login}</p>
    </div>
  </div>
</div>
  );
};