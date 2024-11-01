const Product = ({product})=>{
    return(
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price:{product.price}</p>
            <p>Description:{product.description}</p>
            <h4>CUstomer Reviews</h4>
            <ul>
                {
                    product.reviews.map((review)=>(
                        <li key={review.id}>
                            <p>{review.user} : {review.comment} {review.rating}/5</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}