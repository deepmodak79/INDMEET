const { collection, addDoc, query, where, getDocs} = require( "firebase/firestore"); 
const db = require("../config/connectDB");
const generateToken = require('../config/generateToken')

const userRef = collection(db, "users")

async function RegisterUser(req, res){
    try {
        const q1 = query(userRef, where("email","==",req.body.email), where("password","==",req.body.password));

        const querySnapshot = await getDocs(q1);

        if(!querySnapshot.empty){
            return res.status(400).json({message:"user already exists! please login."})
        }
        else{
            const docRef = await addDoc(userRef, {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
              });
      
              return res.status(201).json({
                name: req.body.name,
                email: req.body.email,
                token: generateToken(docRef.id)
              });
        }
        
      } catch (e) {
        return res.status(500).json({message: e});
      }
}

async function LoginUser(req, res){
    try{
        const q1 = query(userRef, where("email","==",req.body.email), where("password","==",req.body.password));
        const querySnapshot = await getDocs(q1);
        if(!querySnapshot.empty){
           return res.status(200).json({
              name:querySnapshot.docs.at(0).get("name"),
              email: querySnapshot.docs.at(0).get("email"),
              token: generateToken(querySnapshot.docs.at(0).id)
           });
        }
        else{
            return res.status(400).json({message:"user doesn't exists! please signup."})
        }
    }catch (e) {
        return res.status(500).json({message: e});
    }
}


module.exports = {
    RegisterUser,
    LoginUser
}