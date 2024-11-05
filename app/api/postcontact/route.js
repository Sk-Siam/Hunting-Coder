import * as fs from 'fs'
export async function POST(req, res) {
const request = await req.json();
let data = await fs.promises.readdir('contactdata')

  fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(request))
    return Response.json(JSON.stringify(request),{status:(201)})
    
 
  }