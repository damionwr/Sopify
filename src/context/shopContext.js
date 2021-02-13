import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()


const client = Client.buildClient({
  domain: `${process.env.REACT_APP_SHOPIFY_DOMAIN}`,
  storefrontAccessToken: `${process.env.REACT_APP_SHOPIFY_KEY}`
})


class ShopProvider extends Component {

  state = {
    products: [],
    product: {},
    checkout: { lineItems: [] },
    isCartOpen: false,

  }

  componentDidMount() {
    this.createCheckout()
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create()
    this.setState({
      checkout: checkout,
    });


  }



  addItemToCart = async (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
    this.setState({ checkout: checkout })
  }

  upDateCart = async (lineItemId, quantity) => {
    const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
    const checkoutId = await client.updateLineItems(this.state.checkout.id, lineItemsToUpdate)
    this.setState({ checkoutId: checkoutId })
  }
  removeItemFromCart = async (lineItemId) => {
    const checkoutId = await client.removeLineItems(this.state.checkout.id, [lineItemId])
    this.setState({ checkoutId: checkoutId })
  }
  fetchProducts = async () => {
    const products = await client.product.fetchAll()
    this.setState({ products: products })
    console.log(products)
  }
  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id)
    this.setState({ product: product })
  }

  closeCart = () => { this.setState({ isCartOpen: false }) }
  openCart = () => { this.setState({ isCartOpen: true }) }




  render() {
    return (
      <ShopContext.Provider value={{
        ...this.state,
        fetchProducts: this.fetchProducts,
        addItemToCart: this.addItemToCart,
        fetchProductWithId: this.fetchProductWithId,
        upDateCart: this.upDateCart,
        removeItemFromCart: this.removeItemFromCart,
        closeCart: this.closeCart,
        openCart: this.openCart,
      }}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.ShopConsumer
export { ShopConsumer, ShopContext }

export default ShopProvider
