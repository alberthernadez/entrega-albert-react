import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layouts/MainLayout";


const App = () => {
  return (
  <ChakraProvider>
    <MainLayout>
    <ItemListContainer greeting="bienvenidos"/>
    </MainLayout>
  </ChakraProvider>
  );
};

export default App; 