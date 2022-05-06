import React from 'react'
import { DupFooter } from '../ui-o-footer/DupFooter'
import { DomHeader } from '../ui-o-header/DomHeader'
import { DomError } from './DomError'
import notFoundClassNames from './dup-error-not-found.m.scss'

export const DupErrorNotFound: React.FC = () => {
  return (
    <DomError
      header={{ render: () => <DomHeader /> }}
      errorCode='404'
      text='NOT FOUND'
      footer={{ render: () => <DupFooter /> }}
      classNames={notFoundClassNames}
    />
  )
}
