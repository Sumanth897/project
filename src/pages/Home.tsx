import { Container, Typography, Grid, Card, CardContent, Button, Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      icon: <SchoolIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Expert Tutoring',
      description: 'Connect with professional tutors for personalized learning experiences.',
      color: '#60a5fa',
    },
    {
      icon: <LanguageIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      title: 'Language Learning',
      description: 'Master new languages with native speakers and certified instructors.',
      color: '#f472b6',
    },
    {
      icon: <MusicNoteIcon fontSize="large" sx={{ color: theme.palette.primary.dark }} />,
      title: 'Music Lessons',
      description: 'Learn various musical instruments from experienced musicians.',
      color: '#818cf8',
    },
  ];

  const stats = [
    {
      icon: <OnlinePredictionIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      value: '1000+',
      label: 'Live Sessions',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      value: '50,000+',
      label: 'Students',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: theme.palette.primary.dark }} />,
      value: '95%',
      label: 'Success Rate',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 6,
          borderRadius: { xs: '0 0 2rem 2rem', md: '0 0 8rem 8rem' },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(https://source.unsplash.com/random/1920x1080/?education) center/cover',
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Welcome to EduMaster Pro
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Transform your learning journey with personalized online tutoring and expert guidance
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/courses')}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  Explore Courses
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/live-tutoring')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Start Learning
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  textAlign: 'center',
                  py: 4,
                  height: '100%',
                }}
              >
                <CardContent>
                  {stat.icon}
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      my: 2,
                      fontWeight: 700,
                      background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${feature.color})`,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', pt: 4 }}>
                  {feature.icon}
                  <Typography variant="h5" component="h3" sx={{ my: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mt: 8, 
            mb: 4,
            py: 8,
            px: 4,
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: theme.shadows[1],
          }}
        >
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Transform Your Learning?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Join thousands of successful students who have already taken the first step
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/live-tutoring')}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home; 