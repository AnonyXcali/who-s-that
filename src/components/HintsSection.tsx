import React, { useState, useEffect } from 'react'
import DialogComponent from './Dialog'
import { useQuestionContext } from '@/context/appContext'
import { useToast } from "@/hooks/use-toast"

type HintsSectionProps = {
  hints: string[],
}

type HintProp = {
  text: string,
  isUsed: boolean,
}

export default function HintsSection({
  hints,
}: HintsSectionProps) {
  const { toast } = useToast()
  const [mappedHints, setHints] = useState<HintProp[]>([])

  useEffect(() => {
    const mapped = hints.map((hint) => ({
      text: hint,
      isUsed: false,
    }))

    setHints(mapped)
  }, [])
  

  const {
    questionCount,
    updateQuestionCount,
  } = useQuestionContext()

  return (
    <div>
      <ul
        className='hint-list'
      >
        {mappedHints && mappedHints.map((hint, idx) => (
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
                        setHints((item: HintProp[]) => {
                          item[idx].isUsed = true
                          return item
                        })
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
