<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cvet</title>
</head>
<body id="body">
    <main>
        <div id="formContain">
            <div id="form">
                <input type="text" placeholder="Name" id="text">
                <select name="" id="type">
                    <option value="HEX">HEX</option>
                    <option value="RGB">RGB</option>
                </select>
                <input type="text" placeholder="color" id="color">
                <button id="save">save</button>
                <button id="clear">clear</button>
            </div>
        </div>
        <div id="colorsContain">
            
        </div>
    </main>
    <script src="js-cookie/dist/js.cookie.min.js"></script>
    <script src="script.js"></script>
</body>
</html>