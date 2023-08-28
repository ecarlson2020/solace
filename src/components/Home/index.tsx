import { ReactNode } from "react";
// mui
import { Switch, Divider, Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// components
import Page from "../../common/components/Page";
import CenterBox from "../../common/components/CenterBox";
// store
import { RootState, useRootStore } from "../../store";

function SwitchIcon({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: "100%",
        background: theme.palette.primary.bg,
        width: "20px",
        textAlign: "center",
        height: "20px",
        transform: "translate(0, -1px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `1px 1px 2px 0 ${theme.palette.primary.boxShadow}`,
      })}
    >
      {children}
    </Box>
  );
}

export default function Home() {
  const isLightMode = useRootStore((state: RootState) => state.isLightMode);
  const setIsLightMode = useRootStore(
    (state: RootState) => state.setIsLightMode
  );
  const iconStyle = { fontSize: "14px", color: "primary.main" };
  const theme = useTheme();
  console.log(theme);

  return (
    <Page>
      <Box
        sx={{
          minHeight: "calc(100vh - 56px)",
          maxWidth: "sm",
          px: 2,
          mx: "auto",
          background: theme.palette.primary.bg,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
          <Switch
            checked={!isLightMode}
            onClick={() => setIsLightMode(!isLightMode)}
            checkedIcon={
              <SwitchIcon>
                <DarkModeIcon sx={iconStyle} />
              </SwitchIcon>
            }
            icon={
              <SwitchIcon>
                <WbSunnyIcon sx={iconStyle} />
              </SwitchIcon>
            }
          />
        </Box>
        <Typography variant="h6">My Shopping List</Typography>
        <Typography>
          This is going to be a note. This is another line. This is yet another
          line. This is yet another line. This is yet another line. This is yet
          another line. This is yet another line. This is yet another line. This
          is yet another line.{" "}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton size="small" sx={{ mr: 1, my: 1 }}>
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle2">Last Edited: 2 days ago</Typography>
        </div>
        <Divider />
      </Box>
    </Page>
  );
}
