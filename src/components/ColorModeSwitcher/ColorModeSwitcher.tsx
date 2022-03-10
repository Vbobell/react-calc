import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ColorModeSwitcherProps } from "./types";
import { colorModeSwitcherStyleProps } from "./ColorModeSwitcherChakra.styles";

export function ColorModeSwitcher(props: ColorModeSwitcherProps): JSX.Element {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...colorModeSwitcherStyleProps}
      {...props}
    />
  );
}
