import Image from "next/image"

type ProductsCardPropd = {
    name: string;
    children: React.ReactNode;
}

const ProductCards = ({ name, children }: ProductsCardPropd) => {
    return (
        <div className="border border-sky-300 rounded-xl">
            <div className="bg-sky-300 w-[300px] rounded-t-lg p-4 flex flex-row justify-start items-center gap-6 pl-8">
                <div className="rounded-full flex items-center justify-center w-16 h-16 bg-white">
                    <Image
                        alt="Icon"
                        src="/icon.svg"
                        width={25}
                        height={25}
                        className=""
                    />
                </div>
                <p className="text-white">{name}</p>
            </div>
            <div className="text-gray-400 p-6 space-y-2 py-10">
                {children}
                <span className="text-sky-400 text-sm pl-3 py-2 cursor-pointer">Learn More</span>
            </div>
        </div>
    )
}

export { ProductCards };