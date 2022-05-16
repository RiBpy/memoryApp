import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import logo from "./assets/logo.png"
import Posts from "./components/posts/posts"
import Form from "./components/form/form"
 const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color="inherit">
        <Typography variant='h2' align='center'>
          Memories
        </Typography>
        <img src={logo} alt="" />
      </AppBar>
      <Grow in>
         <Container>
           <Grid container="space-between" alignItems='stretch' spacing={4}>
             <Grid item xs={12} sm={8}>
                  <Posts/>
             </Grid>
             <Grid item xs={12} sm={4}>
               <Form/>
             </Grid>
           </Grid>
         </Container>
      </Grow>
    </Container>
  )
}
export default App