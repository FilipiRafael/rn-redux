import {
    View, Text, Image, Button
} from 'react-native';

import styles from './style';

import { products } from '../../constants';

const Shop = () => {
    return (
        <View style={styles.container}>
            {products?.map((product) => (
                <View key={product.id} style={styles.card}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                    />
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.brandName}>{product.brand}</Text>
                    <Text style={styles.price}>
                        {product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </Text>
                    <View>
                        <Button
                            title='Add to cart'
                            onPress={() => alert('Product add with success!')}
                        />
                        <Button
                            title='Remove from cart'
                            onPress={() => alert('Product was removed with success!')}
                        />
                    </View>
                </View>
            ))}
        </View>
    );
}

export default Shop;