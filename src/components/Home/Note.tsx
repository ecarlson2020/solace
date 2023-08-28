// mui
import { Card, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Note() {
  return (
    <Card sx={{ mb: 2, pt: 2, px: 2, pb: 0 }}>
      <Typography variant="h6">My Shopping List</Typography>
      <Typography>
        This is going to be a note. This is another line. This is yet another
        line. This is yet another line. This is yet another line. This is yet
        another line. This is yet another line. This is yet another line. This
        is yet another line.{" "}
      </Typography>
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
        <Typography variant="subtitle2">2 days ago</Typography>
      </Box>
    </Card>
  );
}
