import React, { useState, useEffect } from 'react'
import DialogComponent from './Dialog'
import { useQuestionContext } from '@/context/appContext'
import { useToast } from "@/hooks/use-toast"

type HintProp = {
  text: string,
  isUsed: boolean,
}

type GuessData = {
  hints: Array<HintProp>,
  name: string | undefined,
}

type HintsSectionProps = {
  hints: Array<HintProp>,
}

export default function HintsSection({
  hints,
}: HintsSectionProps) {
  const { toast } = useToast()

  const {
    questionCount,
    updateQuestionCount,
    mappedHints,
    setHints,
    currentGuessData,
    setCurrentGuessData,
  } = useQuestionContext()

  // useEffect(() => {
  //   const mapped = hints.map((hint) => ({
  //     text: hint,
  //     isUsed: false,
  //   }))

  //   setHints(mapped)
  // }, [])
  

  return (
    <div>
      <ul
        className='hint-list'
      >
        {hints && hints.map((hint, idx) => (
          <li
            key={idx}
            className={`hint-li${hint.isUsed && ` hint-used`}`}
          >
           {questionCount < 2 ? (
            <DialogComponent
              triggerText="Hint!"
              onClickHandler={() => {}}
            >
              Not enough question tokens!
            </DialogComponent>
           ) : (
              <>
                <DialogComponent
                  triggerText="Hint!"
                  onClickHandler={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                    e.stopPropagation()
                    if(e.currentTarget.className === "hint-box") {
                      if(!hint.isUsed) {
                        const currentCount = questionCount - 2
                        updateQuestionCount(currentCount)
                        toast({
                          title: "Question Tokens Used!",
                          description: `2 used, ${currentCount} left!`,
                          className: "toasty"
                        })
                        // setHints((item: HintProp[]) => {
                        //   item[idx].isUsed = true
                        //   return item
                        // })

                        let curr = {
                          name: currentGuessData?.name,
                          hints: currentGuessData?.hints?.map((hint, mapIdx) => {
                            if(idx === mapIdx) {
                              return {
                                ...hint,
                                isUsed: true,
                              }
                            }

                            return hint
                          })
                        }

                        setCurrentGuessData(curr)
                        
                        return
                      }
                    }
                  }}
              >
                  {hint.text}
                </DialogComponent>
            </>
           )}
          </li>
        ))}
      </ul>
    </div>
  )
}
