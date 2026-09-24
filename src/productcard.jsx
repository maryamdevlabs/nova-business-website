function ProductCard({name, price, image , onAdd}) {
    return (
        <div className="product-card">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>${price}</p>
            <button onClick={onAdd}>Add to cart</button>
        </div>
    )
}
export default ProductCard 