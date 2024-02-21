import { Router } from 'express';
import UsuarioRegisterModel from '../../models/auth.model.js';
import { generateToken, createHash,isValidPassword } from '../../utils.js'
import { v4 as uuidv4 } from 'uuid'


const router = Router();

router.post('/auth/register', async (req, res, next) => {
    
    try {

        const { first_name, last_name, user_email, password } = req.body;



        if (!first_name || !last_name || !user_email || !password) {
            return done(new Error('Todos los campos son requeridos.'));
        }

        const findEmail = await UsuarioRegisterModel.findOne({ last_name: last_name })

        console.log(findEmail)

        if (findEmail) {
            return res.status(409).json({ error: 'Ya existe un usuario con el correo en el sistema.' });
        }

        const newUserRegister = {
            first_name,
            last_name,
            user_email,
            password: createHash(password),
            userId: uuidv4(),
            role:"user"
        }
        const user = await UsuarioRegisterModel.create(newUserRegister);
        res.redirect('/login')
    } catch (error) {
        next(error);
    }
})



router.post('/auth/login', async (req, res) => {

    const { email, password } = req.body;

    const user = await UsuarioRegisterModel.findOne({ user_email: email })

 

    if (!user) {
        return res.status(401).json({ message: 'Correo invalido.' });
    }

    

    const isNotValidPass = isValidPassword(user.password,password);
    
    if (!isNotValidPass) {
      return res.status(401).json({ message: 'Contraseña invalida' });
    }
    const token = generateToken(user);
    
    res.cookie('token', token, {
        maxAge: 1000 * 60,
        httpOnly: true,
    })
        .status(200).redirect('/menuPrincipal');
});




export default router;