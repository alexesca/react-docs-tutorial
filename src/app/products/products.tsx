interface IProduct { title: string, isFruit: boolean, id: number }

export default function Products({products}: {products: IProduct[]}) {

    const listItems = products.map(product => <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}>
        {product.title}
    </li>)

    return <ul>{listItems}</ul>

}
