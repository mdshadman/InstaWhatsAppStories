import React, { Component } from 'react';
import { Modal, Dimensions } from 'react-native';
import { View } from 'native-base';
import jsonData from './StoriesData';
import StoriesComponent from '../Components/stories/stories';

import CardContainer from './cards/CardContainer';
import Carausal from './Carausal/Carausal';
const SLIDER_1_FIRST_ITEM = 1;

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
    goForStories = () => {
        this.setState({ modalVisible: true });
    }
    closeModal = () => {
        this.setState({ modalVisible: false });
    }

    render() {
        const { modalVisible } = this.state
        return (
            <View>
                <StoriesComponent storeyJson={jsonData.stories}
                    goForStories={this.goForStories}
                />
                <CardContainer />
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
            </View>


        );
    }
}

export default Stories;