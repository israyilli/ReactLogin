import React from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from "@chakra-ui/react";
import { uuidv4 } from 'uuid';


function MyTable({products, setProducts, isLogged, setIsLogged}) {
  // console.log()

  if(isLogged){
    return (
      <>
       <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>StockCount</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((element) => {
                // console.log(element.name);
                return (
                  <Tr key={uuidv4()}>
                    <Td>{element.id}</Td>
                    <Td>{element.name}</Td>
                    <Td>{element.price}</Td>
                    <Td>{element.stockCount}</Td>
                    <Td>
                      <Button colorScheme="cyan">Edit</Button>
                    </Td>
                    <Td>
                      <Button
                        onClick={() => {
                          console.log(products);
                          let filteredProducts = products.filter(
                            (x) => x.id !== products.id
                          );
                          axios.delete(
                            `https://65571cdcbd4bcef8b6120f2b.mockapi.io/products${products.id}`
                          );
                          setProducts(filteredProducts);
                        }}
                        colorScheme="red"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    );
  }
  
}

export default MyTable;
