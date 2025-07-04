import { useAuth } from "@clerk/clerk-expo";
import { Slot, useRouter, useSegments } from "expo-router";
import React from "react";

export const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (isSignedIn && !inAuthGroup) {
      router.replace("/(auth)");
    } else if (!isSignedIn && inAuthGroup) {
      router.replace("/(public)/login");
    }
  }, [isSignedIn, isLoaded, segments]);

  return <Slot />;
};
