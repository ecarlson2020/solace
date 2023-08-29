import axios from 'axios'
// mui
import { Card, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// types
import { Note } from "../../types";

interface NoteProps {
  note: Note;
}

export default function NoteBlock({ note }: NoteProps) {
  const { ts, title, content, id } = note;

  const edit = (id) => {
    axios.patch(apiUrl + '/' + id)
  };

  const delete = (id) => {
    axios.delete(apiUrl + '/' +id)
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
          <IconButton size="small" sx={{ mr: 1, my: 1 }} color="primary">
            <EditIcon onClick={()=>edit(id)} />
          </IconButton>
          <IconButton size="small" color="primary">
            <DeleteIcon onClick={()=>delete(id)}/>
          </IconButton>
        </Box>
        <Typography variant="subtitle2">{ts}</Typography>
      </Box>
    </Card>
  );
}
