import { useEditor } from "@craftjs/core";
import {
    Box,
    Text
} from "@chakra-ui/react";
import { createElement } from "react";
import { Advanced, Settings } from "../../themes/icons";

export const SettingsPanel = ({selected}) => {
 

    return (
        <Box bg='white' pos='absolute' h='full' width='270px' left='72%'>
        <Box dispaly='flex' position='absolute' w='100%' >

            <Box display='flex' border='2px' borderColor='#ECECEC' bg='#F1F1F1' justifyContent='space-between'>

                <Settings />
                <Text>Settings</Text>
                <Advanced />
                <Text>Advanced</Text>
            </Box>
            
            {selected.settings && createElement(selected.settings)} 
        </Box>
    </Box>
    )
};

