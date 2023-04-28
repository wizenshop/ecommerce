import { styled, keyframes, css } from "../../../styles";


import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  overflow: "hidden",
  height: "3.5rem",
  width: "100vw",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  backgroundColor: " #f8f8f8",
  padding: "1rem 0",
  boxShadow: "0 -1px 12px hsla(174,63%, 15%, 0.15)",
  borderRadius: "1.25rem 1.25rem 0 0",
  margin: 0,
  position: "fixed",
  bottom: 0,
});

export const NavigationMenuList = styled(NavigationMenu.List, {
  listStyle: "none",
  display: "flex",
  alingItems: "center",
  gap: "5rem",
});
