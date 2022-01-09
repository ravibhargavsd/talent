import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { characterestics, skills, socialProfile } from './config';
import { getDataFromProperty, getStringFormatDataFromProperty } from '../shared/methods';



export const Stocks = () => {
  const title1 = "Personal & Location Details";
  const [expanded, setExpanded] = React.useState(false);
  const [stockData, setStockData] = React.useState([]);
  const theme = useTheme();

  React.useEffect(() => {
    fetch('http://localhost:3000/getProfile')
      .then(res => res.json())
      .then(res => {
        setStockData(res);
      })
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={'stockdata_' + key}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={data.profile_photo}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {data.display_name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {data.headline}
                    </Typography>
                    <Typography component="div" variant="h5">
                      {data.profile_id}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    {data.social.details.map((data, key) => {
                      return (
                        <IconButton key={key}>
                          {data.icon_name}
                        </IconButton>
                      )
                    }
                    )}
                  </Box>
                </Box>
              </Card>

              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {title1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    {data.profile_intro.points}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Industry & Physical characterestics
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">

                          <TableBody>
                            {characterestics.slice(0, 4).map((item, i) => (
                              <TableRow key={'characterestics_left_' + i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}            >
                                <TableCell align="left">{item.label}</TableCell>
                                <TableCell align="right">
                                  {item.subProperties ? 
                                    item.subProperties.map((_prop) => data.physical_info[item.property][_prop]).join(item.concatinate + ' ') :
                                    data.physical_info[item.property]
                                  }
                                </TableCell>
                              </TableRow>
                            ))}

                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={6}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">

                          <TableBody>
                            {characterestics.slice(4).map((item, i) => (
                              <TableRow key={'characterestics_right_' + i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}            >
                                <TableCell align="left">{item.label}</TableCell>
                                <TableCell align="right">
                                  {item.subProperties ? 
                                    item.subProperties.map((_prop) => data.physical_info[item.property][_prop]).join(item.concatinate + ' ') :
                                    data.physical_info[item.property]
                                  }
                                </TableCell>
                              </TableRow>
                            ))}

                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>

                  </Grid>

                </AccordionDetails>
              </Accordion>


              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Training, Skillset & Interests
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">

                          <TableBody>
                            {skills.primary.map((skill, i) => (
                              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}            >
                                <TableCell align="left">{skill.label}</TableCell>
                                <TableCell align="right">
                                  {(getDataFromProperty(data, skill.dataProperty)).map((item, key) => {
                                    return (
                                      <Typography key={key}>
                                        {item[skill.displayProperty]}
                                      </Typography>
                                    )
                                  })}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>

                    {skills.secondary.map((grid, i) => (
                      <Grid key={'grid_' + i} item xs={12}>
                        <TableContainer component={Paper} >
                          <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                              {grid.map((skill, j) => (
                                <TableRow key={'skill_left_'+j} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}            >
                                  <TableCell align="left">{skill.label}</TableCell>
                                  <TableCell align="right">{getStringFormatDataFromProperty(data, skill.property)}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    ))}

                  </Grid>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Profile Intro & Credits
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    <TableContainer component={Paper} >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                          {socialProfile.map((profile, i) => (
                            <TableRow key={'profile_' + i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell align="left">{profile.label}</TableCell>
                              <TableCell align="right">{getStringFormatDataFromProperty(data, profile.property)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Portfolio & showreels
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    {data.profile_intro.points}
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </div>


          );
        })}       </div>
    </>
  );


};