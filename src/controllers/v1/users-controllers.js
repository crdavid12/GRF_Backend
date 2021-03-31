const users = require('../../modules/v1/user-modules');
const bcrypt = require('bcrypt');

const login = async (req, res)=>{
    try {
        const {nombre, password} = req.body;

        const user = await users.findOne({nombre});
        
        if(user){
            if(user.password == password){
                console.log("Usuario correcto");
                res.status(200).send({status:'ok', message:'usuario correcto'})
            }else{
                // throw{
                //     code:401,
                //     status:'Access deneid',
                //     message: 'Invalid Password'
                // }
                res.status(500).send({status:'error', message:"Error 222"})
            }
        }else{
            // throw{
            //     code:403,
            //     status:403,
            //     message:'User Not Found'
            // }
            res.status(500).send({status:'error', message:"Error 111"})
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({status:'error', message:"Error asadas"})
        return res;
    }

}

const createUser = async (req, res) =>{
    try {
        const{nombre, password, role} = req.body;

        const hash = await bcrypt.hash(password, 15);

        await user.create({
            nombre,
            password,
            hash,
            role
        })

        res.status(200)
        .send({status:'ok', message: 'User Created'});
        
    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message})
    }
}

const getAllUser = async (req, res)=>{
    try {
        const user = await users.find();

        res.status(200).send({status:'error', data:user})
    } catch (error) {
        console.log(error);
        res.status(500).send({status:'Error', message:error.message})
    }
}

const updateUser = async (req, res)=>{
    try {
        
        const {nombre, password, role, userId} = req.body;

        await users.findByIdAndUpdate(userId,{
            nombre,
            password,
            role
        })

        res.status(200).send({status:'OK', message:'Usuario Actualizado'})

    } catch (error) {
        console.log(error);
        res.status(500).send({status:'error', message:error})
    }
}

const deleteUser = (req, res)=>{
    console.log("delete user");
    res.status(200).send({status:"ok", message: 'Usuario eliminado'});
}


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
    login
}