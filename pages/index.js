import { styled } from "@/styles/exports";
import Colophon from "@/components/Colophon";
import Stegwindow from "@/components/Stegwindow";

export default function Home() {
  return (
    <Wrapper>
      <Colophon />
      <Stegwindow />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 485,
});

