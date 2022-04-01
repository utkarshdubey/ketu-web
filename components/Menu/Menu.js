import { styled } from "@/styles/exports";
import { COLORS, WEIGHTS } from "@/styles/constants";
import GrayButton from "@/components/Button";
import { Button } from "@nextui-org/react";
import { Lock, Unlock, ArrowRightSquare } from "react-iconly";

// Context
import { statusState, secretState } from "@/utils/atoms";
import { useSetRecoilState, useRecoilState } from "recoil";

const Menu = () => {
  return (
    <Container>
      <Menu.Options />
      <Menu.Info />
    </Container>
  );
};

Menu.Options = () => {
  const [status, setStatus] = useRecoilState(statusState);
  const setSecret = useSetRecoilState(secretState);

  return (
    <ButtonGroup>
      <GrayButton
        icon={<Lock set="bulk" primaryColor="white" />}
        active={status}
        style={{ flex: 1 }}
        onClick={() => {
          setStatus(true)
          setSecret('') // Reset secret
        }}
      >
        <ButtonText>Encrypt</ButtonText>
      </GrayButton>
      <GrayButton
        icon={<Unlock set="bulk" primaryColor="white" />}
        active={!status}
        style={{ flex: 1 }}
        onClick={() => {
          setStatus(false);
          setSecret('');  // Clear secret
        }}
      >
        <ButtonText>Decrypt</ButtonText>
      </GrayButton>
    </ButtonGroup>
  );
};

Menu.Info = () => {
  return (
    <Button
      color="gradient"
      auto
      type="submit"
      css={{ height: "60px", marginLeft: "auto" }}
    >
      <ArrowRightSquare set="bold" primaryColor="white" />
    </Button>
  );
};

const Container = styled("div", {
  display: "flex",
  gap: 25,
});

const ButtonGroup = styled("div", {
  display: "flex",
  width: "100%",
  gap: 25,
  marginRight: "auto",
});

const ButtonText = styled("p", {
  color: COLORS.gray[600],
  fontWeight: WEIGHTS.semibold,
  fontSize: 14,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: 1.2,
});

export default Menu;
