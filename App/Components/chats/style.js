
import { Platform } from "react-native";


const styles = {


    userName: {
        fontWeight: 'bold',
        paddingBottom: 3
    },
    userDesc: {
        fontSize: 12
    },
    lastchat: {
        fontSize: 12,
    },
    bodySection: {
        alignSelf: 'flex-end'

    },
    rightSection: {
        paddingBottom: 0,

        paddingTop: Platform.OS === 'ios' ? 0 : 12
    },
    time: {
        color: '#f53d3d'
    },
    badgeSection: {
        backgroundColor: '#f53d3d',
        width: 25,
        height: 25,
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 3,
        alignSelf: 'flex-end',
    },

}

export default styles;
