import React from "react";
import { useRepeatingReRender } from "../../lib/hooks/useRepeatingReRender";
import { Tattoo } from "../organisms/Tatoo/Tattoo";
import { StrokeWidthProvider } from "../../lib/hooks/useStrokeWidth";

const Container = ({ children }: { children: React.ReactChild }) => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }}
  >
    <StrokeWidthProvider value={3} >
      <svg viewBox="-60 -60 120 120" style={{ height: "100vmin" }}>
        {children}
      </svg>
    </StrokeWidthProvider>
  </div>
);

export const App = () => {
  useRepeatingReRender(2000);

  return (
    <Container>
      <Tattoo />
    </Container>
  );
};
