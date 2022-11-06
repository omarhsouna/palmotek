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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 16 16"
                  >
                    <defs>
                      <linearGradient id="MyGradient">
                        <stop stop-color="#006838" />
                        <stop offset="95%" stop-color="#8dc63f" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      fill="url(#MyGradient)"
                    />
                    <path
                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      fill="url(#MyGradient)"
                    />
                  </svg>
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
              {" "}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 16 16"
                  >
                    <defs>
                      <linearGradient id="MyGradient">
                        <stop stop-color="#006838" />
                        <stop offset="95%" stop-color="#8dc63f" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      fill="url(#MyGradient)"
                    />
                    <path
                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      fill="url(#MyGradient)"
                    />
                  </svg>
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
              {" "}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 16 16"
                  >
                    <defs>
                      <linearGradient id="MyGradient">
                        <stop stop-color="#006838" />
                        <stop offset="95%" stop-color="#8dc63f" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      fill="url(#MyGradient)"
                    />
                    <path
                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      fill="url(#MyGradient)"
                    />
                  </svg>
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
              {" "}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 16 16"
                  >
                    <defs>
                      <linearGradient id="MyGradient">
                        <stop stop-color="#006838" />
                        <stop offset="95%" stop-color="#8dc63f" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      fill="url(#MyGradient)"
                    />
                    <path
                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      fill="url(#MyGradient)"
                    />
                  </svg>
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
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdSection;
