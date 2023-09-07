import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordions.css'
 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
    <div className='accordion1'>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
       <AccordionSummary aria-controls="panel1d-content"  id="panel1d-header">
          <div className='accordionSummaery'>
          <Typography>Date</Typography>
          <Typography>Clear</Typography>   
          </div>    
        </AccordionSummary>        
          <AccordionDetails>

          <div className='datebtns' >
            <button  className='btns'>Today</button>
            <button  className='btns'>Tomorrow</button>
            <button  className='btns'>This Weekend</button>
          </div>
          </AccordionDetails>
      </Accordion>
    </div>
    <div className='accordion1'>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className='accordionSummaery' >
    
          <Typography>Categories</Typography>
          <Typography>Clear</Typography>   
    
        </div> 
        </AccordionSummary>
          <AccordionDetails>
          <div className='categorybtns'>
            <button className='btns'onClick={()=>{}}>Adventure</button>
            <button className='btns'>Unique Tours</button>
            <button className='btns'>Foods and Drinks</button>
            <button className='btns'>Gaming</button>
          </div>
               </AccordionDetails> 
      </Accordion>
    </div>
    <div className='accordion1'>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className='accordionSummaery' >
          <Typography>More Filters</Typography>
          <Typography>Clear</Typography>   
        </div>
    
        </AccordionSummary>
          <AccordionDetails>
          <div className='moreFilterbtns'>
            <button className='btns'>Outdoor Events</button>
            <button className='btns'>Kids Allowed</button>
            <button className='btns'>Fast Filling</button>
          </div>
               </AccordionDetails> 
      </Accordion>
    </div>  
    <div className='accordion1'>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className='accordionSummaery' >
          <Typography>Price</Typography>
          <Typography>Clear</Typography>   
        </div>
        </AccordionSummary>
          <AccordionDetails>
          <div className='datebtns'>
            <button className='btns'>Free </button>
            <button className='btns'>0-500</button>
            <button className='btns'>501-2000</button>
            <button className='btns'>Above 2000</button>
          </div>
        </AccordionDetails>  
      </Accordion>
    </div>
    <div><button className='Browsebtn'>Browse by Venues </button></div>
   
    </>
  );
}
