import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Mock data - in a real app, this would come from an API
const TUTOR_DATA = {
  id: '1',
  name: 'Dr. Sarah Johnson',
  title: 'Mathematics & Physics Expert',
  rating: 4.8,
  totalReviews: 124,
  hourlyRate: 45,
  avatar: 'https://source.unsplash.com/random/200x200/?professor',
  specializations: ['Mathematics', 'Physics', 'Calculus'],
  languages: ['English', 'French'],
  education: [
    'Ph.D. in Mathematics from MIT',
    'M.Sc. in Physics from Stanford University',
    'B.Sc. in Mathematics from Harvard University',
  ],
  experience: '8 years of teaching experience',
  about: 'Passionate educator with extensive experience in teaching mathematics and physics at all levels. Specializes in making complex concepts easy to understand through practical examples and interactive learning methods.',
  achievements: [
    'Published researcher in Mathematical Physics',
    'Winner of Excellence in Teaching Award 2022',
    'Certified Online Education Specialist',
  ],
};

const TutorProfile = () => {
  const { id } = useParams();
  // In a real app, you would fetch the tutor data based on the ID
  const tutor = TUTOR_DATA;

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Left Column - Basic Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                src={tutor.avatar}
                sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {tutor.name}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {tutor.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Rating value={tutor.rating} precision={0.1} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({tutor.totalReviews} reviews)
                </Typography>
              </Box>
              <Typography variant="h6" color="primary" gutterBottom>
                ${tutor.hourlyRate}/hour
              </Typography>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Book a Session
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Detailed Info */}
        <Grid item xs={12} md={8}>
          {/* About Section */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" paragraph>
                {tutor.about}
              </Typography>

              <Typography variant="h6" gutterBottom>
                Specializations
              </Typography>
              <Box sx={{ mb: 2 }}>
                {tutor.specializations.map((spec) => (
                  <Chip
                    key={spec}
                    label={spec}
                    icon={<SchoolIcon />}
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom>
                Languages
              </Typography>
              <Box sx={{ mb: 2 }}>
                {tutor.languages.map((lang) => (
                  <Chip
                    key={lang}
                    label={lang}
                    icon={<LanguageIcon />}
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Education & Experience */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <List>
                {tutor.education.map((edu, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary={edu} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Experience
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary={tutor.experience} />
              </ListItem>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Achievements
              </Typography>
              <List>
                {tutor.achievements.map((achievement, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TutorProfile; 