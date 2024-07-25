import { background, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/heebo'

const theme = extendTheme({
    fonts: {
        heading: `'Heebo', sans-serif`,
        body: `'Heebo', sans-serif`,
    },
})

export default theme
