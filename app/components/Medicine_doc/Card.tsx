import { Star } from "lucide-react"
import Image from "next/image"

type CardProps = {
    comment: string
}

const CardComment = ({ comment }: CardProps) => {
    return (
        <div className="border border-gray-200 rounded-md p-5 space-y-3">
            <span className="flex flex-row">
                <Image
                    alt="star"
                    src="/star.svg"
                    width={20}
                    height={20}
                />
                <Image
                    alt="star"
                    src="/star.svg"
                    width={20}
                    height={20}
                />
                <Image
                    alt="star"
                    src="/star.svg"
                    width={20}
                    height={20}
                />
                <Image
                    alt="star"
                    src="/star.svg"
                    width={20}
                    height={20}
                />
                <Star className="text-orange-200" size={22} />
            </span>
            <p className="w-[250px] text-sm text-gray-400">
                {comment}
            </p>
            <Image
                src={'user.svg'}
                alt="user"
                width={40}
                height={40}
            />
        </div>
    )
}

export { CardComment }