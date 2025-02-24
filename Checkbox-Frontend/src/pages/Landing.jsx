import { Box, styled, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#98FF98",
});

const Landing = () => {
  return (
    <Box>
      <LogoBox>
        <CheckIcon sx={{ fontSize: 100 }} />
        <Typography variant="h1">Checkbox</Typography>
      </LogoBox>
      <Typography variant="h5">Achieve More with Every Checkmark</Typography>
    </Box>
  );
};

export default Landing;
