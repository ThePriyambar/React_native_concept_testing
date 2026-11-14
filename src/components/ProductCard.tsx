import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { Product } from '../types/product';

interface Props{
    item: Product;
    onPress: (item: Product) => void;
}
const ProductCard = ({item, onPress}: Props) => {
    return (
        <TouchableOpacity
         style = {styles.card}
         onPress = {() => onPress(item)}
         activeOpacity ={0.8}>
            <Image
                source={{uri: item.thumbnail}}
                style={styles.image}
                />

<View></View>
                <View style = {styles.details}>
                    <Text style = {styles.title} numberOfLines={2}>{item.title}</Text>
                    <Text style= { styles.category}> {item.category}</Text>
                    <Text style = {styles.price}>${item.price}</Text>
                    <Text>{item.rating}</Text>
                    <Text>{item.stock}</Text>
                    <Text>Reviews: {item.reviews?.length ?? 0}</Text>
                    <Text></Text>
                    <></>
                </View>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 12,
        marginHorizontal:12,
        marginVertical: 6,
        borderRadius: 10,
        elevation: 3
    },
    image: {
        width: 100,
        height: 110,
        resizeMode:'contain'
    },
    details: {
        flex:1,
        marginLeft: 12,
    },
    title:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    },
    category: {
        color:"#777777",
        marginTop: 5,
    },
    price: {
        color:'green',
        fontSize:16,
        fontWeight:'bold',
        marginVertical: 5,
    }

})