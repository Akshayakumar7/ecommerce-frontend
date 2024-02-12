import React from 'react'
import Layout from './Layout'
import ecommerce from '../../../src/assets/images/ecommerce45.jpg'

const About = () => {
    return (
        <Layout title={"About us E-commerce App"}>
            <div className="about-us-container">
                <div className="about-us-content">
                    <h2>Welcome to Our Ecommerce World</h2>
                    <p>
                        At AwesomeShop, we are passionate about delivering high-quality products to our customers.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu elit fermentum vestibulum.
                        Proin ac ligula id mi feugiat varius. Vestibulum ac mauris eu velit vulputate efficitur vel sit amet
                        neque. Aliquam erat volutpat. Sed in metus eu felis euismod pretium.
                    </p>
                    <p>
                        Curabitur in ex et turpis convallis pellentesque. Integer semper felis vel lectus scelerisque, vitae
                        aliquet nulla hendrerit. Nulla facilisi. Nam at mauris ullamcorper, vestibulum ligula a, euismod risus.
                        Nullam efficitur quam vel justo fermentum, non facilisis nunc dapibus.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src={ecommerce} alt="About Us" />
                </div>
            </div>
        </Layout>
    )
}

export default About