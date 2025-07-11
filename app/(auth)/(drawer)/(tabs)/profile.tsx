import React from "react";
import { Text, View } from "react-native";
import { useUserContext } from "../../../../context/AppProviders";

const Profile = () => {
  const { user, userEmail } = useUserContext();
  return (
    <View>
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
    </View>
  );
};

export default Profile;
