import React, { Component } from 'react';
import InstaView from './InstaView';
class InstaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    openDrawer = () => {
        this.props.navigation.toggleDrawer();
    }
    render() {
        return (
            <InstaView
                openDrawer={this.openDrawer} />
        );
    }
}

export default InstaContainer;