'use client'
import React, { useEffect, memo } from 'react'
import axios from "axios"
import ImageCircle from './MainAreaComponents/ImageCircle'
import "./styles.css"
import { useQuestionContext } from '@/context/appContext'

type MainAreaProps = {
  data: GuessData,
}

type GuessData = {
  hints: Array<string>,
  name: string,
}

const MainArea = memo(({
  data,
}: MainAreaProps) => {

  const {
    setUserGuessStatus,
    userHasGuessed,
    questionCount,
    temperature,
    evaluating,
    setCurrentGuessData,
    updateQuestionCount,
    setTemperature,
  } = useQuestionContext()

  useEffect(() => {
    setCurrentGuessData(data)
  }, [data])
  
  const handleGameReset = async () => {
    const resetData: { hints: Array<string>, name: string } = await axios.get('http://192.168.1.127:3000/api/create')
    setCurrentGuessData(resetData)
    updateQuestionCount(20)
    setUserGuessStatus(false)
    setTemperature("")
  }
  
  return (
    <div
      id="app-mainArea"
    >

      {userHasGuessed && (
        <h1
          className='win-text'
        >
          You Guessed it!
        </h1>
      )}

      <ImageCircle
        temperature={temperature}
        evaluating={evaluating}
        questionCount={questionCount}
      />

      {userHasGuessed && (
        <button
          id="playAgain"
          onClick={handleGameReset}
        >
          Play Again?
        </button>
      )}
      
    </div>
  )
})

export default MainArea