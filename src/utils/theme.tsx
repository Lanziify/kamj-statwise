import { background, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/heebo'
import '@fontsource/poppins'

const theme = extendTheme({
    fonts: {
        heading: `'poppins', sans-serif`,
        body: `'poppins', sans-serif`,
    },
})

export default theme
