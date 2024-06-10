import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { IoChevronBack } from "react-icons/io5"

const ReturnButton = () => {
    const navigate = useNavigate()
  return (
    <Button
      variant="link"
      alignSelf="flex-start"
      leftIcon={<IoChevronBack />}
      mb={6}
      onClick={() => navigate(-1)}
    >
      Return
    </Button>
  )
}

export default ReturnButton
