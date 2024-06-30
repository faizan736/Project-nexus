const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById){
    //Function to authenticate users
    const authenticateUsers = async(email, password, done)=>{
        //user by email
        const user = getUserByEmail(email);
        if(user == null){
            return done(null, false, {message: "No user found"});
        }
        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null, user);
            }else{
                return done(null, false, {message: "Incorrect password"})
            }
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers));
    passport.serializeUser((user, done)=> done(null, user.id));
    passport.deserializeUser((id, done)=>{
        return done(null, getUserById(id));
    });
}

module.exports = initialize