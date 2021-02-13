import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Div, Col, SideDrawer, Row, Anchor, Text } from "atomize";




const Cart = () => {

  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

  console.log(checkout)

  return (
    <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
      <Div
        d="flex" flexDir="column" m={{ b: "4rem" }}
      >
        {checkout.lineItems && checkout.lineItems.map(item => (
          <Row key={item.id}>
            <Col>
              <Div
                bgImg={item.variant.image.src}
                bgSize="cover"
                bgPos="center center"
                h="4rem"
                w="4rem"
              />
            </Col>
            <Col>
              <Text>{item.title}</Text>
              <Text>{item.variant.title}</Text>
              <Text>{item.quantity}</Text>
            </Col>
            <Col>
              <Text>{item.variant.price}</Text>
            </Col>
          </Row>
        ))}
        <Anchor href={checkout.webUrl} target="_blank">Checkout</Anchor>
      </Div>
    </SideDrawer>
  )
}

export default Cart
