// NextUIProvider Wrapper
import { NextUIProvider } from "@nextui-org/react";

// Notifications
import { Toaster } from "react-hot-toast";

// Stitches Imports
import { styled } from "@/styles/exports";
import { globalStyles } from "@/styles/globalStyles";

// Context
import { RecoilRoot } from "recoil";

// Font
import "@fontsource/inter/variable.css";

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <NextUIProvider>
      <RecoilRoot>
        <Toaster position="top-right" />
        <Container>
          <Component {...pageProps} />
        </Container>
      </RecoilRoot>
    </NextUIProvider>
  );
}

const Container = styled("div", {
  transform: "scale(0.8)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export default MyApp;
