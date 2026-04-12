import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
export const authorApp = exp.Router();

//Write article (protected route)
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
  //get articleObj from client
  const articleObj = req.body;
  //get user from decoded token
  //console.log(req.user);
  let user = req.user;
  //check author
  let author = await UserModel.findById(articleObj.author);
  //cross check emails
  if (author.email != user.email) {
    return res.status(403).json({ message: "You are not authorized" });
  }
  if (!author) {
    return res.status(404).json({ message: "Invalid author" });
  }

  //create article Document
  const articleDoc = new ArticleModel(articleObj);
  //save
  await articleDoc.save();
  //send res
  res.status(201).json({ message: "Article published successfully" });
});

//Read own articles
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
  //rget author id from decoded token
  const authorIdOfToken = req.user?.id;
  //get artcles by author id
  const articlesList = await ArticleModel.find({ author: authorIdOfToken });
  //send res
  res.status(200).json({ message: "articles", payload: articlesList });
});

//Edit article
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
  //get author id from decoded token
  const authorIdOfToken = req.user?.id;
  //get modified article from client
  const { articleId, title, category, content } = req.body; // {artcileId,title,category,content}
  const modifiedArticle = await ArticleModel.findOneAndUpdate(
    { _id: articleId, author: authorIdOfToken },
    { $set: { title, category, content } },
    { new: true },
  );

  //if either artcile id or author not correct
  if (!modifiedArticle) {
    return res.status(403).json({ message: "Not authorized to edit artcile" });
  }
  //send res
  res.status(200).json({ message: "Article modified", payload: modifiedArticle });
});

//Delete article(soft delete)
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
  //get author id from decoded token
  const authorIdOfToken = req.user?.id;
  //get modified article from client
  const { articleId, isArticleActive } = req.body;
  //get article by id
  const articleOfDB = await ArticleModel.findOne({ _id: articleId, author: authorIdOfToken });
  //check status
  if (isArticleActive === articleOfDB.isArticleActive) {
    return res.status(200).json({ message: "Article already in the same state" });
  }

  articleOfDB.isArticleActive = isArticleActive;
  await articleOfDB.save();
  //SEND RES
  res.status(200).json({ message: "Artcile modified", payload: articleOfDB });
});
/*import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middleware/verifyToken.js'
export const authorApp=exp.Router()

//write article (protected route)
authorApp.post("/article",verifyToken("AUTHOR"),async(req,res)=>{

    //get articleObj from Client
    const articleObj=req.body
    let user=req.user
    //check author
    let author=await UserModel.findById(articleObj.author)
    if(author.email!==user.email)
        return res.status(403).json({message:"You are not authorized"})
    if(!author)
        return res.status(404).json({message:"Invalid Author"})

    //create article document
    const articleDoc=new ArticleModel(articleObj)
    //save
    await articleDoc.save()
    //send res
    res.status(201).json({message:"Article published Successfully"})

})
//read own article
authorApp.get("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    //read article by author id
    const idOfToken=req.user?.id
    //get articles by author id
    const articlesList=await ArticleModel.find({author:idOfToken})
    //send res
    res.status(200).json({message:"Articles",payload:articlesList})

})

//edit article
authorApp.put("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    //read article by article id

    const authorIdOfToken=req.user?.id
    //get modified article from client
    const {articleId,title,category,content}=req.body
    const modifiedArticle=await ArticleModel.findOneAndUpdate({
        _id:articleId,author:authorIdOfToken},{$set:{title,category,content}},{new:true})
        if(!modifiedArticle)
            return res.status(403).json({message:"You are not authorized to edit the article"})
    res.status(200).json({message:"Article Modified",payload:modifiedArticle})
})

//delete article (soft delete)
authorApp.patch("/articles1",verifyToken("AUTHOR"),async(req,res)=>{
    //get author id from decoded Token
    const authorIdOfToken=req.user?.id
    //get modified article from client
    const {articleId,isArticleActive}=req.body
    //get article by id
    const articleOfDB=await ArticleModel.findOne({_id:articleId,author:authorIdOfToken})
    //check status
    if(isArticleActive===articleOfDB.isArticleActive)
        return res.status(200).json({message:"Article already in the same state"})
    articleOfDB.isArticleActive=isArticleActive
    await articleOfDB.save()
    //send res
    res.status(200).json({message:"Article Modified"})

})

*/