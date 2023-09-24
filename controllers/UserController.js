const { User, Thought } = require('../models');

module.exports = {
    // get all Users    
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get one User by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findById({ _id: req.params.userId }).populate('thoughts').populate('friends');

            if (!user) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a User
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update a User by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a User by id and remove thoughts associated with that user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // add a friend to a User's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // remove a friend from a User's friend list
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'Uh oh, no user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}; 