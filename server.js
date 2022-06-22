const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;

// app.use(mylogger);
const userRouter = require("./routes/user");
// app.use(express.static("public"));
app.set("view engine", "ejs");


// ミドルウェアをルーとディレクトリに適応させない。

app.get("/", (req, res) => {
  // console.log("helloexprees");
  // res.send("こんにちは");
  // res.sendStatus(404);
  // res.status(500).send("エラーです。");
  // res.status(500).json({msg : "エラーです。"});
  res.render("index", {text: "Node.jsとExpress"});
});

// ルーティング
app.use("/user/", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);
// app.use("/product", productRouter);



app.listen(PORT, () => console.log("サーバーが起動しました。"));
// const http = require("http");
// const { listenerCount } = require("process");
// const PORT = 8000;
// const html = require("fs").readFileSync("./index.html")
// //webサーバーを作ろう。ここからサーバーサイドの言語になります。
// //fs ファイルを処理するためのモジュール。
// const server = http.createServer((req, res) => {
  //   //ブラウザからアクセスが来た時の処理を記述していく。
  //   res.writeHead(200, {"Content-Type": "text/html"});
  //   res.write(html);
  //   res.end
  
  //   if (req.method == "GET" ) {
    //   }
    
    //   if (res.method == "POST") {
      //   }
      // });
      
      // server.listen(PORT, () => {
        //   console.log("server running!!!!!");
        // });