import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, View, Text, Button, FlatList } from 'react-native';
import WalletsService from '../../../services/wallets.service';

const styles = StyleSheet.create({
    componentRow : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    componentRowLabel : {
        flex : 2,
    },
    componentRowComponent : {
        flex : 3,
    },
    cardContainer : {
        flexDirection : 'row',
        padding : 10,
        margin : 10,
        borderRadius : 3,
        borderWidth : 1,
        borderColor : 'silver'
    },
    cardIcon : {
        width: 50,
        height: 50,
        marginRight : 10,
    },
    cardContents : {
        flex : 1,
    },
    cardLabel : {
        fontSize : 12,
    },
    cardData : {
        fontSize : 16,
        fontWeight : 'bold',
    },
    listContainer : {
        flex : 1,
    }
});

class Container extends React.PureComponent<> {
    static navigationOptions = {
        headerTitle : 'WALLET',
    };

    state = {
        fetching : false,
    }

    fetchWalletsHistory = async () => {
        const { fetchWalletsHistory } = this.props;
        this.setState({fetching : true});

        await fetchWalletsHistory();

        this.setState({fetching : false});

    }

    render() {
        const { user, walletHistory } = this.props;
        const { fetching } = this.state;

        return (
            <View style={{flex : 1}}>
                <View style={styles.cardContainer}>
                    <Image
                        style={styles.cardIcon}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <View style={styles.cardContents}>
                        <Text style={styles.cardLabel}>
                            asdasda
                        </Text>
                        <Text style={styles.cardData}>
                            asdasdazz
                        </Text>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={walletHistory}
                        refreshing={fetching}
                        onRefresh={this.fetchWalletsHistory}
                        renderItem={({item, index}) => <Text key={index}>{JSON.stringify(item)}</Text>}
                    />
                    <Text>asdas</Text>
                </View>
            </View>
        );
    }
}


const mapStateToProps = store => ({
    user : store.user,
    walletHistory : store.wallets.walletHistory,
});
const mapDispatchToProps = dispatch => ({
    fetchWalletsHistory : () => dispatch(WalletsService.fetchWalletsHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);