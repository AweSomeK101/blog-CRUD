const blogDAO = require("../Model/blogModel");

class blogController{
    static async getAllBlogs(req, res) {
        console.log(req.query)
        try {
            const {page, limit, sortBy, filterBy} = req.query;
            const data = await blogDAO.getBlogs(page, limit, sortBy, filterBy);
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({status: "error", message: error});
        }
        res.send({status: "reached"});
    }

    static async createBlog(req, res){
        try {
            const data = await blogDAO.createDocument(req.body);
            if(data && data.status) return res.status(data.errCode).send(data);
            res.status(201).send(data)
            
        } catch (error) {
            console.error(error);
            res.status(500).send({status: "error", message: error});
        }
    }

    static async updateBlog(req, res){
        try {
            const data = await blogDAO.updateDocument(req.params.id, req.body);
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({status: "error", message: error});
        }
    }

    static async getBlog(req, res){
        try{
            const data = await blogDAO.getDocument(req.params.id);
            if(data && data.status) return res.status(data.errCode).send(data);
            if(!data) return res.status(404).send();
            res.send(data);
        } catch(error) {
            console.error(error);
            res.status(500).send({status: "error", message: error});
        }
    }

    static async removeBlog(req, res){
        try{
            const data = await blogDAO.removeDocument(req.params.id);
            if(data.status) return res.status(data.errCode).send(data);
            res.send();
        } catch(error) {
            console.error(error);
            res.status(500).send({status: "error", message: error});
        }
    }
}

module.exports = blogController;