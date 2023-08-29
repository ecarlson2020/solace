import { useState } from "react";
// mui
import {
  Alert,
  Snackbar,
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
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [content, setContent] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [title, setTitle] = useState("");
  const isDialogOpen = useRootStore((state: RootState) => state.isDialogOpen);
  const setIsDialogOpen = useRootStore(
    (state: RootState) => state.setIsDialogOpen
  );
  const handleClose = () => setIsDialogOpen(false);

  const attemptSubmit = () => {
    console.log(title, content);
    if (!title) {
      setAlertMessage("Title is required");
      setSeverity("warning");
    } else if (!content) {
      setAlertMessage("Note is required");
      setSeverity("warning");
    } else {
      setTitle("");
      setContent("");
      setAlertMessage("New note added!");
      setSeverity("success");
      handleClose();
    }
    setIsSnackbarOpen(true);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
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
          <TextField
            variant="filled"
            label="Title"
            fullWidth
            value={title}
            onChange={handleChangeTitle}
          />
          <TextField
            variant="filled"
            label="Note"
            multiline
            rows={6}
            fullWidth
            onChange={handleChangeContent}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={attemptSubmit}
              >
                Submit
              </Button>
            </div>
          </Box>
        </Stack>
      </Dialog>
    </>
  );
}
