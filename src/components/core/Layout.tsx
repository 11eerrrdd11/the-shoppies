import { Box, chakra } from "@chakra-ui/react";

export const Container = chakra(Box, {
  baseStyle: {
    width: "100%",
    maxWidth: "1640px",
    marginX: "auto",
    paddingX: ["0.25in", "0.25in", "0.5in", "0.75in", "1.25in"],
  },
});

export const Card = chakra(Box, {
  baseStyle: {
    background: "white",
    borderRadius: "4px",
    boxShadow: "md",
  },
});
