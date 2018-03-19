import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Config from 'react-native-config'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    const { data } = this.props;
    const renderProductList = [];
    let i = 0;
    for (i; !!data && i < data.length; i++) {
      const { _id, name, price, image } = data[i];
      console.log(image)
      renderProductList.push(
        <Card key={_id}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: `${Config.API_URL}/${image}`}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>${price}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `${Config.API_URL}/${image}`}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-menu-outline" />
                <Text>View Detail</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-cart" />
                <Text>Add to Cart</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      )
    }
    return (
      <View>
        {renderProductList}
      </View>
    );
  }
}