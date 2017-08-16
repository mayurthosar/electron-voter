function createPage(title, head, body) {

    var page = `<!DOCTYPE html>
<html lang="en" ng-app="voter-app">
<head>
    <meta charset="UTF-8">
   
    <title id="title">${title}</title>  
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script type="text/javascript" src="../node_modules/jquery/dist/jquery.min.js"></script>
  
  
  
     ${head}
    
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

<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../node_modules/angular/angular.js"></script>
<script src="../node_modules/angular-route/angular-route.js"></script>
<script src="js/angular/renderer.js"></script>
<ng-view></ng-view>
<script>
//require('js/angular/renderer.js');
</script>
</body>
</html>`;

    document.write(page);
}
module.exports.createPage=createPage;