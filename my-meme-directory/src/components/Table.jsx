import React, { useState } from "react";
import {
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Modal,
  Input,
} from "@heroui/react";

const MemeTable = ({ memes, onUpdateMeme }) => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  const handleEditClick = (meme) => {
    console.log(meme);

    setSelectedMeme(meme);
  };

  const handleClose = () => {
    setSelectedMeme(null);
  };

  const handleSave = () => {
    // Тут можно вызвать onUpdateMeme(selectedMeme)
    handleClose();
  };

  const columns = [
    { key: 1, label: "Name" },
    { key: 2, label: "Likes" },
    { key: 3, label: "Actions" },
  ];

  return (
    <>
      <Table>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.name}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  color="warning"
                  size="md"
                  onClick={() => handleEditClick(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <Modal open={!!selectedMeme} onClose={handleClose}>
        <Modal.Header>Edit Meme</Modal.Header>
        <Modal.Body>
          <Input
            label="Name"
            value={selectedMeme?.name || ""}
            onChange={(e) =>
              setSelectedMeme({ ...selectedMeme, name: e.target.value })
            }
          />
          <Input
            label="Image URL"
            value={selectedMeme?.imageUrl || ""}
            onChange={(e) =>
              setSelectedMeme({ ...selectedMeme, imageUrl: e.target.value })
            }
          />
          <Input
            label="Likes"
            type="number"
            value={selectedMeme?.likes || 0}
            onChange={(e) =>
              setSelectedMeme({
                ...selectedMeme,
                likes: parseInt(e.target.value),
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} color="danger" variant="light">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default MemeTable;
