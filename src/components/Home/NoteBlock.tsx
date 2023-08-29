import { Dispatch } from "react";
import axios from "axios";
// mui
import { Card, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// store
import { RootState, useRootStore } from "../../store";
// types
import { Note } from "../../types";
// utils
import { apiUrl } from "../../common/utils";

interface NoteProps {
  note: Note;
  setCurrentNote: Dispatch<any>;
}

export default function NoteBlock({ note, setCurrentNote }: NoteProps) {
  const { ts, title, content, id } = note;
  const getNotes = useRootStore((state: RootState) => state.getNotes);
  const setIsDialogOpen = useRootStore(
    (state: RootState) => state.setIsDialogOpen
  );

  const editMessage = async () => {
    setCurrentNote(note);
    setIsDialogOpen(true);
  };

  const deleteMessage = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    await getNotes();
  };

  return (
    <Card sx={{ mb: 2, pt: 2, px: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography>{content}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2,
        }}
      >
        <Box>
          <IconButton
            size="small"
            sx={{ mr: 1, my: 1 }}
            color="primary"
            onClick={editMessage}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            color="primary"
            onClick={() => deleteMessage(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
        <Typography variant="subtitle2">{ts}</Typography>
      </Box>
    </Card>
  );
}
