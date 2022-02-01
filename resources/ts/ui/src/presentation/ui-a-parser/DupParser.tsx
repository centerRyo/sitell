import React from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

type Props = {
  dirtyHtml: string
}

export const DupParser: React.FC<Props> = ({ dirtyHtml }) => {
  const Html = DOMPurify.sanitize(dirtyHtml, {
    USE_PROFILES: { html: true }
  })

  return <div>{ parse(Html) }</div>
}
