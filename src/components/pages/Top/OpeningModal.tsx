/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from '@emotion/react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
}

const buttonStyle = css`
  font-size: 30px;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
  max-width: 300px;
`
interface Props {
  setStartFlag: (value: boolean) => void
}

export const OpeningModal: React.VFC<Props> = ({ setStartFlag }) => {
  //音声再生終了後にイベントを発生させたいので、audio要素はstateで管理する
  const music = new Audio(`${process.env.PUBLIC_URL}/assets/voices/opening.mp3`)
  const bgm = new Audio(`${process.env.PUBLIC_URL}/assets/voices/bgm.mp3`)

  const [open, setOpen] = React.useState(true)

  const initVoice = () => {
    setOpen(false)
    music.play()
    // bgm.volume = 0.07;
    // bgm.loop = true;
  }

  React.useEffect(() => {
    music.addEventListener('ended', () => setStartFlag(false))
  }, [])

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            おとをだしてもいいですか？
          </Typography>
          <Button
            css={buttonStyle}
            variant="contained"
            onClick={() => initVoice()}
          >
            いいよ！
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
