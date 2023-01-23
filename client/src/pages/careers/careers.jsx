import  {React,useState, Fragment } from 'react';
import './careers.css'
import TopBar from './topBarCareers';
import {Typography, Grid, Box , Divider} from "@mui/material"
import LinkCard from './LinkCard';

const dummy =[{
  id:1,
  Location : "Assangi",
  Role : "SDE Intern",
  createdAt : new Date()
},{
  id:2,
  Location : "Hostel J",
  Role : "Senior SDE",
  createdAt : new Date()
},{
  id:3,
  Location : "Acad. Building",
  Role : "DevOps Engineer",
  createdAt : new Date()
},{
  id:4,
  Location : "Nescafe",
  Role : "Human Resources",
  createdAt : new Date()
},
]



const Careers = () => {
  
  const [openModel,setOpenModel] = useState(false);

  return (
    <>
    <br></br>
    <h1>Careers At EarnBazaar</h1>
     <TopBar/>
      <Box mt={5}>
        <Grid container justifyContent='center'>
          <Grid item xs={8}>
          <Box display="flex" mb={5}>
              <Typography mr={3} variant="h4">Jobs</Typography>
              </Box>
          {
            dummy.sort(
              (prev,next)=>
              next.createdAt - prev.createdAt
            ).map((ele,idx)=>
            <Fragment key={ele}>
            <LinkCard id={ele.id} Location={ele.Location} Role={ele.Role} createdAt={ele.createdAt}/>
            {
              idx!==ele.length - 1 &&
              <Box my={2}><Divider/></Box>
            }
            </Fragment>
            
            )}

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Careers