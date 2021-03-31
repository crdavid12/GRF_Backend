const userRoutes = require('./users-routes');
const guiaDiosRoutes = require('./guiaDios-routes');
const reflexionesRoutes = require('./reflexiones-routes');
const despertadorRoutes = require('./despertdor-routes');
const principalRoutes = require('./principal-routes');
const hablemosRutes = require('./hablemos-routes');
const textoBiblicoRoutes = require('./textoBiblico-routes')
const apoyameRoutes = require('./apoyame-routes')
const galriaPrincipalRoutes = require('./galeriaPrincipal-routes');
const mailRoutes = require('./mail-routes')

module.exports = (app)=>{
    app.use('/api/v1/users', userRoutes),
    app.use('/api/v1/guiaDios', guiaDiosRoutes),
    app.use('/api/v1/reflexiones', reflexionesRoutes),
    app.use('/api/v1/despertador', despertadorRoutes),
    app.use('/api/v1/principal', principalRoutes),
    app.use('/api/v1/hablemos', hablemosRutes),
    app.use('/api/v1/textoBiblico', textoBiblicoRoutes),
    app.use('/api/v1/apoyame', apoyameRoutes),
    app.use('/api/v1/galeriaPrincipal', galriaPrincipalRoutes),
    app.use('/api/v1/mail', mailRoutes)
};