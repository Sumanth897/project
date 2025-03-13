import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  MenuItem,
  Box,
  Chip,
} from '@mui/material';

const COURSES = [
  {
    id: 1,
    title: 'Piano Masterclass',
    instructor: 'John Smith',
    category: 'Music',
    price: 49.99,
    image: 'https://source.unsplash.com/random/800x600/?piano',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Spanish for Beginners',
    instructor: 'Maria Garcia',
    category: 'Language',
    price: 39.99,
    image: 'https://source.unsplash.com/random/800x600/?spain',
    level: 'Beginner',
  },
  {
    id: 3,
    title: 'Advanced Guitar Techniques',
    instructor: 'David Wilson',
    category: 'Music',
    price: 59.99,
    image: 'https://source.unsplash.com/random/800x600/?guitar',
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'French Conversation',
    instructor: 'Sophie Martin',
    category: 'Language',
    price: 44.99,
    image: 'https://source.unsplash.com/random/800x600/?france',
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'Sitar Basics',
    instructor: 'Raj Sharma',
    category: 'Music',
    price: 54.99,
    image: 'https://source.unsplash.com/random/800x600/?sitar',
    level: 'Beginner',
  },
  {
    id: 6,
    title: 'English Grammar Essentials',
    instructor: 'Michael Johnson',
    category: 'Language',
    price: 29.99,
    image: 'https://source.unsplash.com/random/800x600/?english',
    level: 'Intermediate',
  },
  {
    id: 7,
    title: 'Digital Photography Essentials',
    instructor: 'Emily Davis',
    category: 'Art',
    price: 34.99,
    image: 'https://source.unsplash.com/random/800x600/?photography',
    level: 'Beginner',
  },
  {
    id: 8,
    title: 'Intermediate Piano Techniques',
    instructor: 'Carlos Rodriguez',
    category: 'Music',
    price: 59.99,
    image: 'https://source.unsplash.com/random/800x600/?piano',
    level: 'Intermediate',
  },
  {
    id: 9,
    title: 'Introduction to Programming',
    instructor: 'Alice Brown',
    category: 'Technology',
    price: 69.99,
    image: 'https://source.unsplash.com/random/800x600/?coding',
    level: 'Beginner',
  },
  {
    id: 10,
    title: 'SAT Prep Mastery',
    instructor: 'Kevin Lee',
    category: 'Test Prep',
    price: 79.99,
    image: 'https://source.unsplash.com/random/800x600/?exam',
    level: 'Advanced',
  },
  {
    id: 11,
    title: 'Creative Writing Workshop',
    instructor: 'Laura Martinez',
    category: 'Literature',
    price: 44.99,
    image: 'https://source.unsplash.com/random/800x600/?writing',
    level: 'Intermediate',
  },
  {
    id: 12,
    title: 'Guitar for Beginners',
    instructor: 'Mark Thompson',
    category: 'Music',
    price: 39.99,
    image: 'https://source.unsplash.com/random/800x600/?guitar',
    level: 'Beginner',
  },
  {
    id: 13,
    title: 'Conversational Mandarin',
    instructor: 'Ling Zhao',
    category: 'Language',
    price: 49.99,
    image: 'https://source.unsplash.com/random/800x600/?china',
    level: 'Intermediate',
  },
  {
    id: 14,
    title: 'Economics 101',
    instructor: 'Samantha Green',
    category: 'Economics',
    price: 29.99,
    image: 'https://source.unsplash.com/random/800x600/?economics',
    level: 'Beginner',
  },
  {
    id: 15,
    title: 'Advanced French Literature',
    instructor: 'Jean-Paul Durand',
    category: 'Literature',
    price: 54.99,
    image: 'https://source.unsplash.com/random/800x600/?french',
    level: 'Advanced',
  },
  {
    id: 16,
    title: 'Mastering the Violin',
    instructor: 'Isabella Rossi',
    category: 'Music',
    price: 64.99,
    image: 'https://source.unsplash.com/random/800x600/?violin',
    level: 'Advanced',
  },
  {
    id: 17,
    title: 'Introduction to Python Programming',
    instructor: 'Alice Johnson',
    category: 'Programming',
    price: 39.99,
    image: 'https://source.unsplash.com/random/800x600/?python',
    level: 'Beginner',
  },
  {
    id: 18,
    title: 'JavaScript Essentials',
    instructor: 'Bob Martin',
    category: 'Programming',
    price: 49.99,
    image: 'https://source.unsplash.com/random/800x600/?javascript',
    level: 'Beginner',
  },
  {
    id: 19,
    title: 'Advanced C++ Techniques',
    instructor: 'Carol Smith',
    category: 'Programming',
    price: 59.99,
    image: 'https://source.unsplash.com/random/800x600/?cpp',
    level: 'Advanced',
  },
  {
    id: 20,
    title: 'Full Stack Web Development',
    instructor: 'David Lee',
    category: 'Programming',
    price: 79.99,
    image: 'https://source.unsplash.com/random/800x600/?webdevelopment',
    level: 'Intermediate',
  },
  {
    id: 21,
    title: 'Machine Learning A-Z',
    instructor: 'Eva Green',
    category: 'AI/ML',
    price: 89.99,
    image: 'https://source.unsplash.com/random/800x600/?machinelearning',
    level: 'Intermediate',
  },
  {
    id: 22,
    title: 'Deep Learning with TensorFlow',
    instructor: 'Frank Kim',
    category: 'AI/ML',
    price: 99.99,
    image: 'https://source.unsplash.com/random/800x600/?deeplearning',
    level: 'Advanced',
  },
  {
    id: 23,
    title: 'Data Science Bootcamp',
    instructor: 'Grace Park',
    category: 'AI/ML',
    price: 109.99,
    image: 'https://source.unsplash.com/random/800x600/?datascience',
    level: 'Beginner',
  },
  {
    id: 24,
    title: 'Natural Language Processing Fundamentals',
    instructor: 'Henry Adams',
    category: 'AI/ML',
    price: 79.99,
    image: 'https://source.unsplash.com/random/800x600/?nlp',
    level: 'Intermediate',
  },
  {
    id: 25,
    title: 'Computer Vision with Python',
    instructor: 'Irene Zhao',
    category: 'AI/ML',
    price: 89.99,
    image: 'https://source.unsplash.com/random/800x600/?computervision',
    level: 'Intermediate',
  },
  {
    id: 26,
    title: 'Reinforcement Learning in Practice',
    instructor: 'Jack Wilson',
    category: 'AI/ML',
    price: 119.99,
    image: 'https://source.unsplash.com/random/800x600/?reinforcementlearning',
    level: 'Advanced',
  }
  
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');

  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter;
    const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Available Courses
      </Typography>

      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Search courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <MenuItem value="All">All Categories</MenuItem>
            <MenuItem value="Music">Music</MenuItem>
            <MenuItem value="Language">Language</MenuItem>
            <MenuItem value="Programming">Programming</MenuItem>
            <MenuItem value="AI/ML">AI/ML</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Level"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <MenuItem value="All">All Levels</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {/* Course Grid */}
      <Grid container spacing={4}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Instructor: {course.instructor}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label={course.category} color="primary" size="small" sx={{ mr: 1 }} />
                  <Chip label={course.level} color="secondary" size="small" />
                </Box>
                <Typography variant="h6" color="primary">
                  ${course.price}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                sx={{ m: 2 }}
              >
                Enroll Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses; 