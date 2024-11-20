import React, { Suspense, memo } from 'react'
import Navbar from './Navbar'
import MainArea from './MainArea'
import Input from "./Input"
import "./styles.css"

type HintProp = {
  text: string,
  isUsed: boolean,
}

const AppContainer = memo(function AppContainer({
  response,
} : {
  response: {
    name: string,
    hints: Array<HintProp>,
  }
}) {
  
  return (
    <div
      id="appArea"
    >
       {/**Nav Bar*/}
       <Navbar />
       {/**This would show the Question Count */}

       {/**Main Area*/}
       <Suspense
        fallback={(<p>Loading</p>)}
       >
        <MainArea data={response} />
       </Suspense>
       {/**Show question mark in the beginning*/}
       {/**Cold on wrong guess*/}
       {/**Hot on right guess */}

       {/**Input Area*/}
       {/**Input area with submit button*/}
       <Input />
    </div>
  )
})


export default AppContainer