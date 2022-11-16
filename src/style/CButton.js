import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CButton = styled(Button)(({ theme }) => ({
  //   height: "70px",
  //   width: "70px",
  flex: 1,
  aspectRatio: "1/1",
  margin: "10px",
  boxShadow: "unset !important",
  fontWeight: "400",
  fontSize: "24px",
  borderRadius: "5px",
}));

export default CButton;
