/*
import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '@material-ui/core/Button'

//card
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      backgroundColor:'white',
      borderRadius:'10px',
    },
    media: {
      height: '240px',
      backgroundColor:'black',
      display:'block',
      borderRadius:'10px',
    },
    action: {
        backgroundColor:'white',
    },
    content: {
        width:'800px',
        height:'210px',
    }
  });

function VisualiserModal(props) {
    const [ouvert, setOuvert] = useState(1)
    const classes = useStyles();

    return (
        <div>
            
            <ReactModal isOpen={props.open} onRequestClose={props.inverserOpen}
                        style={
                                {
                                    overlay : 
                                    {
                                        position:'fixed',
                                        width:'800px',
                                        height:'550px',
                                        top:'115px',
                                        bottom:'',
                                        right:'0',
                                        left:'395px',
                                        border:'2px solid #ccc',
                                        borderRadius:'30px',
                                    },
                                    content: 
                                    {
                                        top:'15px',
                                        bottom:'9px',
                                        right:'15px',
                                        left:'15px',
                                        //backgroundColor:'gray',
                                        border:'2px solid #00000',
                                        borderRadius:'15px',
                                        overflow:'auto',
                                        padding:'10px',
                                    }
                                } 
                              }
            >
                
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={props.coordone.image}
                        title="Contemplative Reptile"
                        />
                        <CardContent className={classes.content}>
                            <Typography style={{marginBottom:'39px'}} gutterBottom variant="h5" component="h3">
                                <b>Nom : &nbsp;&nbsp;</b>{props.coordone.name}
                            </Typography>
                            <Typography style={{marginBottom:'39px'}} gutterBottom variant="h6" component="h3">
                                <b>Email : &nbsp;&nbsp;</b>{props.coordone.email}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h3">
                                <b>Date de naissance : &nbsp;&nbsp;</b>{props.coordone.dateNai}
                            </Typography>

                        </CardContent>

                    </CardActionArea>

                    <CardActions className={classes.action}>
                        <Button fullWidth variant="contained" color="default" onClick={props.inverserOpen}>Fermer</Button>
                    </CardActions>
                </Card>

                

            </ReactModal>
            

        </div>
    )
}

export default VisualiserModal
*/