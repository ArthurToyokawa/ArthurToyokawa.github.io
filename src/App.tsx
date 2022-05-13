import {
  Box, ChakraProvider, Flex, Image, Text
} from "@chakra-ui/react"
import * as React from "react"
import Theme from './theme'
import { getColor } from "@chakra-ui/theme-tools"
import { theme as defaultTheme } from "@chakra-ui/theme"
import { Project } from "./models/Project"
import { ProjectCard } from "./ProjectCard"

export const App = () => {

  const tertiaryColor = getColor(Theme, 'brand.teriary', 'gray')

  const projects: Project[] = [
    {name: 'nome1', description: 'desc1'},
    {name: 'nome2', description: 'desc2'},
    {name: 'nome3', description: 'desc3'},
    {name: 'nome4', description: 'desc4'},
    {name: 'nome5', description: 'desc5'},
    {name: 'nome6', description: 'desc6'},
    {name: 'nome7', description: 'desc7'},
  ]

  return(
  <ChakraProvider theme={Theme}>
    <Box h='100%' w='100%' minH='100vh' minW='100vw' bgColor='brand.secondary' textAlign="center" fontSize="xl">
      <Flex bgColor='brand.primary' justifyContent='center'>
        <Box borderRight='1px' borderColor={tertiaryColor} padding='4px 6px'>
          <Text color='brand.tertiary' >icon</Text>
        </Box>
        <Box borderRight='1px solid' borderColor={tertiaryColor} padding='4px 6px'>
          <Text color='brand.tertiary'>icon</Text>
        </Box>
        <Box padding='4px 6px'>
          <Text color='brand.tertiary'>icon</Text>
        </Box>
      </Flex>
      <Flex h='100%vh' marginTop='5%' gap='20px' paddingX='30%' flexDirection='column' justifyContent='center'>
        <Box  margin='auto'>
          <Image  
          boxSize='150px'
          borderRadius='full' 
          src='https://media-exp1.licdn.com/dms/image/C4D03AQEtz39m7Y5q4g/profile-displayphoto-shrink_800_800/0/1628794371711?e=1656547200&v=beta&t=18nKuN1xlGD7F8ARx-k3aibyjQpzMYZUjjxBBOrKH3w'
        />
        </Box>
        <Box>
          <Text color='brand.tertiary'> Arthur Toyokawa </Text>
        </Box>
        <Box>
          <Text color='brand.tertiary'> Cursando Engenharia de software. Experiência de dois anos em desenvolvimento de software, Java, Spring e desenvolvimento web React JS ou angular. Inglês Avançado C1. </Text>
        </Box>
        
      </Flex>
      <Flex>
        {projects.map(p => (
          <ProjectCard project={p}/>
        ))}
      </Flex>
    </Box>
  </ChakraProvider>
)
}
