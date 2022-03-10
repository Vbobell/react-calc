import { BoxProps, GridProps } from "@chakra-ui/react";
import { ColorModeSwitcherProps } from "./components/ColorModeSwitcher/types";

export const boxAppStyleProps: BoxProps = {
  textAlign: "center",
  fontSize: "xl",
};

export const gridAppStyleProps: GridProps = {
  minH: "100vh",
  p: "3",
};

export const colorModeSwitchAppStyleProps: ColorModeSwitcherProps = {
  justifySelf: "flex-end",
};
