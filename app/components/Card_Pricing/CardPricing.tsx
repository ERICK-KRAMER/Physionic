import { Check } from "lucide-react"

type CardProps = {
    type: string,
    title: string,
    price: number,
    className?: string
}

const CardPricing = ({ price, title, type, className }: CardProps) => {
    return (
        <div className={`text-black border border-sky-400 rounded-xl p-8 w-fit flex flex-col justify-center items-center gap-4 ${className}`}>
            <h2 className="text-3xl font-extrabold">{type}</h2>
            <p className="text-gray-400 w-[150px] text-center">{title}</p>
            <span className="text-sky-400 flex flex-row items-center gap-2">
                <p className="text-6xl">{price}</p>
                <span>
                    <p>$</p>
                    <p>Per Month</p>
                </span>
            </span>
            <ul className="space-y-3">
                <li className="flex flex-row items-center gap-3">
                    <div className=" bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <Check className="text-white" />
                    </div>
                    <p>Unlimited product updates
                    </p>
                </li>
                <li className="flex flex-row items-center gap-3">
                    <div className=" bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <Check className="text-white" />
                    </div>
                    <p>Unlimited product updates
                    </p>
                </li>
                <li className="flex flex-row items-center gap-3">
                    <div className=" bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <Check className="text-white" />
                    </div>
                    <p>Unlimited product updates
                    </p>
                </li>
                <li className="flex flex-row items-center gap-3">
                    <div className=" bg-green-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <Check className="text-white" />
                    </div>
                    <p>Unlimited product updates
                    </p>
                </li>
                <li className="flex flex-row items-center gap-3">
                    <div className=" bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                        <Check className="text-white" />
                    </div>
                    <p>
                        1GB  Cloud storage
                    </p>
                </li>
                <li className="flex flex-row items-center gap-3">
                    <div className=" bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                        <Check className="text-white" />
                    </div>
                    <p>
                        Email and community
                        support
                    </p>
                </li>
            </ul>
            <button className="bg-sky-400 font-bold px-10 py-4 rounded-lg text-white w-full mt-2">Try for free</button>
        </div>
    )
}

export { CardPricing }