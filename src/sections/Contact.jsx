import { Box, Container, Stack, Typography, Button } from "@mui/material";

function Contact({ content }) {
  return (
    <Box component="section" id="contact" sx={{ py: 12 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "28px",
            background: "rgba(56, 189, 248, 0.06)",
            border: "1px solid rgba(56, 189, 248, 0.18)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: 2 }}
          >
            {content.contact.section}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, fontWeight: 700 }}>
            {content.contact.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            {content.contact.description}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mt: 4,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="mailto:eirazoquiruelas@gmail.com"
              sx={{
                px: 4,
                py: 1.4,
                fontWeight: 700,
                borderRadius: "14px",
                textTransform: "none",
              }}
            >
              {content.contact.email}
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="https://github.com/EnriqueIrazoqui"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.4,
                fontWeight: 700,
                borderRadius: "14px",
                textTransform: "none",
              }}
            >
              {content.contact.github}
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="https://www.linkedin.com/in/enrique-irazoqui-ruelas-2449a0287/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.4,
                fontWeight: 700,
                borderRadius: "14px",
                textTransform: "none",
              }}
            >
              {content.contact.linkedin}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;