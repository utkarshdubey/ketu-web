import { useState } from "react";
import { styled } from "@/styles/exports";
import toast from "react-hot-toast";
import { Modal, Text, Image, Button } from "@nextui-org/react";
import { COLORS } from "@/styles/constants";
import Menu from "@/components/Menu";
import UploadTile from "@/components/UploadTile";
import TextArea from "@/components/TextArea";

// Context
import { statusState, secretState } from "@/utils/atoms";
import { useRecoilValue, useRecoilState } from "recoil";

const Stegwindow = () => {
  // Image
  const [image, setImage] = useState(null);

  // Modal
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => {
    setVisible(false);
    setImage(null);
    console.log("closed");
  };

  // Setting secret
  const [secret, setSecret] = useRecoilState(secretState);
  const [file, setFile] = useState(undefined);
  const status = useRecoilValue(statusState);

  const handleRequest = () => {
    if (status) {
      const data = new FormData();
      data.append("file", file);
      data.append("secret", secret);

      fetch("http://localhost:8000/encrypt", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          setImage(res.url);
          openModal();
        });
    } else {
      const data = new FormData();
      data.append("file", file);

      fetch("http://localhost:8000/decrypt", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          toast.success("Successfully decrypted file contents!");
          setSecret(res.secret);
        });
    }
  };
  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
        css={{ backgroundColor: COLORS.gray[700] }}
      >
        {/* <Modal.Header>
          <Text b size={18} color="white">The encrypted image.</Text>
        </Modal.Header> */}
        <Modal.Body>
          <Image
            autoResize
            showSkeleton
            alt={`Decrypted image`}
            objectFit="cover"
            src={image}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeModal}>
            Close
          </Button>
          <Button color="gradient" auto onClick={() => window.open(image, '_blank')}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
      <Tiles
        onSubmit={(e) => {
          e.preventDefault();
          handleRequest();
        }}
      >
        <Menu />
        <UploadTile handleFile={setFile} />
        <TextArea value={secret} handleChange={setSecret} />
      </Tiles>
    </>
  );
};

const Tiles = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: 25,
  "& > *": {
    margin: 0,
  },
});

export default Stegwindow;
