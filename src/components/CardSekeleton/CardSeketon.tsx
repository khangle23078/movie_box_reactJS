import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSeketon: React.FC = () => {
  return (
    <>
      <Skeleton height={200} width={200} style={{ marginBottom: '4px' }} />
      <Skeleton count={5} />
    </>
  )
}

export default CardSeketon