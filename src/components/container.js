import { useNode } from "@craftjs/core";
import { Box, Text,Container,  FormControl, FormLabel, } from "@chakra-ui/react"
import { ColorPicker } from "chakra-color-picker";

export const ContainerComponent = ({ background, width, padding, children}) => {
  const {
    connectors: { connect, drag }
  } = useNode();

  return (
    <Container 
        maxW={width}
        ref={(ref) => connect(drag(ref))}
        h='100%'
        bg={background}
        m='2'
        centerContent
    >
      {children}
    </Container >
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp }
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding
  }));

  return (
    // <Box>
    //   <FormControl as='fieldset'>
    //     <FormLabel >Background</FormLabel>
    //   </FormControl>
    //   <FormControl as="fieldset">
    //     <FormLabel>Padding</FormLabel>
    //   </FormControl>
    // </Box>
    <Box justifyContent='space-between' >
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
    </Box>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3
};

ContainerComponent.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings
  }
};
