import React from 'react';
import { background, Box, SimpleGrid } from '@chakra-ui/react';
import { AddRowIcon, Manage2Icon, Col1, Col2, Col3, Col4, Col5, Col6, LeftSidebar, RightSidebar, Video, Image, Input, DropDown, TextArea, Checkbox, SMS, Survey, Billing, Signature, Button, Headline, SubHeadline, Bullets, Countdown, Product } from '../../themes/icons';
import { AiOutlineBorder } from "react-icons/ai";
import FullWidthContainer from '../../components/setionBlocks/fullWidthSection';
import {useEditor,Element } from "@craftjs/core";
import { IconButton } from '@chakra-ui/react'


const SideMenu = ({ show, value }) => {
    const { connectors } = useEditor();
    

    if (show) {
        
        return (
            <Box bg='white' pos='absolute' h='full' width='270px' right= '17%' top= '9%'>
                {value === "section" ?
                    <Box >
                     
                        <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                            <p>Section</p>
                        </div>

                        <SimpleGrid columns={2} spacing={5}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#EFF7FF", width: '99px', minHeight: "80px", padding: "0px 0px 8px 0px", overflow: "hidden", borderRadius: "6px" }}>
                                <div style={{ padding: "10px", position: "relative" }}>
                                <IconButton  icon={< AiOutlineBorder size='2.5em' color="#0184FF" />}  ref={(ref) => connectors.create(ref,<Element is={FullWidthContainer} size='xl' background='black' canvas /> )} />

                                    {/* < AiOutlineBorder size='2.5em' color="#0184FF" />
                                    <p style={{ position: 'absolute', height: '24px', right: '2px', display: "flex", width: '24px', alignItems: 'center', justifyContent: 'center', backgroundColor: "#EFF7FF", color: '#0184FF', bottom: '7px', borderRadius: '100%' }}>1</p> */}
                                </div>
                                <p style={{ backgroundColor: "#EFF7FF", color: '#0184FF', width: '100%', textAlign: "center", fontWeight: "500", fontStyle: "normal", fontSize: "13px", lineHeight: "15px" }}>Full Width</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#EFF7FF", width: '99px', minHeight: "80px", padding: "0px 0px 8px 0px", overflow: "hidden", borderRadius: "6px" }}>
                                <div style={{ padding: "10px", position: "relative" }}>
                                    < AiOutlineBorder size='2.5em' color="#0184FF" />
                                    <p style={{ position: 'absolute', height: '24px', right: '2px', display: "flex", width: '24px', alignItems: 'center', justifyContent: 'center', backgroundColor: "#EFF7FF", color: '#0184FF', bottom: '7px', borderRadius: '100%' }}>1</p>
                                </div>
                                <p style={{ backgroundColor: "#EFF7FF", color: '#0184FF', width: '100%', textAlign: "center", fontWeight: "500", fontStyle: "normal", fontSize: "13px", lineHeight: "15px" }}>Wide</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#EFF7FF", width: '99px', minHeight: "80px", padding: "0px 0px 8px 0px", overflow: "hidden", borderRadius: "6px" }}>
                                <div style={{ padding: "10px", position: "relative" }}>
                                    < AiOutlineBorder size='2.5em' color="#0184FF" />
                                    <p style={{ position: 'absolute', height: '24px', right: '2px', display: "flex", width: '24px', alignItems: 'center', justifyContent: 'center', backgroundColor: "#EFF7FF", color: '#0184FF', bottom: '7px', borderRadius: '100%' }}>1</p>
                                </div>
                                <p style={{ backgroundColor: "#EFF7FF", color: '#0184FF', width: '100%', textAlign: "center", fontWeight: "500", fontStyle: "normal", fontSize: "13px", lineHeight: "15px" }}>Medium</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#EFF7FF", width: '99px', minHeight: "80px", padding: "0px 0px 8px 0px", overflow: "hidden", borderRadius: "6px" }}>
                                <div style={{ padding: "10px", position: "relative" }}>
                                    < AiOutlineBorder size='2.5em' color="#0184FF" />
                                    <p style={{ position: 'absolute', height: '24px', right: '2px', display: "flex", width: '24px', alignItems: 'center', justifyContent: 'center', backgroundColor: "#EFF7FF", color: '#0184FF', bottom: '7px', borderRadius: '100%' }}>1</p>
                                </div>
                                <p style={{ backgroundColor: "#EFF7FF", color: '#0184FF', width: '100%', textAlign: "center", fontWeight: "500", fontStyle: "normal", fontSize: "13px", lineHeight: "15px" }}>Small</p>
                            </div>
                        </SimpleGrid>

                    </Box> : value === "rows" ?

                        <Box position='absolute' left="7%" width='92%'>
                            <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                <p>Rows</p>
                            </div>

                            <SimpleGrid columns={2} spacing={5}>
                                <Col1 />
                                <Col2 />
                                <Col3 />
                                <Col4 />
                                <Col5 />
                                <Col6 />
                                <LeftSidebar />
                                <RightSidebar />
                            </SimpleGrid>

                                </Box> : value === "text" ?

                                    <Box position='absolute' left="7%" width='92%'>
                                        <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                            <p>Text</p>
                                        </div>

                                        <SimpleGrid columns={2} spacing={5}>
                                            <Headline />
                                            <SubHeadline />
                                            <Bullets />

                                        </SimpleGrid>


                                    </Box> : value === "media" ?

                                        <Box position='absolute' left="7%" width='92%'>
                                            <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                                <p>Media</p>
                                            </div>

                                            <SimpleGrid columns={2} spacing={5}>
                                                <Image />
                                                <Video />

                                            </SimpleGrid>

                                        </Box> : value === "form" ?

                                            <Box position='absolute' left="7%" width='92%'>
                                                <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                                    <p>Form</p>
                                                </div>

                                                <SimpleGrid columns={2} spacing={5}>
                                                    <Input />
                                                    <DropDown />
                                                    <TextArea />
                                                    <Checkbox />
                                                    <SMS />
                                                    <Survey />
                                                    <Billing />
                                                    <Signature />
                                                    <Button />
                                                </SimpleGrid>



                                            </Box> : value === "misc" ?
                                                <Box position='absolute' left="7%" width='92%'>
                                                    <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                                        <p>Misc</p>
                                                    </div>

                                                    <SimpleGrid columns={2} spacing={5}>
                                                        <Countdown />
                                                        <Product />

                                                    </SimpleGrid>
                                                </Box> :

                                                <>
                                                  { null}
                                                </>
                }
            </Box>);
    }
    return null;


}

export default SideMenu;
