import GlobalStyles from "@mui/material/GlobalStyles";

export default function GlobalThemeStyles() {
  return (
    <GlobalStyles
      styles={{
        body: { backgroundColor: "#000810", color: "#dedede" },
        ".mainPaper": { padding: "20px", marginBottom: "20px" },
      }}
    />
  );
}
