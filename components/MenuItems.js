import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MenuItems() {
  return (
    <View style={menuStyles.container}>
      <ScrollView
        horizontal={false}
        indicatorStyle={"white"}
        style={menuStyles.innerContainer}
      >
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
}

const menuItemsToDisplay = [
  "Humus \n Moutabal \n Falafel \n  Marinated \n Tofu \n Beans \n Beans \n Beans \n Pocket \n  Couscous \n Humus \n  Mnaaas \n Lentil \n Falafel \n  Humus \n Panna Cotta \n Humus \n Moutabal \n Humus \n Grrek \n Humus \n Boklava \n  Couscous \n Humus \n Salsa \n Humus \n Salad \n Beef \n Fries",
];

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    padding: 40,
    backgroundColor: "green",
  },
  headerText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: "white",
  },
  itemText: {
    color: "yellow",
    fontSize: 30,
  },
});
