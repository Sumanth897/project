import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Courses', path: '/courses', icon: <LibraryBooksIcon /> },
    { text: 'Live Tutoring', path: '/live-tutoring', icon: <LiveTvIcon /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.default', borderBottom: 1, borderColor: 'divider' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
          <RouterLink to="/" style={{ 
            textDecoration: 'none', 
            color: theme.palette.primary.main, 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            <SchoolIcon sx={{ 
              mr: 1, 
              fontSize: '2rem',
              color: theme.palette.primary.main 
            }} />
            <Typography variant="h5" component="div" sx={{ 
              fontWeight: 700,
              background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              EduMaster Pro
            </Typography>
          </RouterLink>
          
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="primary"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: 2 }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.path} 
                    component={RouterLink} 
                    to={item.path}
                    onClick={handleClose}
                    sx={{
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      gap: 1,
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  color="primary"
                  startIcon={item.icon}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '3px',
                      bgcolor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    fontWeight: isActive(item.path) ? 700 : 500,
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 