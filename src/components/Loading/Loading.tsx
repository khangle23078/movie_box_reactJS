import React from 'react'
import { PulseLoader } from 'react-spinners'
import './Loading.scss'

const Loading: React.FC = () => {
  return (
    <div className='wrapper'>
      <PulseLoader color='#36d7b7' />
    </div>
  )
}

export default Loading