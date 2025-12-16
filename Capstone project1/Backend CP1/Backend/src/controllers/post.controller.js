import { Post } from '../models/post.model.js';

//create a post
const createPost = async (req, res) => {
    try {
        const { name, description } = req.body;

        if(!name || !description ) {
            return res.status(400).json({ 
                message: "All fields are required." 
            });
        }

        const post = await Post.create({ name, description });

        return res.status(201).json({
            message: "Post created successfully", post
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error", error
        });    
    }
}

export {
    createPost
}
