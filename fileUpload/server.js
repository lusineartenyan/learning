import http from 'node:http';
import formidable, {errors as formidableErrors} from 'formidable';
import fs from 'fs';
import path from "path"
const __dirname = path.resolve();


const server = http.createServer(async (req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        // parse a file upload
        const form = formidable({});
        let fields;
        let files;
            try {
                [fields, files] = await form.parse(req);
                let filepath = files.fileupload[0].filepath;
                let newpath = path.join( __dirname, 'uploads/') + files.fileupload[0].originalFilename;

                //Copy the uploaded file to a custom folder
                fs.rename(filepath, newpath, function () {
                    //Send a NodeJS file upload confirmation message
                    res.write('Successfully Uploaded!');
                    res.end();
                });
            } catch (err) {
                if (err.code === formidableErrors.maxFieldsExceeded) {
                    console.log('big file')
                }
                console.error(err);
                res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
                res.end(String(err));
                return;
            }
    }

// show a file upload form
fs.readFile(__dirname + '/view/upload.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});