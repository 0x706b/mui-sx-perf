import { Box } from '@mui/material'
import React from 'react'
import Benchmark, { BenchmarkRef, BenchmarkType, BenchResultsType } from 'react-component-benchmark'
import styled from 'styled-components'

export const PlainDiv = () => {
  return (
    <>
      {new Array(1000).fill(undefined).map((_, i) => (
        <div key={`plain-div-${i}`}>Test</div>
      ))}
    </>
  )
}

const SCDivComponent_ = styled.div`
  color: #00ff00;
`

export const SCDivComponent = () => {
  return (
    <>
      {new Array(1000).fill(undefined).map((_, i) => (
        <SCDivComponent_ key={`sc-div-component-${i}`}>Test</SCDivComponent_>
      ))}
    </>
  )
}

export const SCDivCss = () => {
  return (
    <>
      {new Array(1000).fill(undefined).map((_, i) => (
        <div
          css={`
            color: #00ff00;
          `}
          key={`sc-div-component-${i}`}
        >
          Test
        </div>
      ))}
    </>
  )
}

export const SXBox = () => {
  return (
    <>
      {new Array(1000).fill(undefined).map((_, i) => (
        <Box
          sx={{
            color: '#00FF00',
          }}
        >
          Test
        </Box>
      ))}
    </>
  )
}

export const SCBoxCss = () => {
  return (
    <>
      {new Array(1000).fill(undefined).map((_, i) => (
        <Box
          css={`
            color: #00ff00;
          `}
          key={`sc-div-component-${i}`}
        >
          Test
        </Box>
      ))}
    </>
  )
}

export const Bench = () => {
  const ref = React.useRef<BenchmarkRef>(null)

  const handleStart = () => {
    ref.current?.start()
  }

  const handleComplete = (results: BenchResultsType) => {
    console.log(results)
  }

  return (
    <div>
      <button onClick={handleStart}>Run</button>
      <Benchmark
        component={SCBoxCss}
        onComplete={handleComplete}
        ref={ref}
        samples={50}
        timeout={10000}
        type={BenchmarkType.MOUNT}
      />
    </div>
  )
}
