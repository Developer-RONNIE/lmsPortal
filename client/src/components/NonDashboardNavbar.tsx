import Link from 'next/link'
import React from 'react'

const NonDashboardNavbar = () => {
  return (
    <nav className='nondashboard-navbar'>
        <div className='nondashboard-navbar__container'>
            <Link href="/" className='nondashboard-navbar__brand'>
                <h1>EduScore</h1>
            </Link>
        </div>
    </nav>
  )
}

export default NonDashboardNavbar