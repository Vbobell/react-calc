import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";

import {
  boxAppStyleProps,
  gridAppStyleProps,
  colorModeSwitchAppStyleProps,
} from "./AppChakra.styles";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box {...boxAppStyleProps}>
        <Grid {...gridAppStyleProps}>
          <ColorModeSwitcher {...colorModeSwitchAppStyleProps} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
