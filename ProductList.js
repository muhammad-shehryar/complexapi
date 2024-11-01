const ProductsList=({products})=>{
    return(
        <div>
            {
                products.map((product)=>(
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    )
}