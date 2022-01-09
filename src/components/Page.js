import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Page() {
  const [expanded, setExpanded] = React.useState(false);

  const itemData = [
    {
      des: 'Suspendisse ullamcorper gravida tempor. Aliquam feugiat pharetra massa. Aenean vel turpis enim. Duis a neque a neque tincidunt varius vitae nec neque. Vivamus magna elit, convallis id libero et, varius laoreet tellus. Quisque id risus mi. Aenean tellus lectus, sodales vitae ligula in, pretium viverra turpis. Pellentesque viverra purus neque, sit amet efficitur augue venenatis a. Quisque et nulla finibus, efficitur nisl ut, commodo metus',
      title: 'Fern',
    },
    {
      des: 'Vestibulum feugiat diam ac augue condimentum rutrum. Nulla facilisi. Suspendisse ut felis tincidunt, fermentum erat ut, facilisis ex. Integer suscipit erat et feugiat auctor. Proin vel sapien dapibus, tempus ipsum eu, laoreet ligula. Donec mi turpis, consequat sed odio nec, iaculis eleifend nunc. Vestibulum ',
      title: 'Snacks',
    },
    {
      des: 'Duis congue magna pharetra maximus dictum. Nullam sollicitudin, sapien id mollis ornare, ex orci feugiat urna, sit amet dignissim nulla quam nec nisl.',
      title: 'Mushrooms',
    },
    {
      des: 'Pellentesque dapibus enim non magna aliquet fermentum. Integer leo enim, facilisis at blandit quis, pharetra sit amet risus. Aenean et commodo odio. Sed non urna aliquet, pretium lectus non, maximus turpis. Mauris pellentesque tempus leo, vel malesuada ante vehicula ac. Nam condimentum felis quis leo accums',
      title: 'Tower',
    },
    {
      des: 'Pellentesque viverra purus neque, sit amet efficitur augue venenatis a. Quisque et nulla finibus, efficitur nisl ut, commodo metus. Ut eget ma',
      title: 'Sea star',
    },
    {
      des: 'Etiam sit amet mauris at mi pellentesque scelerisque nec sed ante. Morbi vitae nulla turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
      title: 'Honey',
    } 
   
  ];
 


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    
     <div>
        {itemData.map((title, index) => (
       <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
           <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1bh-content"
           id="panel1bh-header" 
           >
           <Typography sx={{ width: '33%', flexShrink: 0 }}>
           {title.title}
           </Typography> 
         </AccordionSummary> 
            <AccordionDetails>
             <Typography >
             {title.des}
            </Typography> 
             </AccordionDetails> 
       </Accordion>
   ))}      
     </div>

 
  );
}
