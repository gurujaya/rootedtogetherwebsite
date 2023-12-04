import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
  return (
      <nav>
        <Link href="/" className="button">Support Our Cause</Link>
        <Link href="/contact" className="button">Contact Us</Link>
        <Link href="/mission" className="button">Our Mission</Link>
        <Link href="/team" className="button">Our Team</Link>
        <Link href="/" className="button">Home</Link>
      </nav>
  )
}