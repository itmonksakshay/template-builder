import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Box
} from '@chakra-ui/react';
import {Editor, Frame, Canvas,Selector,Element} from "@craftjs/core";
import { TextBlock } from './components/basicBlocks';
import { ContainerComponent } from './components';
import Header from './header';
import Sidebar from './sidebar';
import { LayoutIcon, ElementIcon, OtherIcon } from './themes/icons';

const LinkItems =[{title: [{icon: <LayoutIcon />, name:'Layout'} ,{icon: <ElementIcon />, name: 'Element'},{icon: <OtherIcon />,name: 'Other'}], 
layout: [{id: 'section', first : 'Section'},{id: 'rows', second: 'Rows'},{id: 'columns', third: 'Columns'},{id: 'background', 'fourth': 'Background'}],
element: [{id: 'text', first : 'Text'}, {id: 'media' , second: 'Media'},{id: 'form', third: 'Form'}], 
other:[{id: 'misc',first : 'Misc'}]}];

const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Box h='100vh' overflow="hidden" pos='relative'>
        <Header style={{ height: '64px',background: '#FFFFFF',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)' }} />
        <Editor resolver={{ ContainerComponent }}>
        <Box display="flex" w="full" h="full">
          <Box w={{ base: 'full', md:'80%' }} style={{width: '90%', backgroundColor: 'black' }}>
          
          <Frame>
            <Element
              canvas
              is={ContainerComponent}
              width="99%"
              background='white'
            >

            </Element>
          </Frame>
     
          </Box>
          <Sidebar LinkItems={LinkItems} style={{width: '10%', backgroundColor: '#155871' }} />      
        </Box>
        </Editor>
      </Box>
    </ChakraProvider>
  )
}





export default App;
