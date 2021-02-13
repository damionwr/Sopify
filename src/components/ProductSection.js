import React from 'react'
import { Div, Container, Row, Col, Text } from "atomize";
import { Link } from "react-router-dom";
import './Component.css'


const Section = ({ products }) => {






  if (!products) return <div>Loading...</div>

  return (
    <Container className="product-wrapper">
      <div className="product-text">
        <h3>New In</h3>
        <p>Lorem ipsum dolor sit, amet consectetur  </p>
      </div>
      <div className="product-list-wrapper">
        <ul className="product-list">
          <li>SOFA</li>
          <li>CHAIR</li>
          <li>COMFY</li>
          <li>LAMP</li>
          <li>ALL</li>
        </ul>
      </div>
      <Container m="1rem">
        <Row>
          {products.map(product => (

            <Col size="3" key={product.id}>
              <Link to={`/discription/${product.id}`}>
                <Div p="2rem">
                  <Div
                    h="14rem"
                    bgImg={product.images[0].src}
                    bgSize="cover"
                    bgPos="center"
                  />
                  <Text tag="h4" textAlign="center">
                    {product.title}
                  </Text>
                  <Text tag="p" textAlign="center" p={{ t: "1rem" }}>
                    {product.variants[0].price}
                  </Text>
                </Div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Section
