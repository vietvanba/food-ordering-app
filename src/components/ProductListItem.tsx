import { Text, View } from "@/components/Themed";
import { Image, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "@/lib/global/types";
type ProductListItemProps = {
  product: Product;
};
const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};
export default ProductListItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
