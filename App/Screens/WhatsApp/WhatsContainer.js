import React, { Component } from 'react';
import WhatsView from './WhatsView';
class WhatsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    openDrawer = () => {
        this.props.navigation.toggleDrawer();
    }
    render() {
        return (
            <WhatsView
                openDrawer={this.openDrawer} />

        );
    }
}

export default WhatsContainer;