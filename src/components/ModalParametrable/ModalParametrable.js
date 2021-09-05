import React,{ useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button} from '@material-ui/core';
import { Modal , ModalFooter } from 'reactstrap';

//Axios
import Axios from 'axios';

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
    //   padding: theme.spacing(0, 0, 3),
      top: styleTop(),
      left : styleLeft(),
      borderRadius : styleBorderRadius(),
      height : styleHeight(),
      marginLeft: styleMarginLeft(),
        },
        root: {
            // width: '420px',
            borderRadius: styleBorderRadius(),
            display : styleDisplay(),
          },
        media: {
            height: '300px',//'250px'
            width:'550px',//'446px'
            display:'block',
            borderRadius:'10px',
            backgroundColor: color ,
            // color: 'white' , 
          },
          media1: {
              height: '420px',
              width:'446px',
              display:'block',
            //   borderRadius:'10px',
              textAlign:'end',
                backgroundColor: color ,
            //   color: 'white' ,
            },
    }));

    //Fetch the data from the database
        const [users, setUsers] = useState([])
        const [adr, setAdr] = useState([])
        const [loadingUser, setLoadingUser] = useState(true)
        const [loadingAdr, setLoadingAdr] = useState(true)

    useEffect(() => {

        
        getAdress();
        getUser()
        
      }, [props.id])

      const getUser = () =>
      {
        Axios.post( "http://localhost:3030/OneUser", {id : props.id} )
        .then(res => {
            
            setLoadingUser(false)
            setUsers(res.data)
            // console.log(res.data)
        })
      }
      const getAdress = () =>
      {
        Axios.post( "http://localhost:3030/OneAdress", {id : props.id} )
        .then(res => {
            setLoadingAdr(false)
            setAdr(res.data)
            // console.log(res.data)
            
        })
      }

    //Function margin left
    const styleMarginLeft = () =>
    {
        if (props.etat===1) 
        {
            return '-450px';
        }
    }

    //Function for the Top
    const styleTop = () =>
    {
        if (props.etat===0) 
        {
            return '50px';            
        }
        else if (props.etat===1) 
        {
            return '150px';
        }
    }

    //Function pour modifier le style depend de l'etat
    const styleBorderRadius = () =>
    {
        if (props.etat===0) 
        {
            return '3px';            
        }
        else if (props.etat===1) 
        {
            return '600px';
        }
    }
    const styleWidth = () =>
    {
        /* if (props.etat===0) 
        {
            return '450px';            
        }
        else */ if (props.etat===1) 
        {
            return '420px';
        }
    }
    const styleHeight = () =>
    {
        /* if (props.etat===0) 
        {
            return '640px';            
        }
        else */ if (props.etat===1) 
        {
            return '420px';
        }
    }
    const styleLeft = () =>
    {
       /*  if (props.etat===0) 
        {
            return '35%';//'542px'            
        }
        else */ if (props.etat===1) 
        {
            return '8%';//'240px'
        }
    }
    const styleDisplay = () =>
    {
        /* if (props.etat===0) 
        {
            return 'center';            
        }
        else */ if (props.etat===1) 
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

      if (users.name) {
        const color = Colors.generate(users.name)
        setColor(color)
      }
    },[users.name])


    const checkStr = (str) =>
    {
      if (str === undefined) 
      {
        return false;
      }
      else if(str !== "")
      {
        return true;
      }  
    }

    //Get the First name and the second name
    let fakename = users.name+"."
    let matched = fakename.match(/\S+/gi)
    let prenom = matched[0].toUpperCase();
    let nom = checkStr(matched[1]) ? (matched[1]).toUpperCase() : " ";
    
    const classes = useStyles();

    return (
        <div>

            <Modal 
                isOpen={props.open}
                onClose={props.CloseModalParametrable}
            >
                <div  className={classes.paper}>
                    {props.etat === 0?
                        <div>
                            {/* <ModalHeader >
                                <b style={{marginLeft:'121px'}}>Informations de l'utilisateur</b>
                                <Button onClick={usersCloseModalParametrable}>X</Button>
                            </ModalHeader> */}

                        
                         <div className="m-2">

                            <Card>
                                <CardActionArea className="center">
                                    <span style={{position:'absolute', marginLeft:'88%', color:'white' ,fontSize:'24px', width:'75px', height:'45px', textAlign:'center'}} onClick={props.CloseModalParametrable}><b>X</b></span>
                                    
                                    <CardMedia
                                    className={classes.media}
                                    image={undefined}
                                    title={users.name}
                                    children='.'
                                    src='0'
                                    />
                                    {/* {image ===undefined ?
                                    */}
                                    <span style={{width:'100%',textAlign:'center',top:'9%',position:'absolute'}}>
                                        <h5 style={{marginTop:'7px'}}>
                                            <b style={{color: 'white' , fontSize:'130px'}}>{loadingUser ? '. . .' : prenom[0]+nom[0]}</b>
                                        </h5>
                                    </span>
                                    {/* } */}
                                    <CardContent className={classes.content}>
                                    {loadingUser ? <span style={{marginLeft:'30%', color:'grey'}}>Chargement Des Informations . . .</span> :
                                        <span>
                                            <Typography style={{marginBottom:'5px', fontSize:'17px'}} gutterBottom variant="h6" component="h3">
                                                <b>Nom complet : &nbsp;&nbsp;</b>{users.name}
                                            </Typography>
                                            <Typography style={{marginBottom:'5px', fontSize:'17px'}} gutterBottom variant="h6" component="h3">
                                                <b>Email : &nbsp;&nbsp;</b>{users.email}
                                            </Typography>
                                            <Typography style={{fontSize:'17px'}} gutterBottom variant="h6" component="h3">
                                                <b>Nom de l'entreprise : &nbsp;&nbsp;</b>{users.company_name}
                                            </Typography>
                                            <Typography style={{fontSize:'17px'}} gutterBottom variant="h6" component="h3">
                                                <b>Site web : &nbsp;&nbsp;</b>{users.website}
                                            </Typography>
                                            <Typography style={{fontSize:'17px'}} gutterBottom variant="h6" component="h3">
                                                <b>Téléphone : &nbsp;&nbsp;</b>{users.phone}
                                            </Typography>
                                            {loadingAdr ? <span><br /><span style={{marginLeft:'30%', color:'grey'}}>Chargement Des Adresses . . .</span></span> :
                                                <Typography style={{fontSize:'16px'}} gutterBottom variant="h6" component="h3">
                                                    
                                                    <b>Adresse du domicile 1 :</b>{adr.home_adress1 ===null || adr.home_adress1 === '' ? 'Inconnue' : adr.home_adress1 }<br />
                                                    {adr.home_adress2 ===null || adr.home_adress2 === '' ? '' : <span><b>Adresse du domicile 2 : </b> {adr.home_adress2}<br /></span> }
                                                    {adr.work_adress ===null || adr.work_adress === '' ? '' : <span><b>Adresse de travail : </b> {adr.work_adress}<br /></span> }
                                                </Typography>
                                            }  
                                        </span>
                                    }
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                            <ModalFooter >
                                <Button style={{marginBottom:'-20px', marginTop:'-10px'}} onClick={props.CloseModalParametrable} fullWidth  /* variant="contained" */ ><b>Fermer</b></Button>
                            </ModalFooter>
                         </div>
                        </div>
                    :props.etat === 1?
                        <Card className={classes.root}  onClick={props.CloseModalParametrable}>
                            <CardActionArea >

                                <CardMedia
                                    className={classes.media1 }
                                    image={undefined}
                                    title={users.name}
                                    children='.'
                                    src='0'
                                />

                                {/* {usersimage ===undefined ? */}
                                <span style={{color: 'white' , width:'420px',textAlign:'center',position:'absolute',top:'25%',height:'600px'}}>
                                    <h5 style={{marginTop:'7px'}}>
                                        <b style={{fontSize:'150px'}}>{prenom[0]+nom[0]}</b>
                                    </h5>
                                </span>
                                {/* } */}
                                                
                                <span style={{backgroundColor:'#cecece',width:'420px',textAlign:'center',color:'black',position:'absolute',top:'0px',height:'30px'}}>
                                    <h5 style={{marginTop:'7px'}}>
                                        <b>{users.name}</b>
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
