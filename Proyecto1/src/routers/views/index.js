import { Router } from 'express';

const router = Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Hello People 🖐️' });
});

router.get('/getUser', (req, res) => {
    res.render('getUser', { title: 'Hello People 🖐️' });
});

router.get('/UserByLastName', (req, res) => {
    res.render('getUserByLastName', { title: 'Hello People 🖐️' });
});

router.get('/updateUserIndex', (req, res) => {
    res.render('searchUser', { title: 'Hello People 🖐️' });
});

export default router;