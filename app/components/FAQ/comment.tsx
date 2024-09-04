type CommentProps = {
    subject: string
}

const Comment = ({ subject }: CommentProps) => {
    return (
        <p className="text-sm text-gray-400 w-[180px]">{subject}</p>
    )
}

export { Comment }