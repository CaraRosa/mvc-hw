const User = require('./User');
// file name is Post.js but complains if I use Post.js
const Post = require('./post');
const Comment = require('./Comment');

User.hasMany(Post, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE' 
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});