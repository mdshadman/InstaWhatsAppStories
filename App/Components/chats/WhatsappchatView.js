import React, { Component } from 'react';
import {
    Container, List, ListItem, Left, Right,
    Thumbnail, Body, Badge, Text
} from 'native-base';
import styles from './style';

const WhatsappChatListView = (props) => {
    const { goToChat } = props
    return (
        <Container>
            <List
                dataArray={props.chatUser}
                renderRow={(user, index) =>
                    <ListItem avatar onPress={goToChat} key={index} onPress={openModal}>
                        <Left>
                            <Thumbnail source={user.image} />
                        </Left>
                        <Body style={[styles.bodySection]}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text style={styles.userDesc} numberOfLines={1}>{user.description}</Text>
                        </Body>
                        <Right style={[styles.rightSection]}>
                            {/* <Text style={styles.lastchat}>{user.date}</Text>
                            {user.time && <Text style={[styles.lastchat, styles.time]}>{user.time}</Text>}
                            {user.past && <Text style={styles.lastchat}>{user.past}</Text>}
                            {user.unreadMsg && <Badge style={styles.badgeSection}><Text>{user.unreadMsg}</Text></Badge>} */}
                        </Right>
                    </ListItem>
                }
            />
        </Container>
    );
}

export default WhatsappChatListView;
