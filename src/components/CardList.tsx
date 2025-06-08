import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

type CommonType = {
    id: string | number;
    title: string;
    price: number | string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

const CardList: React.FC<{ item: CommonType, onPress: () => void }> = ({ item, onPress }) => (
    <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.8}
    >
        <Image source={{ uri: item?.image }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
            <Text style={styles.price}>฿{Number(item?.price).toFixed(2)}</Text>
            {/* <Text style={styles.rating}>⭐ {item?.rating?.rate} ({item?.rating?.count})</Text> */}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 16,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 6,
    },
    price: {
        fontSize: 15,
        color: '#007BFF',
        marginBottom: 4,
    },
    rating: {
        fontSize: 13,
        color: 'gray',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
 export default CardList;