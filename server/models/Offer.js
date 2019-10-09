const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const offerSchema = new Schema({
  title: String,
  description: String,
  code: String
},

 {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;