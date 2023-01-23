import {React,memo,useState} from 'react'
import { Typography , Button , Box ,  } from '@mui/material';
import {format} from 'date-fns';
import Apply from './Apply';

const LinkCard = ({Location,Role,createdAt}) => {

    const [open,setOpen] = useState(false);

  return (
    <>
    {open && <Apply handleClose={()=>setOpen(false)}/>}
   <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box>
            <Typography>Posted At {format (createdAt,'d MMM, HH:mm')}</Typography>
            <Box my={2}>
                <Typography style={{marginBottom:"5px"}} variant="h5">{Role}</Typography>
            </Box>
            <Box  display="flex" alignItems="center">
                <Typography >Location : {Location}</Typography>
                <Box mx={2}><Button  onClick={()=>setOpen(true)} size="small" variant="outlined">Apply</Button></Box>
            </Box>
        </Box>
   </Box>
   </>
  )
}

export default LinkCard