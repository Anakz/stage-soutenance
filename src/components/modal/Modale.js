import React,{useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {Button} from '@material-ui/core'

import './Modale.css'

//formulaire
import Formulaire from '../formulaire/Formulaire';

function Modale(props) {

    //L'ouverture et la fermeture du Modal
    const [ouvert, setOuvert] = useState(false)

    //pour fermer le modal (changer la valeur de ouvert)
    const basculer = (e) => 
    {
        e.preventDefault();//pour ne pas actualisé la page
        setOuvert(!ouvert);
    }

    //Les 6 variables de type state (id, name, email,date naissance, image)
    const [id, setId] = useState(11)
    const [name , setName] = useState('');
    const [username, setUsername] = useState('')
    const [email , setEmail] = useState('');
    const [adress, setAdress] = useState({home_adress1:'', home_adress2:'' , work_adress:''})
    const [phone, setPhone] = useState()
    const [website, setWebsite] = useState('')
    const [company_name, setCompany_name] = useState('')

    // const [image, setImage] = useState('')
    // const [dateNai , setDateNai] = useState('');

    //modifer les coordonnées depuis le component 'Formulaire'
    const changeCoordonne = (n,u,e,a,p,w,c) =>
    {
        setId(id => id +1)
        setName(n);
        setUsername(u)
        setEmail(e)
        // setDateNai(d)
        // setImage(i);
        setAdress(a)
        setPhone(p)
        setWebsite(w)
        setCompany_name(c)
        setOuvert(false)
    }

    //Hook useEffect pour transphérer les 6 coordonées d'une maniere automatique apres le sort de ce component 'Modale.js'
    useEffect(() => {
        props.remplirTableau(id,name,username,email,adress.home_adress1,adress.home_adress2,adress.work_adress,phone,website,company_name)
    }, [id,name,username,email,adress,phone,website,company_name])

    return (
        <div>
            <Button style={{marginTop : '50px', marginBottom:'15px'}} variant="contained" color="default" onClick={basculer}>Ajouter un utilisateur</Button>
            <Modal isOpen={ouvert} >
                <ModalHeader>
                    <b>Veuillez saisir les informations demandés</b> 
                    <Button  style={{marginLeft:'16px'}} onClick={basculer}><FontAwesomeIcon icon={faTimes}/></Button>
                </ModalHeader>

                <ModalBody>
                    
                        <Formulaire changeCoordonne={changeCoordonne} basculer={basculer}  />
                    
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Modale
