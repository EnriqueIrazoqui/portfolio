import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

 function Navbar({ language, toggleLanguage, content }) {
  const navItems = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.projects, href: "#projects" },
    { label: content.nav.experience, href: "#experience" },
    { label: content.nav.contact, href: "#contact" },
  ];

  return (
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;