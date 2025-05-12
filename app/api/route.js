import * as fs from 'fs';

export async function GET(req, res) {
  const { searchParams } = new URL(req.url); 
  const count = searchParams.get('count');
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  data = data.slice(0,parseInt(count)); 
  
  let myfile;
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      
      
      myfile = await fs.promises.readFile("blogdata/" + item, 'utf-8') 
      
      allBlogs.push(JSON.parse(myfile))

    }
  
  return Response.json(allBlogs, { status: 200 });
}


