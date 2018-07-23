import { css } from "react-emotion";
import { colors, constants } from "../../theme";

export const sidebarWrapperStyle = css({
  backgroundColor: "rgba(16,23,33,0.3)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 99
});

export const closeStyle = css({
  backgroundColor: colors.white.base,
  borderRadius: constants.borderRadius,
  height: 50,
  width: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginLeft: -70,
  marginTop: 20,
  position: "absolute",
  i: {
    fontSize: 25,
    color: colors.gray.darker
  },
  "@media (max-width: 1024px)": {
    right: 0,
    marginTop: 0,
    borderRadius: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 20px",
    boxShadow: constants.boxShadow.base,
    i: {
      float: "right",
      color: colors.gray.dark,
      fontSize: 20
    }
  }
});

export const sidebarStyle = css({
  transition: `transform 200ms ${constants.animationCurve}`,
  backgroundColor: colors.white.base,
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  willChange: "transform",
  zIndex: 99,
  "@media (max-width: 1024px)": {
    width: "100%",
    paddingTop: 50
  }
});
