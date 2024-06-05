import PostList from "@/components/Feed/List";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Feed() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text>Feed Page</Text>
        </View>

        <View style={styles.bodyContainer}>
          <PostList />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  headerContainer: {
    height: 48,
  },
  bodyContainer: {
    flex: 1,
  },
});
