import mongoose from "mongoose"

const { Schema, model } = mongoose

const postsSchema = new Schema(
    {
        text: { type: String, required: true },
        image: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true
    }
)

postsSchema.static("findPostsWithUsers", async function (query) {
    const posts = await this.find(query.criteria, query.options.fields)
        .limit(query.options.limit)
        .skip(query.options.skip)
        .sort(query.options.sort)
        .populate({ path: "user", select: "name surname title image" })
})

postsSchema.static("findPostWithUser", async function (id) {
    const post = await this.findById(id).populate({
        path: "user", select: "name surname title image"
    })
    return post
})

export default model("Post", postsSchema)