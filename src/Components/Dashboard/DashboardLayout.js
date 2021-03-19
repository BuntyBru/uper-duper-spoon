import React from "react";
import { Layout } from "../../Shared/StyledComps/Layout";
import FirstSection from "./FirstSection/FirstSection";

function DashboardLayout() {
  return (
    <Layout>
      <FirstSection />
      <FirstSection />
      <FirstSection />
    </Layout>
  );
}

export default DashboardLayout;
