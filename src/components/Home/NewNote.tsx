// mui
import {
  Typography,
  Box,
  Button,
  Stack,
  Dialog,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
// store
import { RootState, useRootStore } from "../../store";

export default function NewNote() {
  const theme = useTheme();
  const isDialogOpen = useRootStore((state: RootState) => state.isDialogOpen);
  const setIsDialogOpen = useRootStore(
    (state: RootState) => state.setIsDialogOpen
  );
  const handleClose = () => setIsDialogOpen(false);
  return (
    <Dialog
      onClose={handleClose}
      open={isDialogOpen}
      PaperProps={{
        sx: {
          background: theme.palette.primary.bg,
          width: "100%",
        },
      }}
    >
      <Stack sx={{ p: 2 }} spacing={2}>
        <Typography variant="h3">New Note</Typography>
        <TextField variant="filled" label="Title" fullWidth />
        <TextField variant="filled" label="Note" multiline rows={6} fullWidth />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </div>
        </Box>
      </Stack>
    </Dialog>
  );
}
