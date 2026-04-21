import { Box, Container, Grid, Paper, Typography } from "@mui/material";

function CurrentlyWorkingOn({ content }) {
  const items = content.currentlyWorkingOn.items;

  return (
    <Box component="section" id="currently-working-on" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: 2 }}
          >
            {content.currentlyWorkingOn.section}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, fontWeight: 700 }}>
            {content.currentlyWorkingOn.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: 760,
              lineHeight: 1.8,
            }}
          >
            {content.currentlyWorkingOn.description}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid xs={12} md={4} key={item.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1.5 }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CurrentlyWorkingOn;