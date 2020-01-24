const User = require('../models/User');
const bcrypt = require("bcryptjs");
const config = require('config');


async function createAdminUser() {


        // find user who have role === "admin"
        const user = await User.findOne({role:"admin"});

        if(!user) {

            let data = {
                username: "Admin",
                password: await bcrypt.hash(config.get('DEFAULT_ADMIN_PASSWORD'), 12),
                active: true,
                role: "admin"
            }
            
            User.create(data);
    
            console.log('Admin is created.');
        } else {
            console.log("There is an admin.");
        };
};

createAdminUser();