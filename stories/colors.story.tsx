import * as React from "react";
import { storiesOf } from "@storybook/react";
import { css } from "emotion";
import { colors, constants, typography } from "../src/theme";

const wrapper = css({
  padding: 30,
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: colors.gray.lightest
});

const titleStyle = css({
  display: "flex",
  flexDirection: "column",
  color: colors.gray.dark,
  fontWeight: "bold",
  width: "100%",
  "> div": {
    padding: "10px 20px"
  }
});

const section = css({
  width: 150,
  float: "left",
  border: constants.border.base,
  borderRadius: constants.borderRadius,
  marginBottom: 20,
  backgroundColor: colors.white.base,
  overflow: "hidden",
  marginRight: 20
});

storiesOf("Colors", module).add("List", () => (
  <div className={wrapper}>
    <h2 style={{ marginBottom: 40 }}>Colors</h2>
    {Object.keys(colors).map(x => (
      <div>
        <h4 style={{ marginBottom: 10 }}>{x}</h4>
        <div style={{ overflow: "auto" }}>
          {Object.keys(colors[x]).map(y => {
            const color = colors[x][y];
            return (
              <div className={section}>
                <div
                  style={{
                    backgroundColor: color,
                    flex: 1,
                    height: 100
                  }}
                />
                <div className={titleStyle}>
                  <div style={{ borderBottom: constants.border.base }}>
                    {color}
                  </div>
                  <div style={typography.s.light}>{`colors.${x}.${y}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
));
