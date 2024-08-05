import { Text, View } from "@/components/Themed";
import { Image, Pressable, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "@/lib/global/types";
import { Link } from "expo-router";
type ProductListItemProps = {
  product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
};
export default ProductListItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  price: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: "bold",
  },
});
