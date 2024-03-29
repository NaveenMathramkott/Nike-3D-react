import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#00ccdd",
  isLogoTexture: true,
  isFullTexture: false,
});

export default state;
