import React,{useState,useEffect} from 'react'
import './Table_Utilisateurs.css'

//Axios
import Axios from 'axios'

//Modal Parametrable
import ModalParametrable from '../ModalParametrable/ModalParametrable';

//Modale.js
import Modale from '../modal/Modale';

//Avatar
import Avatare from '../avatare/Avatare';

//Button
import {Button} from '@material-ui/core'

//icone font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'


function Table_Utilisateurs() {

      //table 
      const [users, setUsers] = useState([])
      const [adrs, setAdrs] = useState([])
      const [loading, setLoading] = useState(true)

      /* Old methode
        useEffect(() => {
      //  fetch('https://jsonplaceholder.typicode.com/users/')
       fetch('http://localhost:3030/select' )
       .then( (response) => { return response.json() })
         .then((result) => {
            
            setLoading(false)
            setUsers(result)
            //console.log(result)
         })
      },[]) */

      //New method
      useEffect(() => {
        
          getAdress();
          getUsers();

      }, [])

      async function getUsers() {
        // const api = `https://jsonplaceholder.typicode.com/users/`;
        const api = `http://localhost:3030/allusers`; ///insert/:name
        const result = await fetch(api);
        const getResult = await result.json();
        setLoading(false)
        setUsers(getResult);
      }
      async function getAdress() {
        const api = `http://localhost:3030/alladresses`;
        const result = await fetch(api);
        const getAdress = await result.json();
        setAdrs(getAdress);
      }
  
  //importer les coordonnées depuis le component 'Modale.js' avec la methode useEffect
  const remplirTableau =(idd,n,u,e,a1,a2,a3,p,w,c)=>
  {

      // users.push({id:idd, name:n, username:u, email:e , address:a , phone:p , website:w , company_name:c} )
      if (idd && n && u && e && a1 && p && w && c) 
      {
        Axios.post( "http://localhost:3030/insert" , {
        name: n ,
        username : u ,
        email:e ,
        phone:p ,
        website:w ,
        company_name:c,
        home_adress1:a1,
        home_adress2:a2,
        work_adress:a3,
        })
        .then(res => {
          console.log(res.data)
        })
        window.location.reload(false);
      }
      

      // console.log(users.length)
      if(users.length>=1)
        {
          setLoading(true)
        }
  }
  
    //La nouvelle methode pour supprimer
    const handleDelete = (index) => () => {
        
        //supression d'une ligne statique// Clone

        // const newUsers = [...users];
        // newUsers.splice(index, 1);
        // setUsers(newUsers);
        // console.log("users.lenght"+users.length)

        //supression d'une ligne dynamique
        if(index)
        {
          Axios.delete( `http://localhost:3030/delete/${index}`)
          .then(res => {
            console.log(res.data+"     daz mn hna"+index)
          })
          const remainingResults = users.filter((result) => result.id !== index)
          setUsers(remainingResults)
        }

        if(users.length<=1)
        {
          setLoading(true)
        }
      };

//Function pour supprimer une ligne précise

    /* const handleDeleteo = () =>
    {
      delete rows[userID]
      //rows.splice(userID,1)
      setFakeLenght(fakeLenght=>fakeLenght-1)
      setUserID(9999)
    //   console.log(userID)
    //   console.log(rows)
    //   console.log("rows.lenght : "+rows.length)
    //   console.log("fake lenght : "+fakeLenght)
    //   console.log("_______________________________________")
      if (fakeLenght===(rows.length*(-2)))
      {
        setTableVide(false)
      }
    } */

 /*  //La supression d'une eligne à l'aide de useEffect
  const [userID, setUserID] = useState(9999)
  useEffect( () => 
  {
    handleDelete()

  }, [userID])  */ 

  //Le modal Parametrable
  const [id, setId] = useState(undefined)
  const [etat, setEtat] = useState(undefined)
  const [open, setOpen] = useState(false)
                            
  const OpenModalParametrable = (UId/* ,Uname,Uuser,Uemail,Uadress,Uphone,Uwebsite,Ucompany */,Uetat) =>
  {
    setId(UId)
    setEtat(Uetat)
    CloseModalParametrable()
  }
  const CloseModalParametrable =()=>
  {
    setOpen(!open)
  }

  return (
    <div>
      
      <ModalParametrable clicker={OpenModalParametrable} id={id} etat={etat} /* coordone={coordone} */ CloseModalParametrable={CloseModalParametrable} open={open}/>

      <h2 className="hh">Listes des utilisateurs</h2>
      <Modale  remplirTableau={remplirTableau}/>

      <table className="t" aria-label="customized table" >
        <thead>

        {loading?<tr><td><h5 style={{color:'grey'}} className="center">Chargement des informations...</h5></td></tr> :
          <tr className="tete">

            <th className="hautLigne-img" ></th>

            <th className="hautLigne-name" ><h6><b>Nom complet</b></h6></th>

            <th className="hautLigne-email" ><h6><b>E-mail</b></h6></th>

            <th className="hautLigne-adress" ><h6><b>Adress</b></h6></th>

            <th className="hautLigne-phone" ><h6><b>Téléphone</b></h6></th>

            <th className="hautLigne-website" ><h6><b>Site web</b></h6></th>

            <th className="hautLigne-company" ><h6><b>Entreprise</b></h6></th>

            <th className="hautLigne-action" ><h6><b>Action</b></h6></th>

          </tr>}
        </thead>
        <tbody>

        {loading?<tr><td></td></tr> :

          users.map((row, index) => (

            <tr key={row.id} className="ligne" >
              <td className="column-img">
                <Button onClick={() => OpenModalParametrable(row.id,1)}><Avatare name={row.name} image={row.image}/></Button>
              </td>
              <td className="column-name">
                <h6 style={{fontSize: '14px', marginTop:'10px'}}>{row.name}</h6>
              </td>

              <td className="column-email" ><h6 style={{fontSize: '14px', marginTop:'10px'}}>{row.email}</h6></td>

              <td className="column-adress">
                <h6  style={{fontSize: '14px', marginTop:'10px'}}>
                  
                  {adrs.map( (adr, index) =>(
                    
                    adr.userId === row.id ?
                    <p key={adr.id}> 

                      <b>Adresse du domicile 1 :</b>{adr.home_adress1 ===null || adr.home_adress1 === '' ? 'Inconnue' : adr.home_adress1 }<br />
                      <b>Adresse du domicile 2 :</b>{adr.home_adress2 ===null || adr.home_adress2 === '' ? 'Inconnue' : adr.home_adress2 }<br />
                      <b>Adresse de travail    :</b>{adr.work_adress  ===null || adr.work_adress  === '' ? 'Inconnue' : adr.work_adress  }<br />
                    
                    </p>
                    : ''
                  ) )}
                </h6>
                
              </td>
              
              <td className="column-phone" ><h6 style={{fontSize: '14px', marginTop:'10px'}}>{row.phone}</h6></td>

              <td className="column-website" ><h6 style={{fontSize: '14px', marginTop:'10px'}}>{row.website}</h6></td>

              <td className="column-company" ><h6 style={{fontSize: '14px', marginTop:'10px'}}>{row.company_name}</h6></td>

              <td className="column-action" >
                <Button /* style={{marginTop:'-25%'}} */ onClick={() => OpenModalParametrable(row.id,0)} color="default" > <FontAwesomeIcon size="lg" icon={faEye} /></Button><br />
                <Button /* style={{marginTop:'-45%'}} */ onClick={handleDelete(row.id)} color="default"> <FontAwesomeIcon size="lg" icon={faTrash} />  </Button>
              </td>
            </tr>
          ))
          }
        </tbody>

        <tfoot>

        </tfoot>
        
      </table>
      
    </div>
    
  );
}

  export default Table_Utilisateurs