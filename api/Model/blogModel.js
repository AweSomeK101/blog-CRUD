const Blog = require("./BlogSchema");

class blogDAO {
  static async createDocument({ name, title, subHeading, content, verified }) {
    try {
      const document = Blog({ name, title, subHeading, content, verified });
      return await document.save();
    } catch (error) {
      console.error(error);
      return { status: "error", message: error.message, errCode: 400 };
    }
  }

  static async getDocuments(page = 1, limit = 10, sortBy, filterBy) {
    try {
      let sort = { name: -1 };
      if (sortBy && sortBy == "date") sort = { createdAt: -1 };
      if (page > 0) {
        page--;
      } else {
        throw new Error({ message: "page cannot be less than 1" });
      }
      if (filterBy == "verified") filterBy = { verified: true };
      return await Blog.find(filterBy)
        .sort(sort)
        .skip(page * limit)
        .limit(limit)
        .exec();
    } catch (error) {
      return { status: "error", message: error.message, errCode: 400 };
    }
  }

  static async updateDocument(id, update={}){
    try {
      await Blog.findByIdAndUpdate(id, update);
      return {status: "succeses"}
    } catch (error) {
      return { status: "error", message: error.message, errCode: 400 };
    }
  }

  static async getDocument(id){
    try {
      return await Blog.findById(id);
    } catch (error) {
      return { status: "error", message: error.message, errCode: 400 };
    }
  }

  static async removeDocument(id){
    try {
      return await Blog.findByIdAndDelete(id);
    } catch (error) {
      return { status: "error", message: error.message, errCode: 400 };
    }
  }
}

module.exports = blogDAO;
