import { useRef, useState } from "react";
import toast from "react-hot-toast"
import { styled } from "@/styles/exports";
import { COLORS, WEIGHTS } from "@/styles/constants";
import { Card } from "@nextui-org/react";
import UploadIcon from "@/components/UploadIcon";

// File Upload Validation
function hasExtension(fileName, exts) {
  return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

const UploadTile = (props) => {
  const hiddenFileInput = useRef(null);

  const handleClick = e => {
    hiddenFileInput.current.click();
  }

  const handleInput = e => {
    const fileUploaded = e.target.files[0];
    if(!fileUploaded) {
      return;
    }
    if(!hasExtension(fileUploaded.name, ['.png'])) {
      toast.error("File must be a .png");
      return;
    }
    if(fileUploaded.size / 1024 > 50) {
      toast.error("The file size is too big, please select an image below 50kb.")
      return;
    }
    setFilename(fileUploaded.name)
    props.handleFile(fileUploaded);
  }

  const [filename, setFilename] = useState(undefined);

  return (
    <Card
      hoverable
      clickable
      animated
      onClick={handleClick}
      css={{
        height: "320px",
        backgroundColor: COLORS.gray[700],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      <input type="file" ref={hiddenFileInput} onChange={handleInput} hidden required />
      <Container>
        <UploadIcon/>
        <Text>{filename ? filename : "Upload an image file"}</Text>
        <Subtitle>{!filename ? "(only PNG)" : null}</Subtitle>
      </Container>
    </Card>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const Text = styled("h1", {
  fontSize: 20,
  fontWeight: WEIGHTS.semibold,
  margin: 0
})

const Subtitle = styled("h2", {
  fontSize: 16,
  fontWeight: WEIGHTS.medium,
  color: COLORS.gray[500],
  margin: 0
})

export default UploadTile;
