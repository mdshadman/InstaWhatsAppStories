
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Thumbnail } from 'native-base';
import styles from '../Styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class StoriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { goForStories, storeyJson } = this.props
        return (

            <View style={styles.swiperView}>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContainer}
                >
                    {storeyJson.map((stories, index) => {
                        return (
                            <TouchableNativeFeedback key={index} onPress={goForStories}>
                                <View style={styles.scrollContent} >
                                    <View style={styles.scrollImageView}>
                                        <Thumbnail source={stories.image} />
                                    </View>
                                    <Text style={styles.scrollTextView} numberOfLines={1}>{stories.name}</Text>
                                </View>
                            </TouchableNativeFeedback>

                        );
                    })
                    }
                </ScrollView>

            </View>
        );
    }
}

export default StoriesComponent;