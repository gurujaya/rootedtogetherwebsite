import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
  return (
        <nav className='float: right;'>
            <Link href="/">Home</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/mission">Our Mission</Link>
            <Link href="/contact">Contact Us</Link>
        </nav>
  )
}