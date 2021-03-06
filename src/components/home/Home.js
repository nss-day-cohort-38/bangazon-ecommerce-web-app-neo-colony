import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import ProductCard from '../product/ProductCard'
import '../../styles/Home.css'

const Home = props => {
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        ApiManager.getAllNoToken("products?total=20").then(resp => {
            setLatestProducts(resp)
        })
    }, [])

    return(
        <div >
          <div className="homeLogo">
            <h1>
                BANGAZON
            </h1>
          </div>

            {latestProducts.length === 0 ? null : (
            <div>
              <section className="homepageProducts">
                {latestProducts.map(product => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      {...props}
                    />
                  );
                })}
              </section>
            </div>
            )}
        </div>
    )
}

export default Home