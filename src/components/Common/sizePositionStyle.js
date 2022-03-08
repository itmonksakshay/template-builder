import { Box, Text } from "@chakra-ui/react";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';

const SizePositionStyle = () => {
    return (
        <Box mt='5'>
            <Text bg='#F1F1F1' mb='5' pl='5'>Size and Position</Text>
            <Box display='flex'mb='3' pl='5' pr='5'>
            <Text fontSize='13'>Width</Text>
            <Slider aria-label='slider-ex-1' defaultValue={30} ml='9'>
                <SliderTrack p={3} border='1px' color='white' borderColor='#ECECEC' borderTopRadius='md' borderBottomRadius='md'/>
                <SliderThumb bg='#0184FF' />

            </Slider>
            </Box>
            <Box display='flex' mb='3' pl='5' pr='5'>
            <Text fontSize='13'>Align</Text>
            <Slider aria-label='slider-ex-1' defaultValue={30} ml='10'>
                <SliderTrack/>
                <SliderThumb bg='#0184FF' />
            </Slider>
            </Box>
        </Box>
    )
}

export default SizePositionStyle;
