import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.linkedin.com/in/pritom-chowdhury-dip/" target="_blank" rel="noopener noreferrer">Pritom</a>
        <span className="ml-1">&copy; {new Date().getFullYear()} Pritom Dip.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.linkedin.com/in/pritom-chowdhury-dip/" target="_blank" rel="noopener noreferrer">React admin</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)