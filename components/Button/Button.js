import { COLORS } from "@/styles/constants";
import { Button as BaseButton } from "@nextui-org/react";

const Button = ({active, children, ...delegated}) => {
  return (
    <BaseButton
      auto
      css={{
        height: "60px",
        backgroundColor: COLORS.gray[700],
        border: active && "1.8px solid white",
      }}
      {...delegated}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
