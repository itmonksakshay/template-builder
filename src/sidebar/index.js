import React, { useState, ReactNode, useMemo } from 'react';
import {
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Stack
} from '@chakra-ui/react';
import SideMenu from './menu';
import { ElementIcon, LayoutIcon, OtherIcon } from '../themes/icons';
import { SettingsPanel } from '../components/settingsPanel';

function Sidebar({ LinkItems }) {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("")
    const [dummy,setDummy]=useState()
    const [stylee, setStyle] = useState();


    const handleSideMenu = (e, id) => {
        setDummy(e.target.id)
        console.log("e.target.id", e.target.id, id)
        if (e.target.id === id) {
            console.log("inside if")
            if(e.target.id===dummy){
                setShow(!show)
            }else{
                setShow(true)
            }
            setValue(id)
            setStyle(e.target.id !== id && e.target.id?e.target.style.color= "white":e.target.style.color="yellow")
        }
    }
 

   
    return (
        <>
            <Box
                bg="#155871"
                width="10%"
                borderRight="1px"
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                minH="full">

                <NavItem>
                    <LayoutIcon />
                    <p style={{ marginRight: '63px' }}>Layout</p>
                </NavItem>
                {LinkItems.map((link) =>
                (
                    link.layout.map((layout) =>
                    (

                        <div style={{ marginLeft: '41px' }}>
                            <p id="section" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer' }}
                                onClick={(e) => {handleSideMenu(e, layout.id);setDummy(layout.id)}}
                            >{layout.first}</p>
                            <p id="rows" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer' }}
                                onClick={(e) => {handleSideMenu(e, layout.id);setDummy(layout.id)}}
                            >{layout.second}</p>
                            {/* <p id="columns" style={{fontStyle: 'normal',fontWeight: 'normal',fontSize: '15px',lineHeight: '18px',color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer'}}
                 onClick={(e) =>handleSideMenu(e, layout.id)}
                >{layout.third}</p>
                <p id="background" style={{fontStyle: 'normal',fontWeight: 'normal',fontSize: '15px',lineHeight: '18px',color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer'}}
                 onClick={(e) =>handleSideMenu(e, layout.id)}
                >{layout.fourth}</p> */}
                        </div>
                    ))
                ))}
                <NavItem>
                    <ElementIcon />
                    <p style={{ marginRight: '56px' }}> Element </p>
                </NavItem>
                {LinkItems.map((link) => (
                    link.element.map((layout) => (
                        <div style={{ marginLeft: '41px' }}>
                            <p id="text" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer' }}
                                onClick={(e) => handleSideMenu(e, layout.id)}
                            >{layout.first}</p>
                            <p id="media" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer' }}
                                onClick={(e) => handleSideMenu(e, layout.id)}
                            >{layout.second}</p>
                            <p id="form" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer' }}
                                onClick={(e) => handleSideMenu(e, layout.id)}
                            >{layout.third}</p>
                        </div>
                    ))
                ))}
                <NavItem>
                    <OtherIcon />
                    <p style={{ marginRight: '71px' }}>Other</p>
                </NavItem>
                {LinkItems.map((link) => (
                    link.other.map((layout) => (
                        <div style={{ marginLeft: '41px' }}>
                            <p id="misc" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '13px', cursor: 'pointer' }}
                                onClick={(e) => handleSideMenu(e, layout.id)}
                            >{layout.first}</p>
                        </div>
                    ))
                ))}.
            </Box>
            
            {show ? <SideMenu show={show} value={value} /> : null}
        </>
    );
}
const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Flex
            align="center"
            padding="13px 0px 13px 13px"
            bgColor='#0F4A61'
            justifyContent="space-between"
            role="group"
            marginBottom="5px"
            cursor="pointer"
            color="white"
            {...rest}>
            {icon && (
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};



export default Sidebar;