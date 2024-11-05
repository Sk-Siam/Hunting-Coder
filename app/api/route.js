import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
// app/api/user/route.js

// export async function GET(
//   req,
//   res
// ) {
//   try {
//     // Read the file asynchronously

//     const data = await fs.promises.readFile(
//       'blogdata/how-to-learn-flask.json',
//       'utf-8'
//     );

//     res.status(200).json(JSON.parse(data));
//   } catch (error) {
//     console.error('Error:', error);

//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
// export async function POST(req,res) {
  
//   // Read the file asynchronously
 
//   fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8', (err, data) => {
//     if (err) {
 
//       Response.json({ error: 'Internal Server Error' },{
//         status:(500)
//       });
//     }
//     if (!data) {
//       return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
//     }
//     console.log(data)
//     return Response.json(JSON.parse(data),{
//       status:(200)
//     });
//   })
// }

// import fs from 'fs';


// export async function GET(req) {
//   // Define the path to the file
  

//   // Return a new promise to handle asynchronous file reading
   
//     // Read the file asynchronously with a callback
//    fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8', (err, data) => {
//       if (err) {
//         // Handle file read errors
//         console.error('Error reading file:', err);
//         Response.json({ error: 'Failed to read file' }, { status: 500 });
//         return;
//       }

//       // Attempt to parse the data
      
      
//       // Check if parsing was successful
//       const jsonData = JSON.parse(data);
//       if (jsonData) {
//         return  Response.json(JSON.parse(data), { status: 200 });
//       } else {
//         // Handle case where data cannot be parsed
//         Response.json({ error: 'Invalid JSON format' }, { status: 500 });
//       }
     
//     }
   
//   );
//   return Response.json(jsonData, { status: 200 });
//   } 

// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET(req) {
//   // Define the file name directly
//   const fileName = 'how-to-learn-flask.json';

//   // Use the path module to construct the file path relative to the current directory
//   const filePath = path.resolve('blogdata', fileName);

//   // Return a new promise to handle asynchronous file reading
//   return new Promise((resolve) => {
//     // Read the file asynchronously with a callback
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//       if (err) {
//         // Handle file read errors
//         console.error('Error reading file:', err);
//         resolve(NextResponse.json({ error: 'Failed to read file' }, { status: 500 }));
//         return;
//       }

//       // Attempt to parse the data
//       let parsedData;
//       try {
//         parsedData = JSON.parse(data);
//       } catch (parseError) {
//         // Handle JSON parsing errors
//         console.error('Error parsing JSON:', parseError);
//         resolve(NextResponse.json({ error: 'Invalid JSON format' }, { status: 500 }));
//         return;
//       }

//       // Return the parsed data
//       resolve(NextResponse.json(parsedData, { status: 200 }));
//     });
//   });
// }


// import { NextResponse } from 'next/server';
// import fs from 'fs/promises';
// import path from 'path';

// export async function GET(req) {
//   // Define the path to the file
//   const filePath = path.join(process.cwd(), 'blogdata', 'how-to-learn-flask.json');

//   // Read the file asynchronously using fs.promises without using a manual Promise
//   const data = await fs.readFile(filePath, 'utf-8').catch((err) => {
//     console.error('Error reading file:', err);
//     return null;
//   });

//   // If data is null, file reading failed
//   if (!data) {
//     return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
//   }

//   // Attempt to parse the data
//   let parsedData;
//   try {
//     parsedData = JSON.parse(data);
//   } catch (err) {
//     console.error('Error parsing JSON:', err);
//     return NextResponse.json({ error: 'Invalid JSON format' }, { status: 500 });
//   }

//   // Return the successfully parsed data
//   return NextResponse.json(parsedData, { status: 200 });
// }







// export function GET(req) {
//   fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return Response.json({ error: 'Failed to read file' }, { status: 500 });
//     }

//     return Response.json(JSON.parse(data), { status: 200 });
//   });
// }
// export async function GET(req) {
//   const filePath = "blogdata/how-to-learn-flask.json";

//   fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return Response.json({ error: 'Failed to read file' }, { status: 500 });
//     }

//     try {
//       const jsonData = JSON.parse(data);
//       return Response.json(jsonData, { status: 200 });
//     } catch (parseErr) {
//       console.error('Error parsing JSON:', parseErr);
//       return Response.json({ error: 'Invalid JSON format' }, { status: 500 });
//     }
//   });
// }
// export async function GET(req) {
//   const filePath = "blogdata/how-to-learn-flask.json";

