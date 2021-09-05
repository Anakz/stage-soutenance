import React,{ useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal , Button} from '@material-ui/core';

//md5
import md5 from 'md5';

//card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function ModalParametrable(props) {

    const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: styleWidth(),
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 3),
      top: styleTop(),
      left : styleLeft(),
      borderRadius : styleBorderRadius(),
      height : styleHeight(),
        },
        root: {
            width: '420px',
            borderRadius: styleBorderRadius(),
            display : styleDisplay(),
          },
        media: {
            height: '250px',//'250px'
            width:'446px',//'446px'
            display:'block',
            borderRadius:'10px',
            backgroundColor: color ,
            // color: 'white' , 
          },
          media1: {
              height: '420px',
              width:'446px',
              display:'block',
              borderRadius:'10px',
              textAlign:'end',
            backgroundColor: color ,
            //   color: 'white' ,
            },
          
    }));

    //Function for the Top
    const styleTop = () =>
    {
        if (props.coordone.etat===0) 
        {
            return '90px';            
        }
        else if (props.coordone.etat===1) 
        {
            return '150px';
        }
    }

    //Function pour modifier le style depend de l'etat
    const styleBorderRadius = () =>
    {
        if (props.coordone.etat===0) 
        {
            return '5px';            
        }
        else if (props.coordone.etat===1) 
        {
            return '600px';
        }
    }
    const styleWidth = () =>
    {
        if (props.coordone.etat===0) 
        {
            return '450px';            
        }
        else if (props.coordone.etat===1) 
        {
            return '420px';
        }
    }
    const styleHeight = () =>
    {
        if (props.coordone.etat===0) 
        {
            return '640px';            
        }
        else if (props.coordone.etat===1) 
        {
            return '420px';
        }
    }
    const styleLeft = () =>
    {
        if (props.coordone.etat===0) 
        {
            return '35%';//'542px'            
        }
        else if (props.coordone.etat===1) 
        {
            return '8%';//'240px'
        }
    }
    const styleDisplay = () =>
    {
        if (props.coordone.etat===0) 
        {
            return 'center';            
        }
        else if (props.coordone.etat===1) 
        {
            return '';
        }
    }
    /* ------------------------------------------------------------ */

    //Change The Color of the Avatar
    const Colors = {};
    Colors.generate = function(str) {
      return "#" + md5(str).slice(0, 6);
    };
    
    //Variables
    const [color, setColor] = useState("grey")

    useEffect(() => {

      if (props.coordone.name) {
        const color = Colors.generate(props.coordone.name)
        setColor(color)
      }
    },[props.coordone.name])

    //Get the First name and the second name
    let fakename = props.coordone.name+"."
    let matched = fakename.match(/\S+/gi)
    let prenom = matched[0]
    let nom = matched[1]
    
    const classes = useStyles();

    return (
        <div>

            <Modal
                open={props.open}
                onClose={props.CloseModalParametrable}
            >
            <div  className={classes.paper}>
            {props.coordone.etat === 0?
            <div>
                    <div className="mb-2" style={{backgroundColor:'#dbdbdb'}}>
                        <b style={{marginLeft:'121px'}}>Informations de l'utilisateur</b>
                        <Button style={{marginLeft:'50px'}} onClick={props.CloseModalParametrable}>X</Button>
                    </div>
                
                    <div className="m-2">

                    <Card className={classes.root}>
                        <CardActionArea className="center">
                            <CardMedia
                            className={classes.media}
                            image={props.coordone.image}
                            title={props.coordone.name}
                            children='.'
                            src='0'
                            />
                            {props.coordone.image ===undefined ?
                                    <span style={{width:'420px',textAlign:'center',top:'7%',position:'absolute',height:'600px'}}>
                                        <h5 style={{marginTop:'7px'}}>
                                            <b style={{color: 'white' , fontSize:'130px'}}>{prenom[0]+nom[0]}</b>
                                        </h5>
                                    </span> : ''
                                    }
                            <CardContent className={classes.content}>

                                <Typography style={{marginBottom:'5px'}} gutterBottom variant="h6" component="h3">
                                    <b>Nom complet : &nbsp;&nbsp;</b>{props.coordone.name}
                                </Typography>
                                <Typography style={{marginBottom:'5px'}} gutterBottom variant="h6" component="h3">
                                    <b>Email : &nbsp;&nbsp;</b>{props.coordone.email}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <b>Nom de l'entreprise : &nbsp;&nbsp;</b>{props.coordone.company_name}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <b>Site web : &nbsp;&nbsp;</b>{props.coordone.website}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <b>Téléphone : &nbsp;&nbsp;</b>{props.coordone.phone}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <b>Adress : &nbsp;&nbsp;</b>{props.coordone.adress}{/* {props.coordone.adress.street},
                                                                {props.coordone.adress.suite},
                                                                {props.coordone.adress.city},
                                                                {props.coordone.adress.zipcode} */}
                                </Typography>

                            </CardContent>
                        </CardActionArea>

                    </Card>

                    <Button onClick={props.CloseModalParametrable} fullWidth variant="contained" style={{marginTop:'8px'}}>Fermer</Button>
                    </div>
            </div>
                        :props.coordone.etat === 1? 
                        
                        <Card className={classes.root}  >
                            <CardActionArea >
                                <CardMedia
                                className={classes.media1 }
                                image={props.coordone.image}
                                title={props.coordone.name}
                                children='.'
                                src='0'
                                />

                                    {props.coordone.image ===undefined ?
                                    <span style={{color: 'white' , width:'420px',textAlign:'center',position:'absolute',top:'29%',height:'600px'}}>
                                        <h5 style={{marginTop:'7px'}}>
                                            <b style={{fontSize:'130px'}}>{prenom[0]+nom[0]}</b>
                                        </h5>
                                    </span> : ''
                                    }
                                
                                    <span style={{backgroundColor:'#cecece',width:'420px',textAlign:'center',color:'black',position:'absolute',top:'0px',height:'30px'}}>
                                        <h5 style={{marginTop:'7px'}}>
                                            <b>{props.coordone.name}</b>
                                        </h5>
                                    </span>
                                

                            </CardActionArea>
                        </Card>

                        :''
            }
            </div>
  
            </Modal>

        </div>
    )
}

export default ModalParametrable
