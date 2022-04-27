import React from 'react'
import { DupLink, DupLinkTypes } from '../ui-a-link/DupLink'
import { DomFooter } from './DomFooter'

export const DupFooter: React.FC = () => {
  // TODO: 命名ダサい
  const linksLeft = [
    <DupLink type={DupLinkTypes.About} />,
    <DupLink type={DupLinkTypes.Company} />,
    <DupLink type={DupLinkTypes.Contact} />,
    <DupLink type={DupLinkTypes.FAQ} />,
  ]
  const linksRight = [
    <DupLink type={DupLinkTypes.TermsOfUse} />,
    <DupLink type={DupLinkTypes.PrivacyPolicy} />,
  ]
  return (
    <DomFooter
      linksLeft={linksLeft}
      linksRight={linksRight}
    />
  )
}
