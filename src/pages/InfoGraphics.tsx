import { Image, Stack } from "@chakra-ui/react"
import infoGprahic1 from "../assets/hypotheses.jpg"
import infoGprahic2 from "../assets/Measures of Center and Variability Statistics Math Infographic in Green Orange Graphic Style.png"
import infoGprahic3 from "../assets/Variance-vs-Standard-Deviation-info-1.jpg"
import ReturnButton from "../components/ReturnButton"

const InfoGraphics = () => {
  return (
    <Stack
      maxWidth="2xl"
      margin="auto"
      spacing={0}
      minHeight="calc(100vh - 80px)"
      justifyContent="center"
    >
      <ReturnButton />
      <Image src={infoGprahic1} />
      <Image src={infoGprahic2} />
      <Image src={infoGprahic3} />
    </Stack>
  )
}

export default InfoGraphics
