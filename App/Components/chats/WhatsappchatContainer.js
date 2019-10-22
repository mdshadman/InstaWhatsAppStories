
import React from 'react';
import WhatsappChatListView from './WhatsappchatView';
import localData from '../StoriesData';
import { withNavigation } from 'react-navigation';
import {
    Container, List, ListItem, Left, Right,
    Thumbnail, Body, Badge, Text, View
} from 'native-base';
import styles from './style';
import Stories from '../Stories';
import { Modal, Dimensions } from 'react-native';
import Carausal from '../Carausal/Carausal';

class WhatsAppChatConatiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    chatUser = localData.whatsAppchatUser;

    closeModal = () => {
        this.setState({ modalVisible: false });
    }

    openModal = () => {
        this.setState({ modalVisible: true });
    }

    render() {
        const { modalVisible } = this.state
        return (

            <Container>
                <List
                    dataArray={this.chatUser}
                    renderRow={(user, index) =>
                        <ListItem avatar key={index} onPress={this.openModal}>
                            <Left>
                                <Thumbnail source={user.image} />
                            </Left>
                            <Body style={[styles.bodySection]}>
                                <Text style={styles.userName}>{user.name}</Text>
                                <Text style={styles.userDesc} numberOfLines={1}>{user.description}</Text>
                            </Body>
                            <Right style={[styles.rightSection]}>

                            </Right>
                        </ListItem>
                    }
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View>
                        <Carausal closeModal={this.closeModal} />
                    </View>
                </Modal>
            </Container>
        );
    }
}


export default withNavigation(WhatsAppChatConatiner);