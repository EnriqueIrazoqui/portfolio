import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ language, toggleLanguage, content }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.projects, href: "#projects" },
    { label: content.nav.experience, href: "#experience" },
    { label: content.nav.contact, href: "#contact" },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(5, 8, 20, 0.75)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: "74px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 0.4,
                  color: "text.primary",
                }}
              >
                Enrique Irazoqui Ruelas
              </Typography>

            </Box>

            {/* Desktop menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "text.secondary",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    borderRadius: "12px",
                    transition: "0.25s",
                    "&:hover": {
                      color: "text.primary",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                onClick={toggleLanguage}
                variant="outlined"
                sx={{
                  ml: 1,
                  minWidth: "64px",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "rgba(56, 189, 248, 0.22)",
                  color: "primary.main",
                }}
              >
                {language === "en" ? "ES" : "EN"}
              </Button>
            </Box>

            {/* Mobile actions */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <Button
                onClick={toggleLanguage}
                variant="outlined"
                size="small"
                sx={{
                  minWidth: "56px",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "rgba(56, 189, 248, 0.22)",
                  color: "primary.main",
                }}
              >
                {language === "en" ? "ES" : "EN"}
              </Button>

              <IconButton
                onClick={handleOpen}
                sx={{
                  color: "text.primary",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 260,
            background: "#0A1020",
            color: "#E2E8F0",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            p: 2,
          },
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Enrique Irazoqui
          </Typography>
          <Typography variant="caption" sx={{ color: "primary.main", letterSpacing: 1.2 }}>
            Yata Garasu
          </Typography>
        </Box>

        <Stack spacing={1.5}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              onClick={handleClose}
              sx={{
                justifyContent: "flex-start",
                color: "text.secondary",
                textTransform: "none",
                fontWeight: 600,
                px: 2,
                py: 1.2,
                borderRadius: "12px",
                "&:hover": {
                  color: "text.primary",
                  backgroundColor: "rgba(255,255,255,0.04)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}