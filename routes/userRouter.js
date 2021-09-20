const usercontroller = require('../controllers/userController')
const route = require('express').Router()




//methode save user 

/**
 * @swagger
 * post:
 * /api/user/add:
 *  post:
 *    description: add user
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: body
 *         in : body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               required: true
 *             email:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               required: true
 *             phone:
 *               type: number
 *               required: true
 *    responses:
 *      '201':
 *        description: user added
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  phone:
 *                    type: number
 *                  password:
 *                    type: string
 *                  email:
 *                    type: string
 *      '406':
 *        description: empty field
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */
route.post('/add', usercontroller.CreateUser)
    //get alluser
    /**
     * @swagger
     * get:
     * /api/user/list:
     *  get:
     *    description: list user
     *    tags:
     *    - user
     *    consumes:
     *    - application/json
     *    produces:
     *    - application/json
     *    responses:
     *      '200':
     *        description: get list of user
     *        schema:
     *          type: object
     *          properties:
     *             status:
     *               type : number
     *             message:
     *               type: string
     *             data:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                  _id:
     *                     type: string
     *                  name:
     *                    type: string
     *                  phone:
     *                    type: number
     *                  password:
     *                    type: string
     *                  email:
     *                    type: string
     *      '406':
     *        description: empty field
     *        schema:
     *          type: object
     *          properties:
     *             status:
     *               type : number
     *             message:
     *               type: string
     *      '500':
     *        description: Internal Server Error
     *        schema:
     *          type: object
     *          properties:
     *             status:
     *               type : number
     *             message:
     *               type: string
     */
route.get('/list', usercontroller.GetALLUser)
    //get one user
route.get('/getone/:id', usercontroller.GetUserById)
    //update
route.put('/update/:id', usercontroller.UserUpdate)
    //delete
route.delete('/delete/:id', usercontroller.DeleteUser)
route.post('/authenticate', usercontroller.authenticate)


module.exports = route