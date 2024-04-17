import React from 'react'
import { GitHubUser } from './GitHubUser'
import { useParams } from 'react-router-dom'

export const ShowGithubUser = () => {
  const {username} = useParams();
  return (
    <div><GitHubUser username={username} /></div>
  )
}
