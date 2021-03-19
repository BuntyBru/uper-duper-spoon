import React from "react";
import { Layout } from "../../Shared/StyledComps/Layout";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";

function DashboardLayout() {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  );
}

export default DashboardLayout;
