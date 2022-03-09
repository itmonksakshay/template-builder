import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Box
} from '@chakra-ui/react';
import {Editor, Frame,Element} from "@craftjs/core";
import { ContainerComponent } from './components';
import Viewport from './viewport';
import {RenderNode} from './viewport/RenderNode';




const App = () => {

  return (
    <ChakraProvider theme={theme}>
        <Editor resolver={{ ContainerComponent }}  enabled={false} onRender={RenderNode}>

          <Viewport>

            <Frame>
              <Element
                canvas
                is={ContainerComponent}
                width="99%"
                background='grey'
                custom={{ displayName: 'App' }}
              >
              </Element>
            </Frame> 
          </Viewport>
        </Editor>
    </ChakraProvider>
  )
}





export default App;
