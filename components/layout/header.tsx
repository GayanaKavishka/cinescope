import Link from "next/link";

export default function Header (){
    return (
       <header className="border-t h-16 bg-blue-200">
        
        <Link href="/profile">Profile</Link><br/>
        <Link href="/">Home</Link>
       </header>

    );
} 