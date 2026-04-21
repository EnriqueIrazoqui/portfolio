import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function Projects({ content }) {
  const projects = content.projects.items;

  return (
    <Box component="section" id="projects" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box mb={8}>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: 2 }}
          >
            {content.projects.section}
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
            {content.projects.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, mb: 2, maxWidth: 700 }}
          >
            {content.projects.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid xs={12} md={4} key={project.title}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography variant="caption" sx={{ color: "primary.light" }}>
                  {project.subtitle}
                </Typography>

                <Typography variant="h5" sx={{ mt: 1, fontWeight: 700 }}>
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}
                >
                  {project.description}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}
                >
                  {project.extra}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  mt={3}
                  sx={{ flexWrap: "wrap" }}
                >
                  {project.highlights.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        mb: 1,
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </Stack>

                <Box sx={{ mt: 3 }}>
                  {project.liveUrl ? (
                    <Button
                      variant="contained"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: 700,
                        px: 2.5,
                      }}
                    >
                      {content.projects.liveSite}
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      disabled
                      sx={{
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: 700,
                        px: 2.5,
                      }}
                    >
                      {content.projects.privateProject}
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;