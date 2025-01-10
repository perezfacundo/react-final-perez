import cart from './assets/cart.svg'
import { Badge, HStack } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <HStack spacing='5px'>
      <img src={cart} alt='cart' width='25px' />
      <Badge colorScheme='green' variant='solid' borderRadius='10px' fontSize='15px' px={2}>
        0
      </Badge>
    </HStack>
  )
}

export default CartWidget