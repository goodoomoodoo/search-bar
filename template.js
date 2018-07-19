export const template = ( content, preloadedState ) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
                <meta charset="UTF-8">
                <meta name="title" content="Server Side React App">
                <meta name="keywords" content="HTML,CSS,JS,Reactjs,Nodejs">
                <meta name="author" content="Arvin Lin">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SEARCH</title>
                <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div id="root">${ content }</div>
            <script>window.__INITIAL_STATE__=${ JSON.stringify( preloadedState ) }</script>
            <script type="text/javascript" src="bundle.js"></script>
        </body>
    </html>
    `
} 