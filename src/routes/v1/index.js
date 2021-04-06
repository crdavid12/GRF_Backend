const userRoutes = require('./users-routes');
const guiaDiosRoutes = require('./guiaDios-routes');
const reflexionesRoutes = require('./reflexiones-routes');
const despertadorRoutes = require('./despertdor-routes');
const principalRoutes = require('./principal-routes');
const hablemosRutes = require('./hablemos-routes');
const textoBiblicoRoutes = require('./textoBiblico-routes')
const apoyameRoutes = require('./apoyame-routes')
const galriaPrincipalRoutes = require('./galeriaPrincipal-routes');
const mailRoutes = require('./mail-routes');

//Cors
const{isCors} = require('../../middlewares/cors')

module.exports = (app)=>{
    app.use('/api/v1/users', isCors, userRoutes),
    app.use('/api/v1/guiaDios', isCors, guiaDiosRoutes),
    app.use('/api/v1/reflexiones', isCors, reflexionesRoutes),
    app.use('/api/v1/despertador', isCors, despertadorRoutes),
    app.use('/api/v1/principal', isCors, principalRoutes),
    app.use('/api/v1/hablemos', isCors, hablemosRutes),
    app.use('/api/v1/textoBiblico', isCors, textoBiblicoRoutes),
    app.use('/api/v1/apoyame', isCors, apoyameRoutes),
    app.use('/api/v1/galeriaPrincipal', isCors, galriaPrincipalRoutes),
    app.use('/api/v1/mail', isCors, mailRoutes)
};