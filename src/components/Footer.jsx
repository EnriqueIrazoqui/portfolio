import { Box, Container, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(5, 8, 20, 0.6)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={1}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            textAlign: { xs: "left", md: "center" },
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Enrique Irazoqui Ruelas
          </Typography>

          <Typography variant="body2" sx={{ color: "primary.main", letterSpacing: 1.2 }}>
            Yata Garasu
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Systems Engineer · Backend / Full Stack Developer
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;