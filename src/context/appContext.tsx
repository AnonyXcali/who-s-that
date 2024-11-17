"use client"
import { useState, createContext, useContext, useEffect, } from "react"
import axios from "axios"
import React from "react"

type GuessData = {
  hints: Array<string>,
  name: string,
}

type SubmitPayload = {
  text: string,
  name: string,
}

type QuestionStore = {
  questionCount: number,
  userHasGuessed: boolean,
  userInput: string | undefined,
  hints: Array<string>,
  updateHints: React.Dispatch<React.SetStateAction<string[]>>,
  handleInput: (value: string | undefined) => void,
  handleSubmit: () => void,
  currentGuessData: GuessData | undefined,
  setCurrentGuessData: React.Dispatch<React.SetStateAction<GuessData | undefined>>
  temperature: string | undefined,
  evaluating: boolean,
  setUserGuessStatus: React.Dispatch<React.SetStateAction<boolean>>
  updateQuestionCount: React.Dispatch<React.SetStateAction<number>>
  setTemperature: React.Dispatch<React.SetStateAction<string | undefined>>
}

const QuestionContext = createContext<QuestionStore | undefined>(undefined)

const {
  Provider,
} = QuestionContext || {}

type AppContextProps = {
  children: React.ReactNode,
}

export function AppContextProvider({
  children,
}: AppContextProps): React.ReactNode {
  const [questionCount, updateQuestionCount] = useState<number>(20)
  const [userHasGuessed, setUserGuessStatus] = useState<boolean>(false)
  const [userInput, updateInput] = useState<string | undefined>("")
  const [hints, updateHints] = useState<Array<string>>([])
  const [currentGuessData, setCurrentGuessData] = useState<GuessData>()
  const [temperature, setTemperature] = useState<string | undefined>("")
  const [evaluating, setEvaluating] = useState<boolean>(false)

  const handleInput = (value: string | undefined) => {
    updateInput(value)
  }

  const handleSubmit = async () => {

    if(!userInput) {
      return
    }

    updateQuestionCount(questionCount - 1)
    setEvaluating(true)
    /**Call api */
    const {
      name,
    } = currentGuessData || {}
    const payload: SubmitPayload = {
      text: userInput as string,
      name: name as string,
    }
    const response = await axios.post(`${process.env.BACKEND_URL}/api/evaluate`, payload)

    setEvaluating(false)
    updateInput("")
    setTemperature(response.data.temperature || "")

    if(response.data.temperature && response.data.temperature === "crown") {
      setUserGuessStatus(true)
    }
  }

  useEffect(() => {
    if(questionCount === 0 && !userHasGuessed) {
      alert("You lost")
    }
  }, [questionCount, userHasGuessed])

  return (
    <Provider
      value={{
        questionCount,
        userHasGuessed,
        userInput,
        hints,
        updateHints,
        handleInput,
        handleSubmit,
        currentGuessData,
        setCurrentGuessData,
        temperature,
        evaluating,
        setUserGuessStatus,
        updateQuestionCount,
        setTemperature,
      }}
    >
      {children}
    </Provider>
  )
}

export const useQuestionContext = () => {
  const context = useContext(QuestionContext)

  if(context === undefined) {
    throw new Error('useCount must be used within the ContextExample')
  }

  return context
}
