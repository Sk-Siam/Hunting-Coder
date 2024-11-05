import * as fs from 'fs'


export async function GET(req, res) {
  // app/api/user/route.js
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




// This is the recommended syntax for handling GET requests in Next.js 14.x
// export async function GET(req) {
//   try {
//     // Extract slug from URL using the searchParams API
//     const { searchParams } = new URL(req.url);
//     const slug = searchParams.get('slug');

//     if (!slug) {
//       return NextResponse.json({ error: "Slug is required" }, { status: 400 });
//     }

//     // Fetch the blog data from the file system
//     const data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    
//     // Return the JSON response
//     return NextResponse.json(JSON.parse(data), { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "No such blog found" }, { status: 500 });
//   }
// }




// export async function GET(req, res) {
  
//   if (!req.query.slug) {
//     return res.status(400).json({ error: "Missing slug parameter" });
//   }

//   try {
//     const filePath = `blogdata/${req.query.slug}.json`;
//     const data = await fs.promises.readFile(filePath, 'utf-8'); // Use promises for async/await

//     res.status(200).json(JSON.parse(data));
//   } catch (err) {
//     console.error(err); // Log the error for debugging
//     res.status(500).json({ error: "Error reading blog data" });
//   }
// }


// fs.readFile(`blogdata/how-to-learn-flask.json.json`, 'utf-8', (err, data) => {
//   if (err) {
//     Response.json({ error: "No such blog found" },{
//       status:(500)
//     })

//   }
//   console.log(req.query)
//   Response.json(JSON.parse(data),{
//     status:(200)
//   })
// })


// import fs from 'fs/promises';

// export async function GET(request) {
//   try {
//     // Example: Read query parameters if needed
//     const url = new URL(request.url);
//     const slug = url.searchParams.get('slug');

//     // Example: Read a file based on query parameters
//     const data = await fs.readFile(`blogdata/${slug}.json`, 'utf-8');
//     const jsonData = JSON.parse(data);

//     return new Response(JSON.stringify(jsonData), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error:', error);

//     return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }