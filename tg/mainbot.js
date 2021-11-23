const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Lan = mongoose.model('Lang', { 
    mylan:'uzbek'|'russian',
    mywords:{
        region:[]
    }
    }
 );

//  russian:{
//      region:['Каракалпакстан','Ташкент']
// //  }
// const word = new Lan({ 
//     mylan:'uzbek',
//     mywords:{
//         region:['Qoraqalpoqiston','Toshkent','Andijon','Namangan','Fargona','Sirdaryo','Jizzax','Qashqadaro','Surhandaryo','Samarqand','Buxoro','Navoiy']
//     }
// });
// word.save().then(() => console.log('qowildi'));

async function kk(typo){
    var vaname =await Lan.findOne({mylan: typo});
    return vaname
}
module.exports = kk