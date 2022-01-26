const mongoose = require('mongoose');


const Connect = async() => {
    try {
        const con = await mongoose.connect('mongodb+srv://admin:admin@cluster0.n4xpk.mongodb.net/Image_demo1?retryWrites=true&w=majority');
        console.log('MongoDB Connected')
    }catch(err) {
        console.log(err);
        process.exit(1);
    }    
}

module.exports = Connect;