import { useContext } from 'react'
import { Flex } from '@chakra-ui/react'
import { CartContext } from '../../context'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { cartState } = useContext(CartContext)

  const totalItems = cartState.reduce((aux, item) => aux + item.quantity, 0)

  return (
    <Link to="/checkout">
      <Flex alignItems={"center"} justifyContent={"center"} p={2} borderRadius={"50%"} bg={"gray.200"} color={"gray.800"}>
        <CiShoppingCart size="1.5em" />
        <span>{totalItems}</span>
      </Flex>
    </Link>
  )
}