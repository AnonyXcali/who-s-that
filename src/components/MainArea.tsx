'use client'
import React, { useEffect, memo } from 'react'
import Link from 'next/link'
import Revealed from './Revealed'
import ImageCircle from './MainAreaComponents/ImageCircle'
import "./styles.css"
import { useQuestionContext } from '@/context/appContext'

type MainAreaProps = {
  data: GuessData,
}

type GuessData = {
  hints: Array<HintProp>,
  name: string,
}

type HintProp = {
  text: string,
  isUsed: boolean,
}



const MainArea = memo(({
  data,
}: MainAreaProps) => {

  const {
    userHasGuessed,
    questionCount,
    temperature,
    evaluating,
    setCurrentGuessData,
    currentGuessData,
  } = useQuestionContext()

  useEffect(() => {
    setCurrentGuessData(data)
    //TODO
  }, [data])
  
  
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

      {!questionCount && currentGuessData && (
        <Revealed name={currentGuessData?.name as string}/>
      )}

      {(userHasGuessed || !questionCount) && (
        <Link
          href="/categories"
          id="playAgain"
        >
          Play Again?
        </Link>
      )}
      
    </div>
  )
})

export default MainArea