//   try {
//     const data =  fs.readFile(filePath, 'utf-8');
//     const jsonData = JSON.parse(data);
//     console.log(JSON.parse(data))
//     return Response.json(JSON.parse(data), { status: 200 });  // Return successful response

//   } catch (err) {
//     console.error('Error reading or parsing file:', err);
//     return Response.json({ error: 'Failed to read or parse file' }, { status: 500 });  // Return error response
//   }
// }

// import fs from 'fs';

// export async function GET(req) {
//   try {
//     // Read the file asynchronously
//     const data = fs.readFileSync("blogdata/how-to-learn-flask.json", 'utf-8');

//     // Parse the JSON data
//     const parsedData = JSON.parse(data);

//     // Return the JSON response
//     return new Response(JSON.stringify(parsedData), { status: 200 });
    
//   } catch (err) {
//     // Handle any errors, such as file not found or JSON parsing errors
//     console.error('Error reading or parsing file:', err);

//     // Return an error response
//     return new Response(JSON.stringify({ error: 'Failed to read or parse file' }), { status: 500 });
//   }
// }

// import fs from 'fs';

// export async function GET(req) {
//   // Read the file synchronously
//   const data = fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8');

//   // Check if the file was read successfully
//   if (!data) {
//     console.error('Error: Failed to read file');
//     return new Response(JSON.stringify({ error: 'Failed to read file' }), { status: 500 });
//   }

//   // Parse the JSON data
//   let parsedData = null;
//   parsedData = JSON.parse(data);

//   // If JSON parsing fails, handle the error
//   if (!parsedData) {
//     console.error('Error: Invalid JSON format');
//     return new Response(JSON.stringify({ error: 'Invalid JSON format' }), { status: 500 });
//   }

//   // Return the successful response with the parsed data
//   return  Response.json(parsedData, { status: 200 });
// }
// import fs from 'fs';

// export async function GET(req) {
//   const data = fs.readFileSync("blogdata/how-to-learn-flask.json", 'utf-8');
//   return new Response(data ? data : JSON.stringify({ error: 'Error reading file or invalid JSON' }), { status: data ? 200 : 500 });
// }
// import fs from 'fs';

// export async function GET(req) {
//   return new Response(fs.readFileSync("blogdata/how-to-learn-flask.json", 'utf-8'));
// }
// import fs from 'fs';

// export async function GET(req) {
//   const data = fs.readFileSync("blogdata/how-to-learn-flask.json", 'utf-8');

//   if (data) {
//     return new Response(data, { status: 200 });
//   } else {
//     return new Response(JSON.stringify({ error: 'Failed to read file' }), { status: 500 });
//   }
// }
// let parsedData;
// export async function GET(req, res) {

//   const data = await fs.readFile("blogdata/how-to-learn-flask.json" , 'utf-8', (err,data)=>{
//     let parsedData = JSON.parse(data);
//     NextResponse.json(parsedData,{status:200});
//   })
//   return NextResponse.json(parsedData,{status:200});
  
// }
// // export async function GET(req) {


//   const data = await fs.promises.readFile("blogdata/how-to-learn-flask.json", 'utf-8');
   

//   return Response.json(JSON.parse(data), { status: 200 });
// }
// export async function GET() {
//   const data = await fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8');
//   return NextResponse.json(JSON.parse(data), { status: 200 });
// }
// export async function GET(req, res) {
//   let data1;
//   fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8', (err, data) => {
//     if (err) {
//       Response.json({ message: "Error reading file" },{
//                  status:(500)
//             });
//       return;
//     } data1 = JSON.parse(data);

//     Response.json(data1, { status: 200 });
//     console.log(data1);
//   });

// }
// export function GET(req, res) {
//   const data = fs.readFile("blogdata/how-to-learn-flask.json", 'utf-8')
//     if (err) {
//       console.error(err); 
//       Response.json({ message: "Error reading file" },{
//         status:(500)
//       });
//     } else {
//       const jsonData = JSON.parse(data);
//       Response.json(jsonData, { status: 200 });
//     }
//   };



// export function GET(){ fs.readFile('blogdata/how-to-learn-flask.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// }


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


