type ItemProps = {
    item: string
}

const ProductCardItem = ({ item }: ItemProps) => {
    return (
        <p className="text-sm">
            {item}
        </p>
    )
}

export { ProductCardItem };