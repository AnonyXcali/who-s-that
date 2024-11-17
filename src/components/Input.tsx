'use client'
import React, { useRef, useEffect } from 'react'
import DrawerComponent from './Drawer'
import { useQuestionContext } from '@/context/appContext'

export default function Input() {
  const ctaRef = useRef<HTMLButtonElement>(null)

  const {
    questionCount,
    userInput,
    handleInput,
    handleSubmit,
    temperature,
    currentGuessData,
  } = useQuestionContext()

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInput(event.target.value)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if(temperature === "cold") {
      ctaRef.current?.classList.add("shaker")

      timer = setTimeout(() => {
        ctaRef.current?.classList.remove("shaker")
      }, 1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [temperature])

  console.log("currentGuessData", currentGuessData)

  return (
    <div
      id="app-submitArea"
    >
      <textarea
        className="userInput"
        // type="text"
        value={userInput}
        placeholder='Is the person...?'
        onChange={handleText}
        rows={10}
        cols={10}
      />
      <button
        disabled={!userInput || questionCount === 0}
        className='userSubmitCTA'
        onClick={handleSubmit}
        ref={ctaRef}
      >
        Submit
      </button>
      <DrawerComponent>
          <div
            style={{
              height: "500px",
              padding: "20px",
              overflow: "scroll",
            }}
          >
            {currentGuessData && currentGuessData.hints.map((hint, idx) => (
              <p 
                key={idx}
                style={{
                  fontSize: "20px",
                }}
              >
                {hint}
              </p>
            ))}
          </div>
      </DrawerComponent>
    </div>
  )
}
