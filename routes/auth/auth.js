const router = require('express').Router()
const User = require('../../models/User')

// VALIDATION
const Joi = require('@hapi/joi')

const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

router.post('/register', async (req, res) => {

    //validate the data befor make the user
    const validation = schema.validate(req.body)
    res.send(validation)
    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // })
    // try{
    //     const saveUser = await user.save()
    //     res.send(saveUser)
    // }catch(err){
    //     res.status(400).send(err)
    // }
})

router.post('/login', (req, res) => {
    res.send('Login')
})

module.exports = router