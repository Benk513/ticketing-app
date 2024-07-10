import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      {/* links and logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className='icon' />
        </Link>

        <Link href="/ticketpage/new">
          <FontAwesomeIcon icon={faTicket} className='icon' />
        </Link>
      </div>



      {/* user email */}
      <div>
        <p className="text-default-text">benkuyutech65@gmail.com</p>
      </div>
    </nav>
  )
}

export default Nav