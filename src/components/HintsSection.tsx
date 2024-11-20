import React, { useState, useEffect } from 'react'
import DialogComponent from './Dialog'
import { useQuestionContext } from '@/context/appContext'
import { useToast } from "@/hooks/use-toast"

type HintProp = {
  text: string,
  isUsed: boolean,
  isAvailable: boolean,
}

type GuessData = {
  hints: Array<HintProp>,
  name: string | undefined,
}

type HintsSectionProps = {
  hints: Array<HintProp> | undefined,
}

export default function HintsSection({
  hints,
}: HintsSectionProps) {
  const { toast } = useToast()

  const {
    questionCount,
    updateQuestionCount,
    currentGuessData,
    setCurrentGuessData,
    hintCost,
    setHintCost,
  } = useQuestionContext()
  

  return (
    <div>
      <ul
        className='hint-list'
      >
        {hints && hints.map((hint, idx) => (
          <li
            key={idx}
            className={`hint-li${hint.isUsed && ` hint-used`}${!hint.isAvailable ? ` hint-not-available` : ` hint-available`}`}
          >
           {questionCount < 2 ? (
            <DialogComponent
              triggerText="Hint!"
              onClickHandler={() => {}}
            >
              Not enough question tokens!
            </DialogComponent>
           ) : !hint.isAvailable ? (
            <DialogComponent
              triggerText="Hint!"
              onClickHandler={() => {}}
            >
              Hint not available! Use the previous hint first.
            </DialogComponent>
           ) : (
              <>
                <DialogComponent
                  triggerText="Hint!"
                  onClickHandler={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                    e.stopPropagation()
                    if(e.currentTarget.className === "hint-box") {
                      if(!hint.isUsed) {
                        const currentCount = questionCount - hintCost
                        updateQuestionCount(currentCount)
                        toast({
                          title: "Question Tokens Used!",
                          description: `${hintCost} used, ${currentCount} left!`,
                          className: "toasty"
                        })

                        setHintCost(hintCost + 1)

                        let curr = {
                          name: currentGuessData?.name,
                          hints: currentGuessData?.hints?.map((hint :HintProp, mapIdx) => {
                            if(idx === mapIdx) {
                              return {
                                ...hint,
                                isUsed: true,
                                isAvailable: true,
                              }
                            } else if(mapIdx > 0 && hints[mapIdx - 1].isAvailable) {
                              return {
                                ...hint,
                                isAvailable: true,
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
