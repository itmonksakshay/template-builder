import { useEditor } from "@craftjs/core";
import {
    Box,
    Text
} from "@chakra-ui/react";
import { createElement } from "react";
import { Advanced, Settings } from "../themes/icons";
import PaddingStyle from "./Common/paddingStyle";
import SizePositionStyle from "./Common/sizePositionStyle";

export const SettingsPanel = () => {
    const { actions, selected, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();

        console.log("selected")
        let selected;
        if (currentNodeId) {
          selected = {
            id: currentNodeId,
            name: state.nodes[currentNodeId].data.name,
            settings:
              state.nodes[currentNodeId].related &&
              state.nodes[currentNodeId].related.settings,
          };
        }
    
        return {
          selected,
          isEnabled: state.options.enabled,
        };
      });

    return (
        <Box dispaly='flex' position='absolute' w='100%' >

            <Box display='flex' border='2px' borderColor='#ECECEC' bg='#F1F1F1' justifyContent='space-between'>

                <Settings />
                <Text>Settings</Text>
                <Advanced />
                <Text>Advanced</Text>
            </Box>

            {/* <Box justifyContent='space-between' >
                <Box display='flex'mb='3'pt='5' pl='5' pr='5' >
                    <Text fontSize='13'>Big image</Text>
                    <Box bg='white' w='100%' ml='8' color='black' border='1px' borderColor='#ECECEC' borderTopRadius='md' borderBottomRadius='md' />
                </Box>
                <Box display='flex' mb='3' pl='5' pr='5'>
                    <Text fontSize='13'>Background Color</Text>
                    <Box bg=' #EFEFEF;' w='100%' ml='1' p={3} border='1px' borderColor='#ECECEC' borderTopRadius='md' borderBottomRadius='md' />
                </Box>
                <Box display='flex' mb='3' pl='5' pr='5'>
                    <Text fontSize='13'>Text Color</Text>
                    <Box bg='#FFCB0A' w='100%' ml='9' p={3} border='1px' borderColor='#ECECEC' borderTopRadius='md' borderBottomRadius='md' />
                </Box>
                <SizePositionStyle />
                <PaddingStyle />
            </Box> */}
            
    {selected.settings && createElement(selected.settings)} 

        </Box>
    )
};

