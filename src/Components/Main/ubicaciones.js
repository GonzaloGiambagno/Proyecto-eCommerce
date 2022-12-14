import {Box, Grid, Button,useTheme} from '@mui/material';
import {useState} from "react";

const cines={
        avellaneda:{
            name:"Cinépolis Avellaneda",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620804.7926629672!2d-58.78857216637837!3d-34.60175436715176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4731f74cff%3A0xdffdd4bcf49d6a86!2sCin%C3%A9polis%20Avellaneda!5e0!3m2!1ses-419!2sar!4v1653420943117!5m2!1ses-419!2sar"
        },
        merlo:{
            name:"Cinespolis Merlo",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620879.6604314651!2d-59.22461624510293!3d-34.59173749829965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf8884b8fa4f%3A0xe63daf2637b31dad!2sCin%C3%A9polis%20Merlo!5e0!3m2!1ses-419!2sar!4v1653421065530!5m2!1ses-419!2sar"
        },
        recoleta:{
            name:"Cinepolis Recoleta",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620879.6604314651!2d-59.22461624510293!3d-34.59173749829965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa28fffbeeb%3A0x1db9af96c3aab6b0!2sCinepolis%20Recoleta!5e0!3m2!1ses-419!2sar!4v1653424616226!5m2!1ses-419!2sar"
        },
        pilar:{
            name:"Cinepolis Pilar",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890954.2495254405!2d-59.5288735301645!3d-34.57996601237201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c542b841807%3A0xe8b64cb6d59463c6!2sCin%C3%A9polis%20Pilar!5e0!3m2!1ses-419!2sar!4v1653424652929!5m2!1ses-419!2sar"
        },
        lujan:{
            name:"Cinepolis Lujan",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523373.9856874761!2d-59.97077767370633!3d-35.00311883834822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7d741d9ca29b%3A0xfdccaddee96b263f!2zQ2luw6lwb2xpcyBMdWrDoW4!5e0!3m2!1ses-419!2sar!4v1653424721588!5m2!1ses-419!2sar"
        }
    }




export default function Ubicaciones() {
    // eslint-disable-next-line no-unused-vars
    const theme = useTheme();
    const [ubi,setUbi]=useState(cines.avellaneda.url)
    return (
        <Box  sx={{
            margin: "0",
            padding: "15px",
            alignItems:"center",
            borderRadius:"10px",
            boxShadow:"10px",
            background: 'rgba(31, 40, 51, 0.2)',
            textAlign:"center"
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <iframe src={ubi} maxWidht="100%" maxHeight="100%" display="block" border="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mapa'></iframe>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button onClick={()=>setUbi(cines.avellaneda.url)} color="secondary">Cinépolis Avellaneda</Button>
                    <Button onClick={()=>setUbi(cines.merlo.url)} color="secondary">Cinépolis Merlo</Button>
                    <Button onClick={()=>setUbi(cines.recoleta.url)} color="secondary">Cinepolis Recoleta</Button>
                    <Button onClick={()=>setUbi(cines.pilar.url)} color="secondary">Cinépolis Pilar</Button>
                    <Button onClick={()=>setUbi(cines.lujan.url)} color="secondary">Cinépolis Luján</Button>
                </Grid>
            </Grid>
        </Box>
    )
}