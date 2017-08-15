function createPage(title, head, body) {

    var page = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ${head}
    <title id="title">${title}</title>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/reset.css">
    
</head>
<body>
<div id="container">
    <nav>
        <div id="titleShown">
        </div>
        <div id="buttons">
            <div id="minimize">
                <span>-</span>
            </div>
            <div id="maximize">
                <span>+</span>
            </div>
            <div id="close">
                <span>&times;</span>
            </div>
        </div>
    </nav>
    <main>${body}</main>
</div>

<script src="js/init.js"></script>
<script src="js/menuhandler.js"></script>

</body>
</html>`;

    document.write(page);
}
module.exports.createPage=createPage;