import React from "react";
import { Layout } from "../../Shared/StyledComps/Layout";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

function DashboardLayout() {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <FirstSection />
    </Layout>
  );
}

export default DashboardLayout;
