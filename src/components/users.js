// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material
//import { Box } from '@mui/material';
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from './Page';
import AppTasks from './AppTasks';
import { Stocks } from "./Stocks";

 
// ----------------------------------------------------------------------

import React from "react";


function Welcome(props) {
   return <h1>Hello, {props.name} {props.city}</h1>
   
 }


class Users extends React.Component {
   render() {
      return (
        
         <Container maxWidth="xl">
           <Box sx={{ pb: 5 }}>
             <Typography variant="h4">Hi, Welcome back</Typography>
           </Box>
           <Grid container spacing={3}>
             <Grid item xs={12} sm={6} md={3}>
              one
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
               <Welcome name="Users" />
               <Welcome city="Hyderabad" />
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
              three
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
              <AppTasks />
             </Grid>
   
             <Grid item xs={12} md={6} lg={8}>
             <Stocks />
             </Grid>
   
             <Grid item xs={12} md={6} lg={4}>
               six
             </Grid>
   
             <Grid item xs={12} md={6} lg={8}>
           
             </Grid>
   
             <Grid item xs={12} md={6} lg={4}>
              eight
             </Grid>
   
             <Grid item xs={12} md={6} lg={8}>
               <Page />
             </Grid>
   
             <Grid item xs={12} md={6} lg={4}>
               nine
             </Grid>
   
             <Grid item xs={12} md={6} lg={4}>
             ten
             </Grid>
   
             <Grid item xs={12} md={6} lg={8}>
             eleven
             </Grid>
           </Grid>
         </Container>
      
      );
   }
}
export default Users;