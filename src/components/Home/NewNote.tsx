import { useState, useEffect, Dispatch } from "react";
import axios from "axios";
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
  AlertColor,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
// store
import { RootState, useRootStore } from "../../store";
// utils
import { apiUrl } from "../../common/utils";
// types
import { Note } from "../../types";

interface NewNoteProps {
  currentNote: Note;
  setCurrentNote: Dispatch<any>;
}

export default function NewNote({ currentNote, setCurrentNote }: NewNoteProps) {
  const theme = useTheme();
  const titleMinLength = 1;
  const titleMaxLength = 50;
  const contentMinLength = 25;
  const contentMaxLength = 200;
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>("success");
  const [content, setContent] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [title, setTitle] = useState("");
  const isDialogOpen = useRootStore((state: RootState) => state.isDialogOpen);
  const setIsDialogOpen = useRootStore(
    (state: RootState) => state.setIsDialogOpen
  );
  const getNotes = useRootStore((state: RootState) => state.getNotes);
  const setSearchPhrase = useRootStore(
    (state: RootState) => state.setSearchPhrase
  );

  const handleClose = () => {
    setSearchPhrase("");
    setCurrentNote(null);
    setTitle("");
    setContent("");
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (currentNote) {
      const { content, title } = currentNote;
      setTitle(title);
      setContent(content);
    }
  }, [currentNote]);

  const attemptSubmit = async () => {
    if (title.length < titleMinLength || title.length > titleMaxLength) {
      setAlertMessage(
        `Title must be between ${titleMinLength} and ${titleMaxLength} characters.`
      );
      setSeverity("warning");
    } else if (
      content.length < contentMinLength ||
      title.length > contentMaxLength
    ) {
      setAlertMessage(
        `Note must be between ${contentMinLength} and ${contentMaxLength} characters.`
      );
      setSeverity("warning");
    } else {
      handleClose();
      if (currentNote) {
        await axios.patch(`${apiUrl}/${currentNote.id}`, { title, content });
      } else {
        await axios.post(`${apiUrl}/new`, { title, content });
      }
      await getNotes();
      setAlertMessage(`Note ${currentNote ? "updated" : "added"}!`);
      setSeverity("success");
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
          <Typography variant="h3">Note</Typography>
          <TextField
            variant="filled"
            label="Title"
            fullWidth
            value={title}
            onChange={handleChangeTitle}
            inputProps={{ maxLength: titleMaxLength }}
          />
          <TextField
            variant="filled"
            label="Note"
            multiline
            rows={6}
            fullWidth
            inputProps={{ maxLength: contentMaxLength }}
            onChange={handleChangeContent}
            value={content}
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
