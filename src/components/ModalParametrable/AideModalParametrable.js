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
      top:'150px',
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
            backgroundColor:  getRandomBackGroudColor() ,
            // color: getRandomColor() ,
          },
          media1: {
              height: '420px',
              width:'446px',
              display:'block',
              borderRadius:'10px',
              textAlign:'end',
              backgroundColor: getRandomBackGroudColor() ,
            //   color: getRandomColor() ,
            },
          
    }));

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
            return '540px';            
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
            return '18%';//'240px'
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
    //Fonction pour changer le couleur de l'écriture de l'avatar
    function getRandomColor() 
    {
        var ran=['white','#2c5c34', '#7e4d1d', '#ffffff', '#ffffff', '#ffffff', 'black']
        var k
        
        {   props.coordone.name[0] >='A' && props.coordone.name[0] <='E' || props.coordone.name[0] >='a' && props.standardCoordone.name[0]<='e' ? k=0 :
            props.coordone.name[0] >='F' && props.coordone.name[0] <='I' || props.coordone.name[0] >='f' && props.standardCoordone.name[0]<='i' ? k=1 :
            props.coordone.name[0] >='J' && props.coordone.name[0] <='N' || props.coordone.name[0] >='j' && props.standardCoordone.name[0]<='n' ? k=2 :
            props.coordone.name[0] >='O' && props.coordone.name[0] <='R' || props.coordone.name[0] >='o' && props.standardCoordone.name[0]<='r' ? k=3 :
            props.coordone.name[0] >='S' && props.coordone.name[0] <='V' || props.coordone.name[0] >='s' && props.standardCoordone.name[0]<='v' ? k=4 :
            props.coordone.name[0] >='W' && props.coordone.name[0] <='Z' || props.coordone.name[0] >='w' && props.standardCoordone.name[0]<='z' ? k=5 : k=6
        }
        var color=ran[k]
        return color;
      }

    // //Fonction pour colorer backgroud de l'avatar



    function getRandomBackGroudColor() 
    {
        //var van=['#6011F1','#D868F2', '#F48BC7', '#8EECF8', '#5749DD', '#092C91']
        var ran=['#ff99cc','#80bfff', '#ffd9b3', '#669999', '#cc6699', '#092C91', 'grey']
        var k=6
        {
            props.coordone.name[0] >='A' && props.coordone.name[0] <='E' || props.coordone.name[0] >='a' && props.standardCoordone.name[0]>='e' ? k=0 :
            props.coordone.name[0] >='F' && props.coordone.name[0] <='I' || props.coordone.name[0] >='f' && props.standardCoordone.name[0]<='i' ? k=1 :
            props.coordone.name[0] >='J' && props.coordone.name[0] <='N' || props.coordone.name[0] >='j' && props.standardCoordone.name[0]<='n' ? k=2 :
            props.coordone.name[0] >='O' && props.coordone.name[0] <='R' || props.coordone.name[0] >='o' && props.standardCoordone.name[0]<='r' ? k=3 :
            props.coordone.name[0] >='S' && props.coordone.name[0] <='V' || props.coordone.name[0] >='s' && props.standardCoordone.name[0]<='v' ? k=4 :
            props.coordone.name[0] >='W' && props.coordone.name[0] <='Z' || props.coordone.name[0] >='w' && props.standardCoordone.name[0]<='z' ? k=5 : k=6
        }
        var color=ran[k]
        return color;
      }

      
  



        //Prendre la 1ere lettre du nom
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
                            title="Contemplative Reptile"
                            children='.'
                            src='0'
                            />
                            {props.coordone.image ==='' ?
                                    <span style={{color: getRandomColor() ,width:'420px',textAlign:'center',top:'7%',position:'absolute',height:'600px'}}>
                                        <h5 style={{marginTop:'7px'}}>
                                            <b style={{fontSize:'130px'}}>{prenom[0]+nom[0]}</b>
                                        </h5>
                                    </span> : ''
                                    }
                            <CardContent className={classes.content}>

                                <Typography style={{marginBottom:'35px'}} gutterBottom variant="h5" component="h3">
                                    <b>Nom : &nbsp;&nbsp;</b>{props.coordone.name}
                                </Typography>
                                <Typography style={{marginBottom:'35px'}} gutterBottom variant="h6" component="h3">
                                    <b>Email : &nbsp;&nbsp;</b>{props.coordone.email}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <b>Date de naissance : &nbsp;&nbsp;</b>{props.coordone.dateNai}
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
                                children='.'
                                src='0'
                                />

                                    {props.coordone.image ==='' ?
                                    <span style={{color: getRandomColor() ,width:'420px',textAlign:'center',position:'absolute',top:'29%',height:'600px'}}>
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
