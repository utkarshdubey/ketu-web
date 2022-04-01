import { styled } from "@/styles/exports";
import { COLORS, WEIGHTS } from "@/styles/constants";

// Context
import { statusState } from "@/utils/atoms";
import { useRecoilValue } from "recoil";

const TextArea = (props) => {
  const status = useRecoilValue(statusState);

  return (
    <Container>
      <Heading style={{ "--color": !status ? COLORS.gray[600] : "#fff"}}>Secret Message</Heading>
      <Textarea required placeholder="A secret message not supposed to be read by everyone" onChange={e => props.handleChange(e.target.value)} disabled={!status} value={props.value}/>
    </Container>
  );
};

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Heading = styled("h1", {
  fontSize: 20,
  fontWeight: WEIGHTS.semibold,
  color: "var(--color)",
})

const Textarea = styled("textarea", {
  fontFamily: "monospace",
  backgroundColor: COLORS.gray[700],
  borderRadius: 12,
  border: "none",
  padding: "20px",
  height: 150,
  resize: "none"
})


export default TextArea;
