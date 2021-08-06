//ChatScreen styles

import { responsiveHeight } from 'react-native-responsive-dimensions';

export const ChatScreenStyles = {

    mainContainer:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    flatList: {
        marginBottom: responsiveHeight(2),
        flex: 0.9,
    },
    messageFieldView: {
        flex: 0.1
    }
}