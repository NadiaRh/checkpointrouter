import React from 'react';

const Product = ({match,data}) => {
    var Product= data.find(p => p.id == match.params.productId);
    var Products;
  
    if(Product)
      Products = <div>
        <h3> {Product.name} </h3>
        <p>{Product.description}</p>
        <hr/>
        <h4>{Product.status}</h4>  </div>;
    else
      Products = <h2> Sorry. Product doesnt exist </h2>;
  
    return (
      <div>
        <div>
           {Products}
        </div>
      </div>
    )    
  }
  export default Product;