import React from 'react'
import { DomButton } from './DomButton'
import registerClassNames from './dup-button-register.m.scss'
import loginClassNames from './dup-button-login.m.scss'

type Props = {
  type: string
}

export const DupButtonTypes = {
  Register: 'register',
  Login: 'login'
}

export const DupButton: React.FC<Props> = ({
  type
}) => {
  // TODO: 実装がダサい。要リファクタリング
  const targets = [
    {
      type: DupButtonTypes.Register,
      text: '新規登録',
      className: registerClassNames,
      onClick: () => console.log('register'),
    },
    {
      type: DupButtonTypes.Login,
      text: 'ログイン',
      className: loginClassNames,
      onClick: () =>  console.log('login'),
    }
  ]
  const target = targets.filter((t) => t.type === type)

  return (
    <DomButton
      text={target[0].text}
      classNames={target[0].className}
      onClick={target[0].onClick}
    />
  )
}
