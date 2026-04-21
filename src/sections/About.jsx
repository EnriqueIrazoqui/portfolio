import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

function About({ content }) {
  const stats = [
    { label: "Experience", value: content.about.stats.experience },
    { label: "Main focus", value: content.about.stats.focus },
    { label: "English", value: content.about.stats.english },
    { label: "Cloud & Deploy", value: content.about.stats.cloud },
  ];

  return (
    <Box component="section" id="about" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: "primary.main", letterSpacing: 2 }}
              >
                {content.about.section}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  mt: 1,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {content.about.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "text.secondary",
                  lineHeight: 1.9,
                }}
              >
                {content.about.p1}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  lineHeight: 1.9,
                }}
              >
                {content.about.p2}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  lineHeight: 1.9,
                }}
              >
                {content.about.p3}
              </Typography>
            </Paper>
          </Grid>

          <Grid xs={12}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {content.about.cardTitle}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: "text.secondary",
                    lineHeight: 1.8,
                  }}
                >
                  {content.about.cardDescription}
                </Typography>
              </Paper>

              <Grid container spacing={2}>
                {stats.map((item) => (
                  <Grid xs={12} sm={6} md={12} key={item.label}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.label}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: 700 }}
                      >
                        {item.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;