import React,{useState, useEffect} from 'react'
//formulaire d'apres reactrap
import { Form, FormGroup } from 'reactstrap';

//input depuis material ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//upload Button
import Button from '@material-ui/core/Button';

//icon image
//import ImageIcon from '@material-ui/icons/Image';

//icone font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserTag,faEnvelope, faPhoneAlt , faGlobe, faMapMarkerAlt , faBuilding } from '@fortawesome/free-solid-svg-icons'

//Button icone
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

//Switch
import Switch from '@material-ui/core/Switch';

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
        //   marginLeft:'8%',
          marginBottom:'2%',
      },
      field:{
        width:'178px',
      },
      footer: {
          marginLeft:'145px',
          marginBottom:'-10px',
      },
  }));

function Formulaire(props) {
    const {basculer} = props
    

    //variables du tableau
    const [name , setName] = useState('');
    const [username, setUsername] = useState('')
    const [email , setEmail] = useState('');
    // const [adress, setAdress] = useState({street:'', suite:'', city :'', zipcode:''})
    const [adress, setAdress] = useState({home_adress1:'', home_adress2:'' , work_adress:''})
    const [phone, setPhone] = useState()
    const [website, setWebsite] = useState('')
    const [company_name, setCompany_name] = useState('')

        //Variable pour remplir le tableau Adress
        const [home1, setHome1] = useState('')
        const [home2, setHome2] = useState('')
        const [work, setWork] = useState('')
        // const [zipcode, setZipcode] = useState('')

    // const [image, setImage] = useState('')
    // const [dateNai , setDateNai] = useState('');

    //erreur des variables du tableau Erreur
    const [nameErreur , setNameErreur] = useState(false)
    const [usernameErreur, setUsernameErreur] = useState(false)
    const [emailErreur , setEmailErreur] = useState(false)
    const [adressErreur, setAdressErreur] = useState(false)
    const [phoneErreur, setPhoneErreur] = useState(false)
    const [websiteErreur, setWebsiteErreur] = useState(false)
    const [companyErreur, setCompanyErreur] = useState(false)

    // const [dateNaiErreur , setDateNaiErreur] = useState(false);

    useEffect(() => {
        
        setAdress({home_adress1:home1, home_adress2:home2, work_adress :work})
        // console.log("address => street:"+adress.street+"suite: "+adress.suite+" city :"+adress.city+"zipcode :"+adress.zipcode)
        // console.log("street:"+street+"suite: "+suite+" city :"+city+"zipcode :"+zipcode)
    }, [home1 , home2 , work ])

    //Fonction pour tester s'il y a un champs non remplir ou pour envoyer les 5 variables vers le component 'Modale.js'
  const enregistrer = (e) =>
  {

    setNameErreur(false);
    setUsernameErreur(false)
    setEmailErreur(false);
    setAdressErreur(false)
    setPhoneErreur(false)
    setWebsiteErreur(false)
    setCompanyErreur(false)

    // setDateNaiErreur(false);

    if(!name )
    {
        setNameErreur(true);
        e.preventDefault();
    }
    if(!username )
    {
        setUsernameErreur(true);
        e.preventDefault();
    }
    if(!email )
    {
        setEmailErreur(true);
        e.preventDefault();
    }
    /* if(!dateNai )
    {
        setDateNaiErreur(true);
        e.preventDefault();
    } */// || !adress.suite || !adress.city || adress.zipcode
    if(!adress.home_adress1)
    {
        setAdressErreur(true);
        e.preventDefault();
    }
    /* if(!adress.home_adress2)
    {
        setAdressErreur(true);
        e.preventDefault();
    }
    if(!adress.work_adress)
    {
        setAdressErreur(true);
        e.preventDefault();
    }
    if(!adress.zipcode)
    {
        setAdressErreur(true);
        e.preventDefault();
    } */
    if(!phone )
    {
        setPhoneErreur(true);
        e.preventDefault();
    }
    if(!website )
    {
        setWebsiteErreur(true);
        e.preventDefault();
    }
    if(!company_name )
    {
        setCompanyErreur(true);
        e.preventDefault();
    }
    
    // if(name && username && adress.home_adress1 && adress.suite && adress.city && adress.zipcode && company_name  && email && phone && website /* && adress && companyName */ )
    if(name && username && adress.home_adress1 && company_name  && email && phone && website)
    {
      props.changeCoordonne(name,username,email,adress,phone,website,company_name)
    }
  }

  //Pour uploader une image
  /* const uploadimg = (e) =>
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
  } */

  //Traitement de switch
  const [swi, setSwi] = useState({ checkedA: false, checkedB: true, });
  const [swit, setSwit] = useState({ checkedA: false, checkedB: true, });

  const handleChange = (event) => {
    setSwi({ ...swi, [event.target.name]: event.target.checked });
  };
  const handleChangeWorkAdress = (event) => {
    setSwit({ ...swit, [event.target.name]: event.target.checked });
  };

    const classes = useStyles();
    return (
        <div className="m-3">
            <Form>
                <div style={{marginBottom:'5%'}}>
                    <FormGroup className={classes.group}>
                        <FontAwesomeIcon style={{marginRight:'5px',marginTop:'22px'}} icon={faUser} />&nbsp;
                        <TextField  variant="outlined" placeholder="ex : Prenom NOM" error={nameErreur} onChange={ (e) => setName(e.target.value) } className={classes.field} id="nom" type="text" label="Nom complet" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon style={{marginLeft:'5px',marginRight:'5px',marginTop:'22px'}} icon={faUserTag} />
                        <TextField variant="outlined" placeholder="ex : Username" error={usernameErreur} onChange={ (e) => setUsername(e.target.value) } className={classes.field} id="username" type="text" label="Nom d'utilisateur" />
                    </FormGroup>
                </div>
                <div style={{marginBottom:'5%'}}>
                    <FormGroup className={classes.group}>
                        <FontAwesomeIcon style={{marginRight:'5px',marginTop:'24px'}} icon={faEnvelope} />&nbsp;
                        <TextField variant="outlined" placeholder="ex : email@email.com" error={emailErreur} onChange={ (e) => setEmail(e.target.value) } className={classes.field} id="standard-basic" type="email" label="E-mail"  />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon style={{marginRight:'5px',marginTop:'22px'}} icon={faPhoneAlt} />&nbsp;
                        <TextField variant="outlined" placeholder="ex : +12 645 457 897" error={phoneErreur} onChange={ (e) => setPhone(e.target.value) } className={classes.field} id="phone" type="text" label="Téléphone" />
                    </FormGroup>
                </div>

                <div style={{marginBottom:'5%'}}>
                    <FormGroup className={classes.group}>
                        <FontAwesomeIcon style={{marginRight:'5px',marginTop:'22px'}} icon={faGlobe} />&nbsp;
                        <TextField variant="outlined" placeholder="ex : www.siteweb.com" error={websiteErreur} onChange={ (e) => setWebsite(e.target.value) } className={classes.field} id="website" type="text" label="Site web" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon style={{marginRight:'5px',marginTop:'22px'}} icon={faBuilding} />&nbsp;
                        <TextField variant="outlined" placeholder="ex : Company" error={companyErreur} onChange={ (e) => setCompany_name(e.target.value) } className={classes.field} id="companyName" type="text" label="Nom de l'entreprise " />
                    </FormGroup>
                </div>
                <div style={{marginBottom:'-5%'}}>
                    <FormGroup className={classes.group}>
                    
                    <FontAwesomeIcon style={{marginRight:'5px',marginLeft:'4px'}} icon={faMapMarkerAlt} />&nbsp;&nbsp;Adress
                        <TextField style={{marginLeft:'25px', width:'400px' , marginTop:'8px' , marginBottom:'3px'}} fullWidth multiline maxRows={2} variant="outlined" placeholder=" Avenue , Suite, Ville, Code Postal" error={adressErreur} onChange={ (e) => setHome1(e.target.value) } id="street" type="text" label="Adresse du domicile" /><br />                        
                        
                        
                        {/* <TextField style={{marginTop:'8px', width:'129px' , marginLeft:'7px' }} variant="outlined" error={adressErreur} onChange={ (e) => setZipcode(e.target.value)}  id="zipcode" type="text" label="Code postal " /> */}

                        {/* ----------------------------------------------------------- */}
                        <Switch
                            checked={swi.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        {swi.checkedA ? <TextField style={{marginLeft:'25px',  width:'400px', marginTop:'8px' , marginBottom:'3px'}} fullWidth multiline maxRows={2} variant="outlined" placeholder=" Avenue , Suite, Ville, Code Postal" /* error={adressErreur} */ onChange={ (e) => setHome2(e.target.value) } id="suite" type="text" label="Adresse du domicile 2" /> : 'Adresse du domicile 2'}
                        <br />
                        <Switch
                            checked={swit.checkedA}
                            onChange={handleChangeWorkAdress}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        {swit.checkedA ? <TextField style={{marginLeft:'25px', width:'400px' , marginTop:'8px' , marginBottom:'0px'}} fullWidth multiline maxRows={2} variant="outlined" placeholder=" Avenue , Suite, Ville, Code Postal" /* error={adressErreur} */ onChange={ (e) => setWork(e.target.value) } id="city" type="text" label="Adresse du travail" /> : 'Adresse du travail'}
                        {/* ----------------------------------------------------------- */}
                    </FormGroup>
                </div>
                
                {/*<FormGroup style={{marginLeft:'22%'}}>
                    <TextField error={dateNaiErreur} onChange={ (e) => setDateNai(e.target.value) } className={classes.field} id="standard-basic" type="date" defaultValue={"23/04/2000"} />
                </FormGroup>
                <br /><br />
                 <FormGroup style={{marginLeft:'34%'}}>
                        <input accept="image/*" className={classes.input} onChange={uploadimg} id="contained-button-file" multiple type="file" />
                        <label htmlFor="contained-button-file">
                            <Button startIcon={<ImageIcon />} component="span" >Importer image</Button>
                        </label>
                </FormGroup> */}
                <br />

                <hr></hr>

                <div className={classes.footer}>
                    <Button type="reset" onClick={enregistrer} variant="contained" color="primary" startIcon={<SaveIcon />}>Enregistrer</Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={basculer} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Annuler</Button>
                </div>
            </Form>
        </div>
    )
}

export default Formulaire
