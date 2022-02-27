/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '@emotion/styled'
import { CommonLayout } from 'components/layouts/CommonLayout'
import { mq } from 'components/settings/MediaQuery'
import { useState } from 'react'
import { OpeningModal } from './OpeningModal'
import { StartButton } from './StartButton'

export const Top: React.VFC = () => {
  const [startFlag, setStartFlag] = useState(true)
  return (
    <>
      <CommonLayout>
        <STitleBand>
          <STitle>
            おとあてげーむ！
            <br />
            いきものどーれだ？
          </STitle>
          <StartButton startFlag={startFlag}>はじめる</StartButton>
        </STitleBand>
      </CommonLayout>
      <OpeningModal setStartFlag={setStartFlag} />
    </>
  )
}

const STitleBand = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 40px 0;
  width: 100%;
  text-align: center;
`

const STitle = styled.h1`
  font-size:40px;
  line-height:1.5;
  font-weight:bold;
  ${mq[0]}{
    font-size:30px;
  },
`
