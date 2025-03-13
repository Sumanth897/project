import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Rating,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';

const TUTORS = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Mathematics',
    rating: 4.8,
    experience: '8 years',
    languages: ['English', 'French'],
    price: 45,
    avatar: 'https://source.unsplash.com/random/150x150/?woman',
    availability: true,
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    specialization: 'Physics',
    rating: 4.9,
    experience: '12 years',
    languages: ['English', 'Mandarin'],
    price: 50,
    avatar: 'https://source.unsplash.com/random/150x150/?man',
    availability: true,
  },
  {
    id: 3,
    name: 'Lisa Anderson',
    specialization: 'Piano',
    rating: 4.7,
    experience: '6 years',
    languages: ['English', 'German'],
    price: 40,
    avatar: 'https://source.unsplash.com/random/150x150/?musician',
    availability: false,
  },
];

const LiveTutoring = () => {
  const [open, setOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleClickOpen = (tutor: any) => {
    setSelectedTutor(tutor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleSchedule = () => {
    // Here you would typically make an API call to schedule the session
    console.log('Scheduling session with:', selectedTutor, selectedDate, selectedTime);
    handleClose();
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Live Tutoring Sessions
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Connect with expert tutors in real-time for personalized learning
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {TUTORS.map((tutor) => (
          <Grid item xs={12} md={6} lg={4} key={tutor.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={tutor.avatar}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{tutor.name}</Typography>
                    <Typography color="text.secondary">{tutor.specialization}</Typography>
                    <Rating value={tutor.rating} precision={0.1} readOnly size="small" />
                  </Box>
                </Box>

                <Typography variant="body2" gutterBottom>
                  Experience: {tutor.experience}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {tutor.languages.map((lang) => (
                    <Chip
                      key={lang}
                      label={lang}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Typography variant="h6" color="primary" gutterBottom>
                  ${tutor.price}/hour
                </Typography>

                <Chip
                  label={tutor.availability ? 'Available Now' : 'Unavailable'}
                  color={tutor.availability ? 'success' : 'default'}
                  sx={{ mt: 1 }}
                />
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleClickOpen(tutor)}
                  disabled={!tutor.availability}
                >
                  Schedule Session
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Scheduling Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule Session with {selectedTutor?.name}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Select Date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Select Time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            sx={{ mt: 2 }}
          >
            {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSchedule}
            variant="contained"
            disabled={!selectedDate || !selectedTime}
          >
            Schedule
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LiveTutoring; 