import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './index.css';


const Message = ({username,message})=>{
    const Check = username === message.username;
    return(
        <div className={`Message_card ${Check ? `Message_user` : null} `}>
        <Card className={Check?"Message_users":"Message_guest"}>
        <CardContent>
          
          <Typography variant="body2" component="p">
           
           {!Check && `${message.username || `unknown :`}`} {message.mesage}
          
          </Typography>
         
        </CardContent>
       
      </Card>
      </div>

    );
};

export default Message;