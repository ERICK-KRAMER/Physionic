import { ArrowRight } from "lucide-react";

export function Header() {
    return (
        <header className="flex flex-row justify-between items-center pt-3 container mx-auto text-white">
            <div className="flex flex-row gap-28">
                <h1 className="text-2xl font-extrabold">Physionic</h1>
                <nav className="flex flex-row gap-4">
                    <button>Home</button>
                    <button>Product</button>
                    <button>Pricing</button>
                    <button>Contact</button>
                </nav>
            </div>
            <button className="bg-sky-400 px-6 py-4 text-center flex flex-row gap-4 rounded-md text-white font-medium">Get Quote Now <ArrowRight /></button>
        </header>
    )
}