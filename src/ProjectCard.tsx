import { Box, Text } from "@chakra-ui/react"
import { Project } from "./models/Project"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard(props: ProjectCardProps){
  return(
    <Box>
      <Text>
        {props.project.name}
      </Text>
    </Box>
  )
}