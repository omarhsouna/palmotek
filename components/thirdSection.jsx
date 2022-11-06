import { Box, Grid } from "@mui/material";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <Box>
      <Grid
        sx={{
          py: "80px",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1320px",
          mx: "auto",
        }}
        container
      >
        <Grid
          sx={{ textAlign: "center", mb: { xs: "3rem", lg: "0" } }}
          xs={12}
          lg={6}
        >
          <Image src="/images/v-act.png" height={320} width={270} />
        </Grid>
        <Grid xs={12} lg={6}>
          <Grid container>
            <Grid sx={{ mb: "3rem" }} xs={12} lg={6} item>
              <Box
                xs={{
                  width: "320px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: "4rem",
                    textAlign: "center",
                  }}
                >
                  <Image src="/images/phone.svg" width={64} height={64} />
                </Box>
                <Box
                  component="h3"
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    color: "#212529",
                    mb: "8px",
                    textAlign: "center",
                  }}
                >
                  Easy to use
                </Box>
                <Box
                  sx={{
                    color: "#6c757d",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Transform your manual vales to smart ones in 1 minute!
                </Box>
              </Box>
            </Grid>
            <Grid sx={{ mb: "3rem" }} xs={12} lg={6} item>
              <Box
                xs={{
                  width: "320px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: "4rem",
                    textAlign: "center",
                  }}
                >
                  <Image src="/images/thumb.svg" width={64} height={64} />
                </Box>
                <Box
                  component="h3"
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    color: "#212529",
                    mb: "8px",
                    textAlign: "center",
                  }}
                >
                  Irrigation anywhere
                </Box>
                <Box
                  sx={{
                    color: "#6c757d",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Control you irrigation from your mobile phone. We take care of
                  the rest!
                </Box>
              </Box>
            </Grid>
            <Grid sx={{ mb: "3rem" }} xs={12} lg={6} item>
              <Box
                xs={{
                  width: "320px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: "4rem",
                    textAlign: "center",
                  }}
                >
                  <Image src="/images/gift.svg" width={64} height={64} />
                </Box>
                <Box
                  component="h3"
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    color: "#212529",
                    mb: "8px",
                    textAlign: "center",
                  }}
                >
                  Best price available
                </Box>
                <Box
                  sx={{
                    color: "#6c757d",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Just don't worry about the price!
                </Box>
              </Box>
            </Grid>
            <Grid sx={{ mb: "3rem" }} xs={12} lg={6} item>
              <Box
                xs={{
                  width: "320px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    fontSize: "4rem",
                    textAlign: "center",
                  }}
                >
                  <Image src="/images/wifi.svg" width={64} height={64} />
                </Box>
                <Box
                  component="h3"
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: "600",
                    color: "#212529",
                    mb: "8px",
                    textAlign: "center",
                  }}
                >
                  No wires required
                </Box>
                <Box
                  sx={{
                    color: "#6c757d",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  No wires... no configuration... just plug and play!
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdSection;
