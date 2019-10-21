import { Dimensions, StatusBar, StyleSheet, Platform } from 'react-native'

const deviceHeight = Dimensions.get("screen").height;
const deviceWidth = Dimensions.get('screen').width;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const IS_IOS = Platform.OS === 'ios';

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};
const entryBorderRadius = 8;
const Styles = {
    parentStory: {
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    scrollView: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    childStory: {
        width: 130,
        height: 130,
        borderRadius: 65,
        margin: 10,
        elevation: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white'
    },
    circleStory: {
        width: 128,
        height: 128,
        borderRadius: 65
    },
    cardImage: {
        maxHeight: 450,
        flex: 1,
    },
    videoImage: {
        maxHeight: 350,
        width: deviceWidth,
        height: 270

    },
    cenerViewScroll: { height: 100, justifyContent: 'center' },
    cardStyle: {
        borderRadius: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        width: deviceWidth
    },
    swiperView: {
        // flex: 3,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height:100,
        // alignSelf:'center'
    },
    scrollStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7
    },
    scrollContent: {
        justifyContent: 'space-evenly',
        width: 75,
        alignItems: 'center',
        alignSelf: 'center'
    },
    scrollImageView: { marginHorizontal: 5, borderColor: 'pink', borderWidth: 2, marginTop: 7, width: 65, height: 65, borderRadius: 35, justifyContent: 'center', alignItems: 'center' },
    scrollTextView: { fontSize: 10 },
    cardavatarContent: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardavatarImageView: {
        borderColor: 'pink',
        borderWidth: 2,
        marginTop: 7,
        width: 45,
        height: 45,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    starLeftViewImage: {
        width: 46,
        height: 46,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'pink',
        borderWidth: 2,

    },
    cardavatarImageViewComment: {
        borderColor: 'pink',
        borderWidth: 2,
        marginTop: 7,
        width: 35,
        height: 35,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileView: {
        paddingTop: 0,
        paddingBottom: 3,
        // paddingLeft: 7
    },
    buttonIcons: {
        color: 'black',
        fontSize: 28
    },
    fontWeightStyle: {
        fontWeight: 'bold'
    },
    thumbImg: { width: 35, height: 35, borderRadius: 18 },
    flexFour: { flex: 4 },
    commentView: { flexDirection: 'column', alignItems: 'flex-start' },
    commentThumb: { width: 25, height: 25, borderRadius: 13 },
    comentInput: { height: 35, fontSize: 15, paddingTop: 4 },
    iconHeight: { height: 45 },
    likeView: { height: 20 },
    soundPLay: {

        position: 'absolute',
        bottom: 10,
        right: 20,
    },
    volumeIcon: {
        color: 'black'
    },
    tabPosition: {
        marginTop: StatusBar.currentHeight,
    },
    starLeft: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    starLeftView: { alignSelf: 'flex-start' },
    textFontStyle: { fontSize: 16, fontWeight: 'bold' },
    textSize: { fontSize: 16 },
    buttonTextSize: { fontSize: 10, paddingLeft: 5, paddingRight: 5, fontWeight: '900' },
    rowWrap: { flexDirection: 'row', flexWrap: 'wrap' },
    leftImgView: { marginRight: 5, marginBottom: 4, marginTop: 8 },
    rightThumb: { width: 40, height: 40 },
    leftFlex: { flex: 3, justifyContent: 'flex-start' },
    selfAlignImg: { alignSelf: 'flex-start' },
    followCardStyle: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        elevation: 0,
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 0,
        marginBottom: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    buttonColor: {
        backgroundColor: '#3690f7',
        borderRadius: 5
    },
    storiesContainer: { paddingEnd: 7, paddingStart: 7, alignItems: 'center' },
    sliderWidth: {
        width: deviceWidth - 20
    },
    itemWidth: {
        width: deviceWidth - 58
    },
    sliderHeight: {
        height: deviceHeight - 58
    },
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        // flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        // borderTopLeftRadius: entryBorderRadius,
        // borderTopRightRadius: entryBorderRadius,
        borderColor: 'red',
        height: (deviceHeight -98),
        // marginBottom: 18
    },
    imageContainerEven: {
        backgroundColor: colors.black
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: colors.black
    },
    title: {
        color: colors.black,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        // paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }

}
export default Styles;