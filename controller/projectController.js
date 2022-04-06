const dotenv = require("dotenv").config();
const uri = process.env.URI;
const { MongoClient } = require("mongodb");

const getProjects = async(req, res) => {
    
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const database = client.db("portfolio");
        const projects = database.collection("projectStore");

        const projectList = await projects.find().toArray();
        res.send(projectList);
        
    } finally {
        await client.close();
    }
};

module.exports = { getProjects };