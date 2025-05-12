import * as fs from 'fs'


export async function GET(req, res) {
  const {searchParams} = new URL(req.url);
  const slug = searchParams.get('slug');
  // Directly use the file path in the fs.readFile function
  const fileData = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  // Parse the JSON data
  // Return the JSON data in the response
if(!fileData){
  
  console.error('Error:', error);
  
  return  Response(JSON.parse({ error: 'No such blog found' }), {
     status: 500,
    
   });
}
return  Response.json(JSON.parse(fileData), {
  status: 200,
})
}  