import { Divider, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Body from './components/Body/Body'
import Header from './components/Header/Header'

function App() {
  
  return <Flex flexDirection={'column'} bgColor={'blackAlpha.600'} gap={'220px'}>
    <Header />
    <Body />
  </Flex>
}

export default App
