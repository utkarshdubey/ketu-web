import { styled } from "@/styles/exports";
import { COLORS, WEIGHTS } from "@/styles/constants";

const Colophon = () => {
  return (
    <Text>
      <Title>Ketu</Title>
      <Subtitle>
        Ketu is a steganography tool built in Python and Next for AISSCE 2021-2022 as part of the CS and IP curriculum. This project was built by <a href="https://utkarsh.co" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>Utkarsh Dubey</a>, Amogh Sabarwal, Ashutosh Singh, Manas Acharya, and Shabd Dubey.
      </Subtitle>
    </Text>
  );
};

const Text = styled("div", {
  marginBottom: "25px",
});

const Title = styled("h1", {
  fontSize: "2.25rem",
  fontWeight: WEIGHTS.semibold,
});

const Subtitle = styled("p", {
  fontSize: "1rem",
  color: COLORS.gray[500],
  margin: "10px 0px",
})

export default Colophon;
