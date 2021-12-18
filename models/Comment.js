const {Schema, model, Types} = require ('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema({
    replyId:{
        type:Schema.Types.ObjectId,
        default:new Types.ObjectId
    },

    replyBody: {
        type: String,
        required :'you should provid a reply body',

      },

      writtenBy: {
        type: String,
        required :'you should provid a writtenBy',
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      // use ReplySchema to validate data for a reply
  
    
},
{
    toJSON:{
        getters:true,
    }
}


);



const Commentschema = new Schema({
    writtenBy :{
        type:String,
        required :'you should provid a writtenBy',
        
    },
    commentBody:{
        type:String,
        required :'you should provid a reply body',

    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    replies: [ReplySchema]
},
    {
        toJSON:{
            getters:true,
            virtuals:true,
        }

    }
);
Commentschema.virtual ('replyCount').get (function(){
    return this.replies.length;
});
const Comment = model('Comment',Commentschema);
module.exports = Comment;