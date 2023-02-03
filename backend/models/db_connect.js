const mongoose = require('mongoose');

main().catch(err => console.log(err));
main().then(()=>console.log('successfully connected to database'))
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

module.exports=main