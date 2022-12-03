#Instructions

you will need to write MONGODB_URL as ENV variable

in package.json -> script -> dev:"SET MONGODB_URL=(the link ... from mongoose connect) SET PORT =8000 && SET NODE_ENV=development && nodemon server.js"

in app.js -> mongoose.conect (process.env.MongoDB_URL || localehost:27017)
