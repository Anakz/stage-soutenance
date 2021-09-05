import React,{useState,useEffect} from 'react'
import './Table_Utilisateurs.css'

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


function createData(id ,name, email, DateNai, image) {
  return { id ,name, email, DateNai, image };
}

//Notre tableau
const rows = 
[
  createData(0,'Anas AKZAZ', 'anasakzaz23@gmail.com', "23/04/2000",''),
  createData(1,'Hamada NACER', 'hamadanacer@gmail.com', "18/07/1993",''),
  createData(2,'Younes SEFIANI', 'younessefiani592@gmail.com', "05/09/2000",''),
  createData(3,'Sanae Berrada', 'sanaeberrada@gmail.com', "25/02/2002",''),
];

function Table_Utilisateurs() {

      //table 
      const [users, setUsers] = useState([])

      useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then( (response) => { return response.json()})
         .then((result) => {

            const { a } = result
            setUsers(a)
            console.log(users)
      
         })
      },[])


      //Les 6 variables de type state (id, name, email,date naissance, image)
      const [id, setId] = useState()

    //une variable pour savoir si le tableau est vide ou non
    const [tableVide, setTableVide] = useState(true)
  
  //importer les coordonnées depuis le component 'Modale.js' avec la methode useEffect
  const remplirTableau =(idd,n,e,d,i)=>
  {
    setId(idd)

    if (idd && n && e && d) 
    {
      setTableVide(true)//mettre que le tableau est plus vide
      rows.push(createData(id, n, e, d, i))
    }
  }
//Modal
//Function pour supprimer une ligne précise
    const [fakeLenght, setFakeLenght] = useState(0)

    const handleDelete = () =>
    {
      delete rows[userID]
      //rows.splice(userID,1)
      setFakeLenght(fakeLenght=>fakeLenght-1)
      setUserID(9999)
      /*console.log(userID)
      console.log(rows)
      console.log("rows.lenght : "+rows.length)
      console.log("fake lenght : "+fakeLenght)
      console.log("_______________________________________")*/
      if (fakeLenght===(rows.length*(-2)))
      {
        setTableVide(false)
      }
    }

  //La supression d'une eligne à l'aide de useEffect
  const [userID, setUserID] = useState(9999)
  useEffect( () => 
  {
    handleDelete()

  }, [userID])  

  //Le modal Parametrable
  const [coordone, setCoordone] = useState({id : 0,name:'', email:'', dateNai:'', image:'', etat:999})
  const [open, setOpen] = useState(false)

  const OpenModalParametrable = (UId,Uname,Uemail,Udate,Uimage,Uetat) =>
  {
    setCoordone({id: UId , name: Uname , email: Uemail , dateNai: Udate, image: Uimage, etat:Uetat})
    CloseModalParametrable()
  }
  const CloseModalParametrable =()=>
  {
    setOpen(!open)
  }

  return (
    <div>
      
      <ModalParametrable clicker={OpenModalParametrable} coordone={coordone} CloseModalParametrable={CloseModalParametrable} open={open}/>

      <Modale  remplirTableau={remplirTableau}/>
      <h2 className="hh">Listes des utilisateurs</h2>

      <table className="t" aria-label="customized table" >
        <thead>
        {!tableVide?<h5 className="tableVide shadow" >Aucune information pour l'instant</h5> :
          <tr className="tete">

            <th className="hautLigne-img" ></th>

            <th className="hautLigne-name" ><h5><b>Nom complet</b></h5></th>

            <th className="hautLigne-email" ><h5><b>E-mail</b></h5></th>

            <th className="hautLigne-date" ><h5><b>Date Naissance</b></h5></th>

            <th className="hautLigne-action" ><h5><b>Action</b></h5></th>

          </tr>}
        </thead>
        <tbody>
        {!tableVide?'' :

          rows.map((row) => (

            <tr key={row.id} className="ligne" >
              <td className="column-img">
                <Button onClick={() => OpenModalParametrable(row.id,row.name,row.email,row.DateNai,row.image,1)}><Avatare name={row.name} image={row.image}/></Button>
              </td>
              <td className="column-name">
                <h6>{row.name}</h6>
              </td>

              <td className="column-email" ><h6>{row.email}</h6></td>

              <td className="column-date" ><h6>{row.DateNai}</h6></td>

              <td className="column-action" >
                <Button  onClick={() => OpenModalParametrable(row.id,row.name,row.email,row.DateNai,row.image,0)} color="default" > <FontAwesomeIcon size="lg" icon={faEye} />    </Button><br />
                <Button onClick={()=>{setUserID(row.id)}} color="default"> <FontAwesomeIcon size="lg" icon={faTrash} />  </Button>
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