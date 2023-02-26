import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex justifyContent={'flex-end'} gap={'40px'} paddingRight={'30px'} height={'60px'} alignItems={'center'} borderBottom={'1px solid black'} color={'white'} bgColor={'blackAlpha.800'}>
            <Text fontSize={'16px'}>About me</Text>
            <Text fontSize={'16px'}>|</Text>
            <Text fontSize={'16px'}>Projects</Text>
            <Text fontSize={'16px'}>|</Text>
            <Text fontSize={'16px'}>Contact</Text> 
    </Flex>
  )
}

export default Header