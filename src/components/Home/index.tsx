import { ReactNode, useState, useEffect } from "react";
import axios from "axios";
// mui
import { Switch, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// store
import { RootState, useRootStore } from "../../store";
// components
import Note from "./Note";
import NewNote from "./NewNote";
// utils
import { apiUrl } from "../../common/utils";

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
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${apiUrl}/all`);
      setNotes(response.data);
    })();
  }, []);

  return (
    <>
      <NewNote />
      <Box
        sx={{
          background: theme.palette.primary.bg,
          transition: "0.3s ease background",
        }}
      >
        <Box
          sx={{
            minHeight: "calc(100vh - 56px)",
            maxWidth: "sm",
            px: 2,
            mx: "auto",
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
          {notes.map((note) => (
            <Note note={note} />
          ))}
        </Box>
      </Box>
    </>
  );
}
