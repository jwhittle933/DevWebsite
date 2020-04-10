import React, { useState } from 'react'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const LinkList = ({ links, text }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span
      className="link-list"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{text}</span>
      {isHovered && (
        <div className="link-list-items">
          {links.map((l, i) => (
            <a
              className=""
              href={`${l.href}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              style={{ display: 'block' }}
            >
              {l.text}
            </a>
          ))}
        </div>
      )}
    </span>
  )
}

export default LinkList
