import React, { useState, useEffect } from 'react';
import Message from './Message';
import { FormControl,Input,Button,InputLabel} from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

const App=()=>{
    const [input, setInputMessage] = useState('');
    const [message,setSendMessage] = useState([
        
        
    ]);
    const [username,setUsername] = useState();
   
    useEffect(()=>{
        setUsername(prompt('Enter UserName'));

    },[]);

    useEffect(()=>{
        db.collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot(snap=>{
            setSendMessage(snap.docs.map(doc=> ({id : doc.id,message:doc.data()})))
        })
    },[])

   const sendMesaage =(e)=>{
    e.preventDefault();

       //setSendMessage([...message,{username:username,mesage:input}]);
       db.collection('messages')
       .add({
           mesage:input,
           username:username,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
       })
    
       //   setSendMessage((oldValue)=>{
    //   return [...oldValue,{username:username,mesage:input}]

    //   })
       setInputMessage('');
   }
   
    const inputValue = (e)=>{
    
        setInputMessage(e.target.value);
    }

    return(
        <>
            <h1>Hello Messenger </h1>
            <h1>Welcome {username}</h1>
            <div className="form_input">
            <FormControl className="FC">
                <InputLabel >Enter Message</InputLabel>
                <Input value={input}type="text" placeholder="Enter Message" onChange={inputValue}/>
                <Button variant="contained" color="primary" disabled={!input} type = "submit" onClick={sendMesaage}>SendMesssage</Button>
                </FormControl>
                </div>
            <div className="Card">
            {
                message.map(({id , message})=>{
                    return(
                        <Message key = {id} username={username} message={message} />

                    );
                })
            }
            </div>
     

        </>
    );
};
export default App;