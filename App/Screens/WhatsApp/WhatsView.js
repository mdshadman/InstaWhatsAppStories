import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WhatsAppChatConatiner from '../../Components/chats/WhatsappchatContainer';
import { Header, Left, Button, Body, Title, Icon, Right, Container } from 'native-base';
const WhatsView = (props) => {
    const { openDrawer } = props
    return (
        <Container>
            <Header>
                <Left>
                    <Button icon onPress={openDrawer} transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title> WhtsaApp Status</Title>
                </Body>
                {/* <Right /> */}
            </Header>
            <WhatsAppChatConatiner />

        </Container>


    )
}
export default WhatsView;