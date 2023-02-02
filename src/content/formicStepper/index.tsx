import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { Formik, Form, Field, FormikState, FormikHelpers } from "formik";


function formicStepper() {
  return (
    <>
      <Helmet>
        <title>Stepper  - Form</title>
      </Helmet>
      <PageTitleWrapper>
        <Grid display="flex"
              justifyContent="center"
              alignItems="center"
              >
        <h1>Header</h1>
        </Grid>
      </PageTitleWrapper>

      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={3}>
          <Grid item xs={12} >
          <h1> Content </h1>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default formicStepper