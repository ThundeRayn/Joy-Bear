import React from 'react'

interface Back2Props {
  text?: string;
  href?: string;
}

const Back2: React.FC<Back2Props> = ({ text = 'Back', href = '/' }) => {
  return (
    <div className="mt-4">
      <a 
        href={href} 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
      >
        ← {text}
      </a>
    </div>
  )
}

export default Back2