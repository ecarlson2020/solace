// mui
import { Divider, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// components
import Page from "../../common/components/Page";
import CenterBox from "../../common/components/CenterBox";

export default function Home() {
  return (
    <Page>
      <CenterBox>
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
      </CenterBox>
    </Page>
  );
}
