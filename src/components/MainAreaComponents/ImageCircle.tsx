import React from 'react'
import "./styles.css"
import Image from 'next/image'
import "@/styles/styles.css"

type ImageCircleProps = {
  temperature: string | undefined,
  evaluating: boolean,
  questionCount: number
}

export default function ImageCircle({
  temperature,
  evaluating,
  questionCount,
}: ImageCircleProps) {

  const img = temperature ? temperature === "hot" ? "fire" : temperature === "crown" ? "crown" : "cold" : "unknown"

  if(!questionCount) {
    return (
      <div
        id="imageCircle"
        className="fadeIn"
      >
        {img && (
          <Image src={`/images/sad.png`} alt="Logo" fill/>
        )}
      </div>
    )
  }

  console.log("am i being")

  return (
    <>
      {evaluating ? (
        <></>
      ) : (
        <>
          {temperature === "hot" && (
            <div
              id="imageCircle"
              className="fadeIn"
            >
              <div className='bgClass'>
                {new Array(50).fill(1).map((_, idx) => (
                  <div key={idx}>
                    <p className='hot'>Hot</p>
                  </div>
                ))}
              </div>
              {img && (
                <Image src={`/images/fire.png`} alt="Logo" fill/>
              )}
            </div>
          )}

          {temperature === "cold" && (
            <div
            id="imageCircle"
            className="fadeIn"
            >
              <div className='bgClass'>
                {new Array(50).fill(1).map((_, idx) => (
                  <div key={idx}>
                    <p className='cold'>Cold</p>
                  </div>
                ))}
              </div>
              {img && (
                <Image src={`/images/cold.png`} alt="Logo" fill/>
              )}
            </div>
          )}

        {temperature === "crown" && (
          <div
          id="imageCircle"
          className="fadeIn crown"
          >
            {img && (
              <Image src={`/images/crown.png`} alt="Logo" fill/>
            )}
          </div>
        )}

        {(temperature === "unknown" || !temperature) && (
          <div
            id="imageCircle"
            className="fadeIn"
          >
             <div className='bgClass'>
                {new Array(50).fill(1).map((_, idx) => (
                  <div key={idx}>
                    <p className='guess'>guess</p>
                  </div>
                ))}
              </div>
            {img && (
              <Image
                className='invert'
                src={`/images/unknown.png`}
                alt="Logo"
                width={300}
                height={300}
                // sizes="(max-width: 1024px) 300px, 300px"
              />
            )}
          </div>
          )}
        </>
      )}      
    </> 
  )
}
