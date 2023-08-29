// mui
import { Card, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface NoteProps {
  note: {
    ts: string;
    title: string;
    content: string;
    id: number;
  };
}

export default function Note({ note }: NoteProps) {
  const { ts, title, content, id } = note;
  return (
    <Card sx={{ mb: 2, pt: 2, px: 2, pb: 0 }}>
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
            <EditIcon />
          </IconButton>
          <IconButton size="small" color="primary">
            <DeleteIcon />
          </IconButton>
        </Box>
        <Typography variant="subtitle2">{ts}</Typography>
      </Box>
    </Card>
  );
}
