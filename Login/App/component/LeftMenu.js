
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity, 
    RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import { AsyncLoadMore, AsyncLoadData } from '../Action/ActionMenu';
import Spinner from 'react-native-spinkit';
import { LinesLoader } from 'react-native-indicator';
import ImageLoad from 'react-native-image-placeholder';


class LeftMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 2,
            types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
            size: 100,
            color: "#000000",
            isVisible: true
        }
    }


    renderItems = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("DrawerClose");
            }}>
                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10, alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                    <Image style={{ width: 72, height: 72, borderRadius: 36 }}
                        loadingStyle={{ size: 'small', color: 'blue' }}
                        source={{ uri: item.IMAGE }} />

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, color: '#FFFFFF' }}>{item.NAME}</Text>
                        <Text style={{ color: '#FFF8E1', fontSize: 10 }}>{item.COMMENT}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }

    _loadMore = () => {
        if (this.props.isLoadMore) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <LinesLoader color='#FFF3E0' />
                </View>
            );
        } else {
            return null;
        }
    }


    render() {
        const { data, refresh, pages } = this.props;
        console.log('LeftMenu-----------', this.props);
        var type = this.state.types[this.state.index];
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF5722' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                colors={["#FAFAFA", "#FFCA28"]}
                                tintColor='#FAFAFA'
                                refreshing={refresh}
                                onRefresh={()=>{this.props.asyncLoadData()}}
                            />
                        }
                        onEndReachedThreshold={-0.2}
                        onEndReached={() => {
                            const toPages = pages + 1;
                            this.props.asyncLoadMore(toPages);
                        }}
                        style={{ marginTop: 15, marginBottom: 15 }}
                        data={data}
                        renderItem={this.renderItems}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                {this._loadMore()}
            </View>

        );
    }

    componentDidMount() {
        // const {LoadData} = this.props;
        console.log('componentDidMount');
        this.props.asyncLoadData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFEBEE',
    },

});
export default connect(
    state => {
        return {
            data: state.menu.data,
            refresh: state.menu.refresh,
            pages: state.menu.pages,
            isLoadMore: state.menu.isLoadMore
        }
    },
    dispatch => {
        return {
            asyncLoadData: () => dispatch(AsyncLoadData()),
            asyncLoadMore: (pages) => dispatch(AsyncLoadMore(pages))
        }
    }
)(LeftMenu);

