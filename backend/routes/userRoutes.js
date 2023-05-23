import { Router } from "express";
import { User } from "../models/User.js";

const router = Router();
router.post('/signup', async(req, res)=> {
    const {name, email, password} = req.body;
  
    try {
      const user = await User.create({name, email, password});
      res.json(user);
    } catch (e) {
      if(e.code === 11000) return res.status(400).send('Email already exists');
      res.status(400).send(e.message)
    }
  })
  
  // login
  
  router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
      const user = await User.findByCredentials(email, password);
      res.json(user)
    } catch (e) {
      res.status(400).send(e.message)
    }
  })
  
  // get users;
  
  router.get('/', async(req, res)=> {
    try {
      const users = await User.find({ isAdmin: false });
      res.json(users);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  
export {router};