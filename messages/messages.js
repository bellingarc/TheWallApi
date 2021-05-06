const admin = require("firebase-admin")
const serviceAccount = require("../credentials")
let db
function dbAuth() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
    db = admin.firestore()
  }
}
exports.getMessages = (req, res) => {
  dbAuth()
  db.collection('messages').get().then(collection => {
    const messageList = collection.docs.map(doc => {
      let message = doc.data()
      message.id = doc.id
      return message
    })
  res.status(200).json(messageList)
  })
  .catch(err => res.status(500).send('Get Tasks Failed: ' + err ))
}
exports.postMessage = (req, res) => {
  console.log(req.body)
  if(!req.body || !req.body.message || !req.body.userId ){
    res.status(400).send('Invalid request' + req)
  }
 dbAuth()
 const now = admin.firestore.FieldValue.serverTimestamp()
 const newMessage = {
   message: req.body.message,
   createdOn: now,
   createdBy: req.body.userId,
 }
 db.collection('messages').add(newMessage)
 .then(()=>{
   this.getMessages(req, res)
 })
 .catch(err => res.status(500).send('Post Failed:' + err ))
}