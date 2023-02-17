import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Button, DialogActions, DialogContent } from "@mui/material";
import { ImPriceTags } from "react-icons/im";
import instance from "../../../utils/axiosInstance";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const GenreModal = ({
  open,
  setOpen,
  selectedData,
  updateSelectedData,
  while_signup,
  saving,
  setSaving,
  setSubmitting,
}) => {
  // const [saving, setSaving] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setSaving(false);
    setSubmitting(false);
  };

  const [chipData, setChipData] = React.useState([
    { key: "business", label: "Business" },
    { key: "entertainment", label: "Entertainment" },
    { key: "environment", label: "Environment" },
    { key: "food", label: "Food" },
    { key: "health", label: "Health" },
    { key: "politics", label: "Politics" },
    { key: "science", label: "Science" },
    { key: "sports", label: "Sports" },
    { key: "technology", label: "Technology" },
    { key: "world", label: "World" },
  ]);

  // const [selectedData, updateSelectedData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  const handleSelect = (chipToAdd) => () => {
    var temp = [...selectedData]; //,chipToAdd
    var alreadyPresent = false;
    temp.forEach((item) => {
      if (item.key == chipToAdd.key) {
        alreadyPresent = true;
      }
    });
    let t = [];
    if (!alreadyPresent) {
      t = temp;
      temp.push(chipToAdd);
    } else {
      let k = null;

      temp.map((tmp, id) => {
        if (tmp.key !== chipToAdd.key) {
          t.push(tmp);
        }
      });
    }
    updateSelectedData(t);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm">
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
          }}
        >
          <ImPriceTags
            style={{
              marginRight: "0.25rem",
            }}
          />{" "}
          What are you intrested in?{" "}
        </div>
        {/* <div>Select your intrest</div> */}
      </div>
      <div
        style={{
          border: "3px solid lightgray",

          borderRadius: "10px",
          margin: "1rem",
          padding: "0.75rem",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {chipData.map((data) => {
            let icon;

            if (data.label === "React") {
              icon = <TagFacesIcon />;
            }

            return (
              <ListItem key={data.key}>
                <Chip
                  icon={icon}
                  label={data.label}
                  color={
                    selectedData.find((dt) => dt.key === data.key)
                      ? "success"
                      : "default"
                  }
                  onClick={handleSelect(data)}
                />
              </ListItem>
            );
          })}
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem",
        }}
      >
        <Button
          size="small"
          variant="outlined"
          onClick={async () => {
            setSaving(true);
            try {
              if (!while_signup) {
                const temp = selectedData.map((dt) => {
                  return dt.key;
                });
                const result = await instance.patch("/users/update-intrest", {
                  intrest: temp,
                });
              }
              setOpen(false);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {"Save"}
        </Button>
      </div>
    </Dialog>
  );
};

export default GenreModal;
