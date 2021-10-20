import {
    addNewContact,
    getContact,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controller/crmController';
import { login, register, loginRequired } from '../controller/userControllers'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, loginRequired, getContact)

        // Post endpoint
        .post(loginRequired, addNewContact);

    app.route('/contact/:contactID')
        // get specific contact
        .get(loginRequired, getContactWithID)
        // update specific contact
        .put(loginRequired, updateContact)
        // delete specific contact
        .delete(loginRequired, deleteContact);

    //registration route
    app.route('/auth/register')
        .post(register);

    //login route
    app.route('/login')
        .post(login);
}

export default routes;