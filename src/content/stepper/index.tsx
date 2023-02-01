import { Helmet } from 'react-helmet-async';
import PageHeader from './StepperHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import MyForm from './MyForm';



function MyStepper() {
  return (
    <>
    <Helmet>
      <title>Stepper  - Form</title>
    </Helmet>
    <PageTitleWrapper>
      <PageHeader />
    </PageTitleWrapper>

    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}>

        <Grid item xs={12} >
        <MyForm />
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </>
  )
}

export default MyStepper