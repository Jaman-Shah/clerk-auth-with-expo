import { InitialLayout } from "@/layout/InitialLayout";
import React from "react";
import { AppProviders } from "../context/AppProviders";

export default function RootLayout() {
  return (
    <AppProviders>
      <InitialLayout />
    </AppProviders>
  );
}
