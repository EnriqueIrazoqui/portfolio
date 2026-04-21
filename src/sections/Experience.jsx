import { Box, Container, Stack, Typography, Paper } from "@mui/material";

function Experience({ content }) {
  const experience = content.experience.items;

  return (
    <Box component="section" id="experience" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box mb={6}>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: 2 }}
          >
            {content.experience.section}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, fontWeight: 700 }}>
            {content.experience.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 2, color: "text.secondary", maxWidth: 700 }}
          >
            {content.experience.description}
          </Typography>
        </Box>

        <Stack spacing={4}>
          {experience.map((job) => (
            <Paper
              key={job.role}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "0.3s",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Stack spacing={2}>
                <Stack spacing={0.5}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {job.role}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        px: 2,
                        py: 0.55,
                        borderRadius: "999px",
                        border: "1px solid rgba(56, 189, 248, 0.22)",
                        backgroundColor: "rgba(56, 189, 248, 0.08)",
                        color: "#BAE6FD",
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.period}
                    </Typography>
                  </Stack>

                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {job.company}
                  </Typography>
                </Stack>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                  }}
                >
                  {job.description}
                </Typography>

                <Box>
                  <Stack spacing={1}>
                    {job.highlights.map((item, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Experience;
