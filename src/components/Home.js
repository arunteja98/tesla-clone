import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="order online for "
        link="Touchless Delivery"
        bgImg="tesla-homepage.jpg"
        arrowDown={true}
        btnFirst="Customer Order"
        btnSecnd="Existing inventory"
      />
      <Section
        title="Model Y"
        description="order online for "
        link="Touchless Delivery"
        bgImg="Desktop-ModelY.jpg"
        arrowDown={false}
        btnFirst="Customer Order"
        btnSecnd="Existing inventory"
      />
      <Section
        title="Model 3"
        description="order online for "
        link="Touchless Delivery"
        bgImg="ModelX-Homepage-D.jpg"
        arrowDown={false}
        btnFirst="Customer Order"
        btnSecnd="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description="Low cost solar panels in America"
        link=""
        bgImg="solar_panels.jpg"
        arrowDown={false}
        btnFirst="Order Now"
        btnSecnd="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Low cost solar panels in America"
        link=""
        bgImg="solar-roof.jpg"
        arrowDown={false}
        btnFirst="Order Now"
        btnSecnd="Learn More"
      />
      <Section
        title="Accessories"
        description="Low cost solar panels in America"
        pic="accessories.jpg"
        arrowDown={false}
        btnFirst="Shop Now"
        btnSecnd=""
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  margin: 0;
  z-index: 10;
`;
