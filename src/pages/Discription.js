import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import { Row, Col, Container, Image, Div, Button, Icon } from "atomize";



const Discription = () => {

  const [index, setIndex] = useState(0)



  const truncate = (str) => {
    return str.length > 100 ? str.substring(0, 400) + "..." : str;
  }

  let { id } = useParams();
  const { product, fetchProductWithId, addItemToCart } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id)
    return () => {

    }
  }, [fetchProductWithId, id])

  if (!product.title) return <div>Loading...</div>



  return (
    <Container >
      <Row justify="space-between" minW="70rem">
        <Col size="5"
          p={{ t: "3rem", r: "0", l: "0" }}
          d="flex"
          justify="flex-end"
          w="20rem"

        >
          <Div
            bg="gray500"
            rounded={{ tr: "circle", br: "circle" }}
            h="27rem"
            w="80rem"
            p={{ t: "4rem", b: "0" }}
            d="flex"
            align="center"
            justify="center"
            flexDir="column"



          >
            <Image
              src={product.images[0].src}
              w="25rem"
              h="25rem"

            />
          </Div>
        </Col>
        <Col size="5" p={{ t: "7rem" }}>
          <Div>
            <h2>{product.title}</h2>
            <p>{truncate(product.description)}</p>
          </Div>
          <p>{product.variants[index].price}</p>

          <Div
            d="flex"
            p="2rem"
          >
            <Image
              src={product.variants[0].image.src}
              w="7rem"
              h="7rem"
              onClick={() => setIndex(0)}
              border="1px solid"
              borderColor="black"
            />
            <Image
              src={product.variants[1].image.src}
              w="7rem"
              h="7rem"
              onClick={() => setIndex(1)}
              border="1px solid"
              borderColor="black"
            />
          </Div>
          <Div
            d="flex"
            m={{ l: "1rem" }}
          >
            <Button
              onClick={() => addItemToCart(product.variants[0].id, 1)}
              suffix={
                <Icon
                  name="LongRight"
                  size="16px"
                  color="white"
                  m={{ l: "1rem" }}
                />
              }
              bg="warning700"
              shadow="3"
              hoverShadow="5"
              m={{ r: "1rem" }}
            >
              Add to checkout
          </Button>


          </Div>
        </Col>
      </Row>
    </Container >
  )
}

export default Discription
