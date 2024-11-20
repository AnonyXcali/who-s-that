import React from 'react'

type RevealedProps = {
  name: string,
}

export default function Revealed({
  name,
}: RevealedProps) {
  return (
    <div className='name-revealed'>
      <p>It was {name}!</p>
    </div>
  )
}
