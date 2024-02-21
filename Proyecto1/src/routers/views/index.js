import { Router } from 'express';
const router = Router();
import  { authMiddleware, authRolesMiddleware } from '../../utils.js'




  

router.get('/', (req, res) => {
    
});

router.get('/menuPrincipal',authMiddleware('jwt'), (req, res) => {

    setTimeout(() => {
        res.render('menuPrincipal', { title: 'Hello People 🖐️' });
    }, 2000);
    
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Hello People 🖐️' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Hello People 🖐️' });
});

router.get('/create',authMiddleware('jwt'), authRolesMiddleware('admin'), (req, res) => {
    res.render('create', { title: 'Hello People 🖐️' });
});

router.get('/getUser',authMiddleware('jwt'), authRolesMiddleware('admin'), (req, res) => {
    res.render('getUser', { title: 'Hello People 🖐️' });
});

router.get('/UserByLastName',authMiddleware('jwt'), authRolesMiddleware('admin'),(req, res) => {
    res.render('getUserByLastName', { title: 'Hello People 🖐️' });
});

router.get('/updateUserIndex',authMiddleware('jwt'), authRolesMiddleware('admin'), (req, res) => {
    res.render('searchUser', { title: 'Hello People 🖐️' });
});

export default router;

