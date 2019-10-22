
import React from 'react';
import { Image } from 'react-native'
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Footer,
    Input,
    View,

} from 'native-base';
import styles from '../Styles';
import instaData from '../StoriesData';
// import { Video } from 'expo';


const InstaCardView = (props) => {
    const { shouldPlay, isMuted, goToPlaySound } = props
    return (
        <View>
            {instaData.cards.map((instaCards, index) => {
                return (
                    <Card style={styles.cardStyle} key={index}>
                        <CardItem style={styles.profileView}>
                            <Left style={styles.flexFour}>
                                <View style={styles.cardavatarContent}>
                                    <View style={styles.cardavatarImageView}>
                                        <Thumbnail source={instaCards.avatar} style={styles.thumbImg} />
                                    </View>
                                </View>
                                <Body>
                                    <Text style={styles.fontWeightStyle}>{instaCards.name}</Text>
                                    {instaCards.subname &&
                                        <Text note style={styles.scrollTextView}>{instaCards.subname}</Text>
                                    }
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon name="more" type='Ionicons' style={styles.buttonIcons} />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            {instaCards.image &&
                                <Image
                                    source={instaCards.image}
                                    style={styles.cardImage}
                                />
                            }

                        </CardItem>
                        <CardItem style={styles.iconHeight}>
                            <Left>
                                {instaData.buttonIcons.map((icons, index) => {
                                    return (
                                        <Button transparent key={index}>
                                            <Icon name={icons.name} style={styles.buttonIcons} />
                                        </Button>
                                    )
                                })
                                }
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon name="ios-bookmark" style={styles.buttonIcons} />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.likeView}>
                            {instaCards.likes &&
                                <Text style={styles.fontWeightStyle}>{instaCards.likes} <Text >Likes</Text></Text>
                            }
                            {instaCards.views &&
                                <Text style={styles.fontWeightStyle}>{instaCards.views} <Text >views</Text></Text>
                            }
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    <Text style={styles.fontWeightStyle}>{instaCards.name}</Text> {instaCards.info}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.profileView}>
                            <Left style={styles.commentView} >
                                <View style={styles.cardavatarContent} key={index}>
                                    <View style={styles.cardavatarImageViewComment}>
                                        <Thumbnail source={instaCards.avatar} style={styles.commentThumb} />
                                    </View>
                                    <Input placeholder='Add a comment...' style={styles.comentInput} />
                                </View>
                                <View>
                                    <Text note style={styles.scrollTextView} numberOfLines={1}>{instaCards.days}</Text>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>
                );
            })
            }
        </View>



    )
}
export default InstaCardView;