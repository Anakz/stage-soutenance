import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

//md5
import md5 from 'md5';

function Avatare(props) {

    const useStyless = makeStyles((theme) => ({

        sizeAvatar: {
            height: theme.spacing(10),
            width: theme.spacing(10),
            backgroundColor: color,
            color:'white',
          },
      }));

    //Change The Color of the Avatar
    const Colors = {};
    Colors.generate = function(str) {
      return "#" + md5(str).slice(0, 6);
    };

    /* const checkStr = (str) =>
    {
      if(str && str.lenght>0) return true;
      return false;
  
    } */

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

    //Get the first lettre of the first name and the first letter of the second name
    const GetFirstLetter = () =>
    {
      const splitted = props.name.split(" ");
      const nom = checkStr(splitted[1]) ? splitted[1].toUpperCase() : " ";
      const prenom = splitted[0].toUpperCase();
      // const nom = checkStr(splitted[1]);
      // let nom = "";
      // if(checkStr(splitted[1])){
      // const nom = splitted[1];
      // }
      // const prenom = checkStr(splitted[0]);
      // const prenom = checkStr(splitted[0]) ? splitted[0].toUpperCase() : "";
      // let Letters=prenom[0].toUpperCase()+nom[0].toUpperCase()
      let Letters=prenom[0]+nom[0]
      return Letters
    };
    
    //Variables
    const [firstSecondletter, setFirstSecondletter] = useState('')
    const [color, setColor] = useState("fff")

    useEffect(() => {

      if (props.name) {
        const letter = GetFirstLetter()
        const color = Colors.generate(props.name)
        setFirstSecondletter(letter)
        setColor(color)
      }

    },[props.name])

    const classes = useStyless();
    return (
       
        <Avatar className={classes.sizeAvatar} children={firstSecondletter} src="{props.image}"/>           
    )
}


export default Avatare