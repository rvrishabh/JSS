import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import HeaderBox from "../../styles/StyledComponents";

export default function Header() {
  return (
    <HeaderBox>
      <Box sx={{ display: "flex", padding: "30px 0 0 30px" }}>
        <Box>
          <Image
            src="/images/Nansys Logo without Bg.png"
            alt="logo"
            width="223px"
            height="65px"
          />
        </Box>
        <Box sx={{ position: "absolute", right: "50px", top: "37px" }}>
          <Button variant="contained" color="secondary">
            connect with us
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1.3fr" }}>
        <Box sx={{ padding: "80px 0 0 55px" }}>
          <Box>
            <Typography variant="h1">
              The right and smart way to calculate
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Image
                src="/images/Group 21549.png"
                alt="sales"
                width="175px"
                height="75px"
              />

              <Image
                src="/images/Group 21546.png"
                alt="sales"
                width="250px"
                height="60px"
              />
            </Box>
            <Box sx={{ padding: "1rem" }}>
              <Typography>
                Fully automated sales compensation software to create and
                optimize incentive compensations, incentives and rebates for the
                sales team that drives revenue, motivate employees, and align
                with your annual goals.
              </Typography>
            </Box>
            <Box>
              <TextField
                label="Enter your Email Address..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" color="secondary">
                        Get a Demo
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Image
            src="/images/Group 21558.png"
            alt="group"
            width="900px"
            height="825px"
          />
        </Box>
      </Box>
    </HeaderBox>
  );
}
