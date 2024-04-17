import React from 'react'
import {GithubUserList} from '../components/GithubUserList'
import {Hero} from '../components/Hero'
import { Outlet } from 'react-router-dom'

export  function GithubListpage() {
  return (
    <div>
      
      <GithubUserList />

    </div>
  )
}
