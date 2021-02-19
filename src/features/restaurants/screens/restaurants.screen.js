import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar />
      </View>
      <View stye={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
