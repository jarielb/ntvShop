import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { StyleSheet, Keyboard, RefreshControl, FlatList } from "react-native";
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Form,
    Item,
    Input,
    Text,
    Button,
    Label,
    Toast
} from 'native-base';
import Header from '../Navigation/Header'
import Card from '../Card'

import { getProducts } from '../../actions'

class ProductScreen extends Component {
    static navigationOptions = {
        header: null
    };
    componentWillMount() {
        this.props.getProductsList()
    }
    render() {
        const { product_state } = this.props;
        const { message, products, refreshing} = product_state;
            return (
                <Container>
                    <Header title="Products"/>
                        <Content 
                            style={styles.content}
                            refreshControl={
                                <RefreshControl
                                refreshing={refreshing}
                                onRefresh={this.props.refreshProductsList}
                                />
                            }    
                        >
                        <FlatList
                            data={products.docs}
                            renderItem={
                                ({item}) => <Card data={item}></Card>
                            }
                            keyExtractor={(item, _id) => _id.toString()}
                        >
                        
                        </FlatList>
                        </Content>
                </Container>
            );
        }
    }


export function mapDispatchToProps(dispatch) {
    return {
        getProductsList: () => {
            dispatch(getProducts());
        },
        refreshProductsList: () => {
            dispatch(getProducts());
        },
        dispatch,
    }
}

const mapStateToProps = state => ({
    product_state: state.ProductReducer
});

const styles = StyleSheet.create({
    content: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
});


const Product = connect(mapStateToProps, mapDispatchToProps)(ProductScreen);

export default Product;
