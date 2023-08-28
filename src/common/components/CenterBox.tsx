import { ReactNode } from "react";
// mui
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
  py?: number;
  className?: string;
  bg?: string;
  bgColor?: string;
  sx?: object;
}

export default function CenterBox({
  children,
  py,
  className,
  bg,
  sx,
  bgColor,
}: Props) {
  return (
    <Box
      sx={(theme) => ({
        py: py || 8,
        background: bg
          ? `linear-gradient(to bottom right, ${theme.palette.primary.gradient}, ${theme.palette.primary.gradient}), url(${bg}) center center / cover no-repeat`
          : theme.palette.primary[bgColor || "bg"],
        ...sx,
      })}
      className={className}
    >
      <Box
        sx={{
          px: 3,
          mx: "auto",
          maxWidth: "sm",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

CenterBox.defaultProps = {
  py: false,
  className: "",
  bg: null,
  bgColor: "",
  sx: null,
};
