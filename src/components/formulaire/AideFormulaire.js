import React,{useState} from 'react'
//formulaire d'apres reactrap
import { Form, FormGroup } from 'reactstrap';

//input depuis material ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//upload Button
import Button from '@material-ui/core/Button';

//icon image
import ImageIcon from '@material-ui/icons/Image';

//icone font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Button icone
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    margin: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      group:{
          marginLeft:'18%'
      },
      field:{
        width:'280px',
      },
      footer: {
          marginLeft:'180px',
      }
  }));

function Formulaire(props) {
    const {basculer} = props
    

    //variables du tableau
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [dateNai , setDateNai] = useState('');
    const [image, setImage] = useState('')

    //erreur des variables du tableau
    const [nameErreur , setNameErreur] = useState(false);
    const [emailErreur , setEmailErreur] = useState(false);
    const [dateNaiErreur , setDateNaiErreur] = useState(false);

    //Fonction pour tester s'il y a un champs non remplir ou pour envoyer les 5 variables vers le component 'Modale.js'
  const enregistrer = (e) =>
  {
    setNameErreur(false);
    setEmailErreur(false);
    setDateNaiErreur(false);

    if(!name )
    {
        setNameErreur(true);
        e.preventDefault();
    }
    if(!email )
    {
        setEmailErreur(true);
        e.preventDefault();
    }
    if(!dateNai )
    {
        setDateNaiErreur(true);
        e.preventDefault();
    }
    if(name && email && dateNai)
    {
      props.changeCoordonne(name,email,dateNai,image)
    }
  }

  //Pour uploader une image
  const uploadimg = (e) =>
  {
    const reader = new FileReader();
    reader.onload= () => 
    {
      if(reader.readyState === 2)
      {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

    const classes = useStyles();
    return (
            <Form>
                <FormGroup className={classes.group}>
                    <FontAwesomeIcon style={{marginRight:'5px',marginTop:'22px'}} icon={faUser} />
                    <TextField placeholder="ex : Nikola Tom" error={nameErreur} onChange={ (e) => setName(e.target.value) } className={classes.field} id="nom" type="text" label="Nom complet" />
                </FormGroup>
                <br />
                <FormGroup className={classes.group}>
                    <FontAwesomeIcon style={{marginRight:'5px',marginTop:'24px'}} icon={faEnvelope} />
                    <TextField placeholder="ex : nikola@hotmail.com" error={emailErreur} onChange={ (e) => setEmail(e.target.value) } className={classes.field} id="standard-basic" type="email" label="E-mail"  />
                </FormGroup>
                <br /><br />
                <FormGroup style={{marginLeft:'22%'}}>
                    <TextField error={dateNaiErreur} onChange={ (e) => setDateNai(e.target.value) } className={classes.field} id="standard-basic" type="date" defaultValue={"23/04/2000"} />
                </FormGroup>
                <br /><br />
                <FormGroup style={{marginLeft:'34%'}}>
                        <input accept="image/*" className={classes.input} onChange={uploadimg} id="contained-button-file" multiple type="file" />
                        <label htmlFor="contained-button-file">
                            <Button startIcon={<ImageIcon />} component="span" >Importer image</Button>
                        </label>
                </FormGroup>
                <br />

                <hr></hr>

                <div className={classes.footer}>
                    <Button type="reset" onClick={enregistrer} variant="contained" color="primary" startIcon={<SaveIcon />}>Enregistrer</Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={basculer} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Annuler</Button>
                </div>
            </Form>
    )
}

export default Formulaire
