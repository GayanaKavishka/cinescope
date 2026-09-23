import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"

export default function BasicPage() {
    return (
        <main className="flex flex-col gap-12 items-center bg-white p-8 min-h-screen">
            <h1>Basics Page : shadcn/ui Buttons</h1>

            <button type="button">I&apos;m a native button</button>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex gap-1">
                <Button>Default</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                    <HomeIcon/>
                </Button>
            </div>

            <div className="flex gap-1">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
            </div>
            </div>
            
        </main>
    )
}