
import React, { Component } from 'react';
import InstaView from './CardView';
import { NavigationScreenProps, withNavigation } from 'react-navigation';


class InstaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldPlay: false,
            isMuted: true,
        };
    }

    goToPlaySound = () => {
        const { shouldPlay, isMuted } = this.state

        this.setState({
            shouldPlay: !shouldPlay,
            isMuted: !isMuted,
        });
    }
    render() {
        const imageUrl = require('../../../../../assets/chat4.jpg');
        const { shouldPlay, isMuted, } = this.state

        return (
            <InstaView
                shouldPlay={shouldPlay}
                isMuted={isMuted}
                goToPlaySound={this.goToPlaySound}
            />
        );
    }
}

export default withNavigation(InstaContainer);