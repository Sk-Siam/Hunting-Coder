import * as fs from 'fs';

export async function GET(req, res) {
    let data = await fs.promises.readdir("blogdata");
    let allCount = data.length;
    
    let myfile;
    let allBlogs = [];
      for (let index = 0; index < 2; index++) {
        const item = data[index];
        
        
        myfile = await fs.promises.readFile("blogdata/" + item, 'utf-8') 
        
        allBlogs.push(JSON.parse(myfile))
  
      }
    
    return Response.json(allCount, { status: 200 });
  }