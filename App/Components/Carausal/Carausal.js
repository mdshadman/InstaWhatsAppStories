import React, { Component } from 'react';
import Carousel, { Pagination, ParallaxImage, SliderEntry } from 'react-native-snap-carousel';
import jsonData from '../StoriesData';
import styles from '../Styles';
import { Modal, Dimensions } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
const SLIDER_1_FIRST_ITEM = 1;
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;
class Carausal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
    goToNextSlide = (val) => {
        console.log(val);
        setTimeout(() => this._slider1Ref.snapToNext(), 250)
    }
    goToPrevSlide = (val) => {
        console.log(val);
        setTimeout(() => this._slider1Ref.snapToPrev(), 250)
    }
    closeModal = () => {
        this.setState({ modalVisible: false });
    }
    _renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Button onPress={this.goToNextSlide} transparent style={{ width: 120, height: '100%', position: 'absolute', right: 0 }}>
                </Button>
                <Button onPress={this.goToPrevSlide} transparent style={{ width: 120, height: '100%', position: 'absolute', left: 0 }}>
                </Button>
            </View >
        );
    }
    render() {
        return (
            <View>
                <Button onPress={this.props.closeModal} style={{ width: 50, zIndex: 999, height: 50, borderRadius: 25, justifyContent: 'center', position: 'absolute', top: 0, right: 0, backgroundColor: 'white' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>X</Text>
                </Button>
                <View style={styles.exampleContainer}>

                    <Carousel
                        ref={c => this._slider1Ref = c}
                        hasParallaxImages={true}
                        loop={true}
                        loopClonesPerSide={2}
                        autoplay={true}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        sliderWidth={sliderWidth}
                        sliderHeight={itemHeight}
                        itemWidth={sliderWidth}
                        data={jsonData.ENTRIES1}
                        renderItem={this._renderItem}
                        hasParallaxImages={true}
                        enableMomentum={true}
                    />
                    <Pagination
                        dotsLength={jsonData.ENTRIES1.length}
                        activeDotIndex={this.state.slider1ActiveSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor={'red'}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={'black'}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this._slider1Ref}
                        tappableDots={this._slider1Ref}
                    />
                </View>
            </View>
        );
    }
}

export default Carausal;