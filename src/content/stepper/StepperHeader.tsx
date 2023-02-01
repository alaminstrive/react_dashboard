import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function StepperHeader() {
  const user = {
    name: 'Alam Jamal',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Stepper Form 
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, This is Simple Stepper Form
        </Typography>
      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  );
}

export default StepperHeader;
