import { css } from "emotion";
import { colors, typography } from "../../theme";

export const controlStyle = css({
  outline: "none",
  position: "relative"
});

export const controlContentStyle = css({
  display: "flex",
  justifyContent: "center",
  ...typography.normal.regular,
  cursor: "pointer",
  padding: "10px 0",
  transition: "all 200ms ease",
  i: {
    marginRight: 10,
    fontSize: 16
  },
  "&[data-disabled='true']": {
    cursor: "not-allowed",
    pointerEvents: "none",
    i: {
      color: colors.gray.light
    }
  }
});
