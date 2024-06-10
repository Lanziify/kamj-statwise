import { ztable } from "../../data/ztable"
import {
  Heading,
  Image,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

const Ztable = () => {
  return (
    <Stack maxWidth="2xl" margin="auto" padding={6}>
      <Heading>z-Table</Heading>
      <Image src="http://www.statisticslectures.com/images/nc1.gif" />
      <Text mb={4}>
        This table identifies the area of the body of the z-distribution.
      </Text>
      <Text mb={4}>Remember:</Text>
      <Text>p(Body) + p(Tail) = 1.00</Text>
      <Text>p(Tail) = 1 - p(Body)</Text>
      <Text mb={4}>p(Body) = 1 - p(Tail)</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Z</Th>
            <Th>Area in Body</Th>
            <Th>Z</Th>
            <Th>Area in Body</Th>
            <Th>Z</Th>
            <Th>Area in Body</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ztable.map((row, index) => (
            <Tr key={index}>
              <Td>{row.z1}</Td>
              <Td>{row.area1}</Td>
              <Td>{row.z2}</Td>
              <Td>{row.area2}</Td>
              <Td>{row.z3}</Td>
              <Td>{row.area3}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  )
}

export default Ztable
