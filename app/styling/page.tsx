import Footer from "@/components/layout/footer"
import Header from "@/components/layout/main-nav"
import Link from "next/link"

export default function FlexOnePage(){
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 flex flex-col items-center justify-center bg-blue-200">
                <h1 className="text-sky-500 font-bolt text-3xl capitalize">
                    This is my first heading as h1
                </h1>

                <h2 className="text-primary font-bold text-lg mb-2">1.Primary Design Token</h2>
                <div className="flex gap-4 text-xs text-center mb-2">
                    <div className="size-40 border-primary border p-4 ">Token 01</div>
                    <div className="size-40 bg-primary p-4">Token 01</div>
                    <div className="size-40 outline-primary outline-4 p-4">Token 01</div>
                    <div className="relative size-40 border border-primary">
                        <div className="text-sm">position(relative/absolute)</div>
                        <div className="size-16 bg-purple-300 absolute bottom-2 right-5 z-10"></div>
                    </div>
                    
                </div>

                <h2 className="text-primary font-bold text-lg mb-2">2.Flex vs Grid</h2>

                <ol className="flex flex-col gap-2 w-1/2">
                <Link href="/styling/flex-one">
                    <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
                        Example 01: Flex 1
                    </li>
                </Link>

                <Link href="/styling/flex-box">
                    <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
                        Example 02: Flex box
                    </li>
                </Link>

                <Link href="/styling/grid">
                    <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
                        Example 03: Gride
                    </li>
                </Link>
                </ol>
            </main>
            <Footer/>
        </div>
    )
}