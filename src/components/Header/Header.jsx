import { Box, Flex, Text, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['about', 'experience', 'techStack', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Flex 
      position={'sticky'} 
      top={0} 
      zIndex={100} 
      justifyContent={'space-between'} 
      paddingX={'50px'} 
      height={'70px'} 
      alignItems={'center'} 
      borderBottom={'1px solid'}
      borderColor={isScrolled ? 'whiteAlpha.300' : 'transparent'}
      color={'white'} 
      bgColor={isScrolled ? 'blackAlpha.900' : 'blackAlpha.800'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      transition={'all 0.3s ease'}
    >
      <Box
        fontSize={'24px'}
        fontWeight={'bold'}
        bgGradient={'linear(to-r, cyan.400, purple.400)'}
        bgClip={'text'}
        cursor={'pointer'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        _hover={{ transform: 'scale(1.1)' }}
        transition={'transform 0.2s'}
      >
        BM
      </Box>

      {/* Navigation */}
      <Flex gap={'40px'} alignItems={'center'}>
        <Text 
          fontSize={'16px'}
          position={'relative'}
          cursor={'pointer'}
          color={activeSection === 'about' ? 'cyan.400' : 'white'}
          fontWeight={activeSection === 'about' ? 'bold' : 'normal'}
          _hover={{ 
            color: 'cyan.400',
            transform: 'translateY(-2px)'
          }}
          transition={'all 0.3s ease'}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: activeSection === 'about' ? '100%' : '0%',
            height: '2px',
            bgGradient: 'linear(to-r, cyan.400, purple.400)',
            transition: 'width 0.3s ease'
          }}
        >
          <a href='#about'>About me</a>
        </Text>

        <Text fontSize={'16px'} opacity={0.5}>|</Text>

        <Text 
          fontSize={'16px'}
          position={'relative'}
          cursor={'pointer'}
          color={activeSection === 'experience' ? 'cyan.400' : 'white'}
          fontWeight={activeSection === 'experience' ? 'bold' : 'normal'}
          _hover={{ 
            color: 'cyan.400',
            transform: 'translateY(-2px)'
          }}
          transition={'all 0.3s ease'}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: activeSection === 'experience' ? '100%' : '0%',
            height: '2px',
            bgGradient: 'linear(to-r, cyan.400, purple.400)',
            transition: 'width 0.3s ease'
          }}
        >
          <a href='#experience'>Experience</a>
        </Text>

        <Text fontSize={'16px'} opacity={0.5}>|</Text>

        <Text 
          fontSize={'16px'}
          position={'relative'}
          cursor={'pointer'}
          color={activeSection === 'techStack' ? 'cyan.400' : 'white'}
          fontWeight={activeSection === 'techStack' ? 'bold' : 'normal'}
          _hover={{ 
            color: 'cyan.400',
            transform: 'translateY(-2px)'
          }}
          transition={'all 0.3s ease'}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: activeSection === 'techStack' ? '100%' : '0%',
            height: '2px',
            bgGradient: 'linear(to-r, cyan.400, purple.400)',
            transition: 'width 0.3s ease'
          }}
        >
          <a href='#techStack'>Tech Stack</a>
        </Text>

        <Text fontSize={'16px'} opacity={0.5}>|</Text>

        <Text 
          fontSize={'16px'}
          position={'relative'}
          cursor={'pointer'}
          color={activeSection === 'projects' ? 'cyan.400' : 'white'}
          fontWeight={activeSection === 'projects' ? 'bold' : 'normal'}
          _hover={{ 
            color: 'cyan.400',
            transform: 'translateY(-2px)'
          }}
          transition={'all 0.3s ease'}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: activeSection === 'projects' ? '100%' : '0%',
            height: '2px',
            bgGradient: 'linear(to-r, cyan.400, purple.400)',
            transition: 'width 0.3s ease'
          }}
        >
          <a href='#projects'>Projects</a>
        </Text>

        <Text fontSize={'16px'} opacity={0.5}>|</Text>

        <Text 
          fontSize={'16px'}
          position={'relative'}
          cursor={'pointer'}
          color={activeSection === 'contact' ? 'cyan.400' : 'white'}
          fontWeight={activeSection === 'contact' ? 'bold' : 'normal'}
          _hover={{ 
            color: 'cyan.400',
            transform: 'translateY(-2px)'
          }}
          transition={'all 0.3s ease'}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            width: activeSection === 'contact' ? '100%' : '0%',
            height: '2px',
            bgGradient: 'linear(to-r, cyan.400, purple.400)',
            transition: 'width 0.3s ease'
          }}
        >
          <a href='#contact'>Contact</a>
        </Text>

        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
          color={'white'}
          _hover={{ 
            transform: 'rotate(180deg)',
            bg: 'whiteAlpha.200'
          }}
          transition={'all 0.5s ease'}
        />
      </Flex>
    </Flex>
  )
}

export default Header