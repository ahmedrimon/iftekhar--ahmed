import Link from "next/link";

export default function Navbar() {
     return <section>
          <nav className="absolute top-[4rem] rotate-90">
               <Link href="/work">WORK</Link>
               <Link href="/about" className="pt-5">ABOUT</Link>
          </nav>
     </section>
}