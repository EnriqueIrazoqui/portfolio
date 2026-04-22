import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

function Hero({ content }) {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        scrollMarginTop: "96px",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, rgba(25, 118, 210, 0.18) 0%, rgba(10, 16, 32, 1) 35%, rgba(5, 8, 20, 1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            px: { xs: 1, sm: 0 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "center",
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: 0.5,
                    fontSize: { xs: "2.4rem", sm: "2.8rem", md: "3.4rem" },
                    lineHeight: 1.08,
                    wordBreak: "break-word",
                  }}
                >
                  {content.hero.name}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    display: "inline-block",
                    mt: 1,
                  }}
                >
                  {content.hero.alias}
                </Typography>
              </Box>

              <Chip
                label={content.hero.chip}
                sx={{
                  alignSelf: "flex-start",
                  maxWidth: "100%",
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                    py: 0.8,
                  },
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  color: "#BAE6FD",
                  border: "1px solid rgba(56, 189, 248, 0.22)",
                  fontWeight: 600,
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.08,
                  fontSize: { xs: "1.7rem", sm: "2.3rem", md: "4.3rem" },
                  maxWidth: "900px",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {content.hero.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  maxWidth: "760px",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1.2rem" },
                }}
              >
                {content.hero.description}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.4,
                    fontWeight: 700,
                    borderRadius: "14px",
                    textTransform: "none",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {content.hero.primaryButton}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.4,
                    fontWeight: 700,
                    borderRadius: "14px",
                    textTransform: "none",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "text.primary",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {content.hero.secondaryButton}
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1.2}
                useFlexGap
                sx={{ flexWrap: "wrap" }}
              >
                {[
                  "Node.js",
                  "Express",
                  "Laravel",
                  "React",
                  "Vue",
                  "PostgreSQL",
                  "MariaDB",
                  "AWS",
                  "Docker",
                  "Render",
                ].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "text.primary",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </MotionBox>

          <MotionPaper
            elevation={0}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: "24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
              textAlign: "center",
            }}
          >
            <Stack
              spacing={2.5}
              sx={{
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={profile}
                alt={content.hero.name}
                sx={{
                  width: { xs: 120, sm: 140 },
                  height: { xs: 120, sm: 140 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: "0 0 40px rgba(56, 189, 248, 0.25)",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.4rem", sm: "1.6rem" },
                  wordBreak: "break-word",
                }}
              >
                {content.hero.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  lineHeight: 1.7,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  maxWidth: "100%",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {content.hero.cardTitle}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                }}
              >
                {content.hero.cardSubtitle}
              </Typography>
            </Stack>
          </MotionPaper>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;