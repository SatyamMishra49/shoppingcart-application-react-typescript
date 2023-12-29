import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <NavbarBs.Brand href="/">
          <img
            src={"./imgs/logo.png"}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="React Bootstrap logo" />
        </NavbarBs.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ position: "relative" }}
            variant="outline-default"
            className="rounded-pill btn-outline-default justify-center text-center"
          >
          <img src="/imgs/MarketIcon.png"></img>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}
