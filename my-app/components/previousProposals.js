import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function PreviousProposals() {
    return (
      <section>
        <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>QUESTION</Th>
        <Th>DESCRIPTION</Th>
        <Th>QUALIFICATION</Th>
        <Th>APPROVED BY</Th>
        <Th>RESULTS</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>All good?</Td>
        <Td>Asking about your wellbeing</Td>
        <Td>Sophmore track</Td>
        <Td>@Haardik</Td>
        <Td>Check Here</Td>
      </Tr>
      <Tr>
        <Td>Should there be a thirdweb track?</Td>
        <Td>Thirdweb is popular and maybe we should have a track about it</Td>
        <Td>Junior Track</Td>
        <Td>@Kacie</Td>
        <Td>Check Here</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
      </section>
    )
  }