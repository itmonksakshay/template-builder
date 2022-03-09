import * as React from "react";

import {useEditor,useNode,Element } from "@craftjs/core";
import { Box ,Text} from '@chakra-ui/react';
import { AiOutlineBorder } from "react-icons/ai";


const FullWidthContainer =({ background, size,children})=>{
    const {
        connectors: { connect, drag }
      } = useNode();

    <Box
    ref={(ref) => connect(drag(ref))}
            size={size}
            h='200px'
            bg={background}
          >
              <h2 style={{'color':'black'}}> Hello Column</h2>


            {children}
          </Box>


}


  export const SectionSettings = () => {
    const {
      background,
      padding,
      actions: { setProp }
    } = useNode((node) => ({
      background: node.data.props.background,
      padding: node.data.props.padding
    }));
  
    return (
      <Box justifyContent='space-between' >
        <Box display='flex'mb='3'pt='5' pl='5' pr='5' >
            <Text fontSize='13'>Column Settings</Text>
            <Box bg='white' w='100%' ml='8' color='black' border='1px' borderColor='#ECECEC' borderTopRadius='md' borderBottomRadius='md' />
        </Box>
      </Box>
    );
  };
  
const SectionDefaultProps = {
    background: "#ffffff",
    padding: 3
  };
  
  FullWidthContainer.craft = {
    props: SectionDefaultProps,
    related: {
      settings: SectionSettings
    }
  };


  export default FullWidthContainer;