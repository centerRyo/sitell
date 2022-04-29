import React from 'react'
import { DomLink } from './DomLink'
import footerClassNames from './dup-link-footer.m.scss'
import topClassNames from './dup-link-top.m.scss'

type Props = {
  type: string,
  href?: string,
}

export const DupLinkTypes = {
  About: 'about',
  Company: 'company',
  Contact: 'contact',
  FAQ: 'faq',
  TermsOfUse: 'terms-of-use',
  PrivacyPolicy: 'privacy-policy',
  More: 'more',
}

export const DupLink: React.FC<Props> = ({
  type,
  href,
}) => {
  // TODO: 実装がダサい。要リファクタリング
  const targets = [
    {
      type: DupLinkTypes.About,
      text: 'sitellについて',
      href: '/about',
      classNames: footerClassNames,
    },
    {
      type: DupLinkTypes.Company,
      text: '運営会社',
      href: 'https://xtimmune.com',
      classNames: footerClassNames,
    },
    {
      type: DupLinkTypes.Contact,
      text: 'お問い合わせ',
      href: '/contact',
      classNames: footerClassNames,
    },
    {
      type: DupLinkTypes.FAQ,
      text: 'よくある質問',
      href: '/faq',
      classNames: footerClassNames,
    },
    {
      type: DupLinkTypes.TermsOfUse,
      text: '利用規約',
      href: '/terms',
      classNames: footerClassNames,
    },
    {
      type: DupLinkTypes.PrivacyPolicy,
      text: 'プライバシーポリシー',
      href: '/privacy',
      classNames: footerClassNames,
    },
    {
      type: DupLinkTypes.More,
      text: 'すべて見る',
      href: href,
      classNames: topClassNames,
    },
  ]
  const target = targets.filter(t => t.type === type)

  return (
    <DomLink
      text={target[0].text}
      href={target[0].href}
      classNames={target[0].classNames}
    />
  )
}
