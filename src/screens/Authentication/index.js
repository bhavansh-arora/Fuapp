import React,{useState} from 'react';
import MobileVerification from '../MobileVerification';
import Register from '../Register';
import firebaseSetup from '../../../firebase-setup';

function Authentication({navigation}) {
    const {auth} = firebaseSetup();
    const [confirm,setConfirm] = useState(null);

    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        
        setConfirm(confirmation)
        alert(confirmation)
    }

    const confirmCode = async (code) => {
        try {
            await confirm.confirm(code);
            const gy = auth().createUserWithEmailAndPassword('','')
        .then((user) => {
user.user.sendEmailVerification
        })
           // navigation.navigate("Home")
        }
        catch(err) {
            alert(JSON.stringify(err));
        }

    }

    const sendEmailVerifictaion = async (email,password) =>{
        auth().createUserWithEmailAndPassword('abbhavansh21@gmail.com','bhavansh@mail21')
        .then((user)=>{
        user.user.sendEmailVerification();
        auth().signOut();
        alert("Email sent");
        })
    }

    if(!confirm) {
        return(
            <Register signIn={signInWithPhoneNumber} emailVerification={sendEmailVerifictaion} />
        )
    }
    else {
        return(
            <MobileVerification confirmCode={confirmCode} />
        )
    }
}

export default Authentication;
