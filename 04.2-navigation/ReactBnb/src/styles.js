import { StyleSheet, Platform } from 'react-native';

export const starRating = StyleSheet.create({
    rating: {
        flexDirection: 'row'
    }
});

export const housingList = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    firstHousing: {
        marginTop: 50
    }  
});

export const housingListItem = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: 273,
        marginBottom: 20
    },
    picture: {
        borderRadius: 3,
        width: 273,
        height: 155,
        marginBottom: 10
    },
    details: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 7
    },
    description: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    price: {
        marginBottom: 3
    }
});

export const housingDetail = StyleSheet.create({
    housingDetail: {
        flex: 1
    },
    picture: {
        height: 240,
        marginBottom: 10
    },
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    backButton: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: Platform.select({ ios: 30, android: 10 }),
        left: 20
    },
    backButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    description: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 15
    },
    city: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#aaa'
    },
    hostContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#dfdfdf',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    hostPicture: {
        width: 64,
        height: 64,
        borderRadius: 32
    },
    spaceType: {
        fontWeight: 'bold',
        marginBottom: 3
    },
    hostDetail: {
        maxWidth: 250
    },
    hostName: {
        color: '#00bf5f'
    },
    ratingAndPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 25
    }    
});

export const navigator = StyleSheet.create({
    navigator: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        position: 'absolute',
        height: Platform.select({ android: 40, ios: 60 }),
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    footer: {
        height: 40,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    backButton: {
        width: 60,
        height: 40,
        justifyContent: 'center',
    },
    backButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    headerTitle: {
        color: 'black',
        fontWeight: 'bold',
    }
});