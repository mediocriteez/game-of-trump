"use client"
import {useState, useEffect} from 'react'

import ContentContainer from './ContentContainer'
import ButtonsContainer from './ButtonsContainer'
import ComingSoon from './coming-soon.js/ComingSoon'
export default function Home() {

  return(<ComingSoon />)

  const [deviceType, setDeviceType] = useState('mobile')

  const [startAction, setStartAction] = useState(null)
  const [aAction, setAAction] = useState(null)
  const [bAction, setBAction] = useState(null)
  const [upAction, setUpAction] = useState(null)
  const [rightAction, setRightAction] = useState(null)
  const [downAction, setDownAction] = useState(null)
  const [leftAction, setLeftAction] = useState(null)

  return (
    <>
      <ContentContainer 
        setStartAction={setStartAction}
        setAAction={setAAction}
        setBAction={setBAction}
        setUpAction={setUpAction}
        setRightAction={setRightAction}
        setDownAction={setDownAction}
        setLeftAction={setLeftAction}
      />
      <ButtonsContainer 
        startAction={startAction}
        aAction={aAction}
        bAction={bAction}
        upAction={upAction}
        rightAction={rightAction}
        downAction={downAction}
        leftAction={leftAction}
      />
    </>
  );
}
