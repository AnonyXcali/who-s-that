"use client"
import React from 'react'
import { useQuestionContext } from '@/context/appContext'


export default function Navbar() {
  const {
    questionCount,
  } = useQuestionContext()

  return (
    <div
      id="app-navbar"
    >
      <h1
        className='title-name'
      >
        zwenti!
      </h1>
      <h2 className='questions-left'>{questionCount}</h2>
    </div>
  )
}
