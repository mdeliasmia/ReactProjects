


const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mdeliasmiaaiub_db_user:MLCmVr23CKztZVLQ@cluster0.vcnfzcw.mongodb.net/').then(() => console.log('Connected Mongo DB Elias')).catch((e) => console.log(e));