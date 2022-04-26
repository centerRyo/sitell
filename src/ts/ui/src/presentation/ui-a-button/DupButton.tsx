import React from 'react'
import { CalendarWeekly } from '../../assets/CalendarWeekly'
import { CalendarMonthly } from '../../assets/CalendarMonthly'
import { DomButton } from './DomButton'
import registerClassNames from './dup-button-register.m.scss'
import loginClassNames from './dup-button-login.m.scss'
import TabClassNames from './dup-button-tab.m.scss'

type Props = {
  type: string
}

export const DupButtonTypes = {
  Register: 'register',
  Login: 'login',
  Weekly: 'weekly',
  Monthly: 'monthly',
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
      onClick: () => console.log('login'),
    },
    {
      type: DupButtonTypes.Weekly,
      text: '週間',
      icon: <CalendarWeekly />,
      className: TabClassNames,
      onClick: () => console.log('weekly'),
    },
    {
      type: DupButtonTypes.Monthly,
      text: '月間',
      icon: <CalendarMonthly />,
      className: TabClassNames,
      onClick: () => console.log('monthly'),
    },
  ]
  const target = targets.filter((t) => t.type === type)

  return (
    <DomButton
      text={target[0].text}
      icon={target[0]?.icon}
      classNames={target[0].className}
      onClick={target[0].onClick}
    />
  )
}
