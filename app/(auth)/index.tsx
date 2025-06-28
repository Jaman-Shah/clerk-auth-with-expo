import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";
import { useUserContext } from "../../context/AppProviders";

const Home = () => {
  const { signOut } = useAuth();
  const { user, userEmail } = useUserContext();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome Home!</Text>
      {user && (
        <>
          <Text>User ID: {user.id}</Text>
          <Text>Email: {userEmail}</Text>
          <Text>
            Signed in with:{" "}
            {user?.primaryPhoneNumber?.phoneNumber ||
              userEmail ||
              "Unknown method"}
          </Text>
        </>
      )}
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
