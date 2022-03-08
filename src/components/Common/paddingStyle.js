import { Box, Text } from "@chakra-ui/react";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';


const PaddingStyle = () => {
    return (
        <Box >
          <Text bg='#F1F1F1' mt='5' mb='5' pl='5'>Padding</Text>
            <Box display='flex' mb='3' pl='5' pr='5'>
            <Text fontSize='13'>Top</Text>
            <Slider aria-label='slider-ex-1' defaultValue={30} ml='10'>
                <SliderTrack>
                </SliderTrack>
                <SliderThumb bg='#0184FF' />
            </Slider>
            </Box>
            <Box display='flex' mb='3' pl='5' pr='5'>
            <Text fontSize='13'>Bottom</Text>
            <Slider aria-label='slider-ex-1' defaultValue={30} ml='9'>
                <SliderTrack>
                </SliderTrack>
                <SliderThumb bg='#0184FF' />
            </Slider>
            </Box>
            <Box display='flex' mb='3' pl='5' pr='5'>
            <Text fontSize='13'>Left Right</Text>
            <Slider aria-label='slider-ex-1' defaultValue={30} ml='10'>
                <SliderTrack>
                </SliderTrack>
                <SliderThumb bg='#0184FF' />
            </Slider>
            </Box>
        </Box>
    )
}


export default PaddingStyle;