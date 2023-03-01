import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex position={'sticky'} top={0} zIndex={100} justifyContent={'flex-end'} gap={'40px'} paddingRight={'30px'} height={'60px'} alignItems={'center'} borderBottom={'1px solid black'} color={'white'} bgColor={'blackAlpha.800'}>
            <Text fontSize={'16px'}><a href='#about'>About me</a></Text>
            <Text fontSize={'16px'}>|</Text>
            <Text fontSize={'16px'}><a href='#techStack'>Tech Stack</a></Text>
            <Text fontSize={'16px'}>|</Text>
            <Text fontSize={'16px'}><a href='#projects'>Projects</a></Text>
            <Text fontSize={'16px'}>|</Text>
            <Text fontSize={'16px'}><a href='#contact'>Contact</a></Text> 
    </Flex>
  )
}

export default Header