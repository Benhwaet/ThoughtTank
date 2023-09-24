const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thougthText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String, 
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const reactionSchema = new Schema(
    {
        reactionId: [{ 
            type: Schema.Types.Object, 
            default: () => new ObjectId(),
         }],
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }, 
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = thoughtSchema;