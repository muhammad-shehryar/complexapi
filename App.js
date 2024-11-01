import React from "react"
import ProductList from "./ProductsList"



function App(){

    const productsData = [
        {
          id: 1,
          name: "Smartphone",
          price: "$699",
          description: "A high-quality smartphone with excellent camera.",
          reviews: [
            { id: 101, user: "Ali", comment: "Amazing phone!", rating: 5 },
            { id: 102, user: "Sara", comment: "Good value for money.", rating: 4 },
          ],
        },
        {
          id: 2,
          name: "Laptop",
          price: "$999",
          description: "Powerful laptop for professional work.",
          reviews: [
            { id: 201, user: "Ahmed", comment: "Performance is top-notch!", rating: 5 },
            { id: 202, user: "Maria", comment: "Battery life could be better.", rating: 3 },
          ],
        },
      ];
      

    return(
        <div className="App">
            <h1>Product Catalogue</h1>
            <ProductList products={productsData}/>
        </div>
    )
}
