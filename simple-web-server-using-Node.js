var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
<html>
<body>
    <form name="form1">
      <input name="answer">
      <input type="button" value="Calculate" onclick="myFunction()">
    </form>
    <script>
        function myFunction() {
            form1.answer.value = eval(form1.answer.value);
        }
    </script>
    <style>
        input[type="button"] {
        background-color: #4CAF50;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        }
        
        input[type="button"]:hover {
        background-color: #3e8e41;
        }
    </style>
</body>  
</html>
  `);
  res.end();
}).listen(8080);