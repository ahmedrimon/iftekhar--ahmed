import Link from "next/link";

export default function Navbar() {
     return <section>
          <nav className="absolute top-[10%] left-[93%] rotate-90 font-montreal text-md">
               <Link href="/work">WORK</Link>
               <Link href="/about" className="ml-4">ABOUT</Link>
          </nav>
     </section>
}