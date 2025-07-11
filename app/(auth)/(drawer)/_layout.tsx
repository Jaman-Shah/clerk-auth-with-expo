import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Text } from "react-native";

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Hello</Text>
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )}
        label={"Profile"}
        onPress={() => {
          router.push("/(auth)/(drawer)/(tabs)/profile");
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        title: "My App", // Sets the title
        headerStyle: {
          backgroundColor: "#6200ee", // Purple header
        },
        headerTintColor: "#fff", // White text
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        drawerStyle: {
          backgroundColor: "#f5f5f5", // Light gray drawer background
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
};

export default DrawerLayout;
