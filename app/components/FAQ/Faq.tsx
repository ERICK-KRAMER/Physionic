import { ChevronRight } from "lucide-react"

type FaqProps = {
    title: string;
    children: React.ReactNode
}

const FAQCard = ({ title, children }: FaqProps) => {
    return (
        <div className="relative w-fit p-8 py-4">
            <ChevronRight className="text-sky-400 absolute top-3 left-1" />
            <h3 className="text-lg font-bold text-slate-800 w-[230px]">{title}</h3>
            {children}
        </div>
    )
}


export { FAQCard }