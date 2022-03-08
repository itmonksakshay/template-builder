import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../assets/Logo.png";
import { ExitIcon, Icon, MobileIcon, PreviewIcon, RedoIcon, SaveIcon, SettingsBuilderIcon, UndoIcon } from "../themes/icons";
import { ContainerComponent } from "../components";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const[state,setState]=useState("20%")
  const mobileClicked = (e) => {
    alert("hello mobile")
  }
  const fullScreenClicked=()=>{
    alert("full screen clicked")
  }
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingLeft={31}
      paddingRight={24.17}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <img src={Logo} style={{ width: '61px', height: '38px' }} />
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={2}
        flexBasis="8%"
        justifyContent="space-evenly"
        mt={{ base: 4, md: 0 }}
      >
        <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0184FF', height: '30px', width: '78px', borderRadius: '5px' }}> <span style={{ paddingRight: '10px' }}><ExitIcon /></span> Exit</Text>
        <Text onClick={()=>fullScreenClicked()}><Icon /></Text>
        <Text onClick={(e) => mobileClicked(e)} className="mobile-view" > <MobileIcon /> </Text>
      </Stack>
      <Text style={{ color: 'black', flexBasis: '40%', textAlign: 'center', fontStyle: 'normal', fontWeight: '50', fontSize: '24px', lineHeight: '18px', color: '#0184FF', fontFamily: 'Roboto' }}>MY MEMBER FUNNEL BUILDER</Text>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', width: '91.97px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '13px', lineHeight: '87.19%', color: '#4F4F4F', borderRadius: '5px', border: '1px solid #F1F1F1' }}> <span style={{ paddingRight: '10px' }}><UndoIcon /></span> Undo</Button>
          <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', width: '91.97px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '13px', lineHeight: '87.19%', color: '#4F4F4F', borderRadius: '5px', border: '1px solid #F1F1F1' }}> <span style={{ paddingRight: '10px' }}><RedoIcon /></span> Redo</Button>
          <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', width: '91.97px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '13px', lineHeight: '87.19%', color: '#4F4F4F', borderRadius: '5px', border: '1px solid #F1F1F1' }}> <span style={{ paddingRight: '10px' }}><SettingsBuilderIcon /></span> Settings</Button>
          <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', width: '91.97px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '13px', lineHeight: '87.19%', color: '#4F4F4F', borderRadius: '5px', border: '1px solid #F1F1F1' }}> <span style={{ paddingRight: '10px' }}><PreviewIcon /></span> Preview</Button>
          <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', width: '91.97px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '13px', lineHeight: '87.19%', color: '#4F4F4F', borderRadius: '5px', border: '1px solid #F1F1F1' }}> <span style={{ paddingRight: '10px' }}><SaveIcon /></span> Save</Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;