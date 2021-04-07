module.exports = (
    {
        src
    }
) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
        body {
            padding: 0;
            margin: 0;
        }
        iframe {
            left: 0;
            height: 100vh;
            width: 100vw;
            border: 0;
        }   
    </style>
    </head>
    <body>
        <iframe
            src="${src}"
        ></iframe>
    </body>
    </html>
`;