import mongoose, { Schema } from 'mongoose';

const userRegisterSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    user_email: { type: String, required: true },
    password: { type: String, required: true },
    userId: { type: String, required: true },
    role:{ type: String, required: false }
  });
  
  //? Modelo basado en el segundo esquema
  export default mongoose.model('UsuarioRegister', userRegisterSchema);