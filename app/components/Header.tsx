"use client"

import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Header() {

    return (
        <header className="flex flex-row justify-between items-center pt-3 container mx-auto text-white max-md:p-6">

            <div className="flex flex-row gap-28">
                <h1 className="text-2xl font-extrabold">Physionic</h1>
                <nav className="flex flex-row gap-4 max-md:hidden">
                    <button>Home</button>
                    <button>Product</button>
                    <button>Pricing</button>
                    <button>Contact</button>
                </nav>
            </div>

            <button className="bg-sky-400 px-6 py-4 text-center flex flex-row gap-4 rounded-md text-white font-medium max-md:hidden">Get Quote Now <ArrowRight /></button>

            <Sheet>
                <SheetTrigger className="md:hidden">
                    <button >
                        <Menu size={30} />
                    </button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>

                            <ul className=" text-2xl space-y-5 mt-10">
                                <li>Home</li>
                                <li>Product</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>

                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </header>
    )
}