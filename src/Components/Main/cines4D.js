import {Grid,Box, Typography} from '@mui/material/';
import Cine4Dimg from '../../img/imgCine.svg'


export default function Cines4d() {
    return (
      <>
        <Box  sx={{
            margin: "0",
            padding: "15px",
            alignItems:"center",
            borderRadius:"10px",
            boxShadow:"10px",
            textAlign:"center"
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Diagrama_de_teatro_4D.jpg/330px-Diagrama_de_teatro_4D.jpg' alt='' maxWidth="100%" maxHeight="100%" /> */}
              <img src={Cine4Dimg} alt='' maxWidth="100%" maxHeight="100%" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ color:"rgb(255,255,255)",fontSize:"auto", textAlign:"center",minWidth:"100%", maxHeight:"100%"}}>
              <Typography variant='h6' color='#FF7700'>CINES 4D</Typography>
              <Typography variant='body1' sx={{
                textAlign: 'left',

              }}>
              El sistema 4D ofrece una experiencia innovadora e inmersiva para el público. Las 104 butacas con movimientos de sincronización combinados (arriba, abajo, atrás, adelante, lateral) y tecnología E-MOTION (agua, aire, aromas, vibración, impacto de aire, temblor), junto con los efectos de la sala (viento, burbujas, luces) que interactúan en simultaneidad con la película, brindarán al público una nueva forma de vivir el cine. Ahora la película no solo se ve, sino que se siente y experimenta.
              </Typography>
              </Box>
            </Grid>
        </Grid> 
        </Box>
        
      </>
      
  );
  }