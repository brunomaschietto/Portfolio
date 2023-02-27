import { Divider, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  
  return <Flex flexDirection={'column'} bgColor={'blackAlpha.600'} gap={'220px'}>
    <Header />
    <Body />
    <Footer />
  </Flex>
}

export default App
