import RES from"../PRO-img/Restaurent.png"
import CV from "../PRO-img/Resume.png"
import TIC from "../PRO-img/Tic-tac-toe.png"
import LIBRARY from "../PRO-img/Library.png"
import MSG from "../PRO-img/msg-board.png"
import LOGIN from "../PRO-img/login.png"

 export type datas={
    id:number;
    name:string;
    Link:string;
    Repo:string;
    img:string;
    rule:string;
    backend?:string;

}
const data:datas[]=[

  {
    id:0,
    name:"Memory_Game",
  
    Link:"  https://vinoth619.github.io/memory/",
    Repo:"https://github.com/vinoth619/memory.git",
    img:RES,
    rule:""
  },




{
    id:1,
    name:"Restaurent",
    Link:" https://vinoth619.github.io/Rest-webpack/",
    Repo:"https://github.com/vinoth619/Rest-webpack.git",
    img:RES,
    rule:"this project with wepack,css,javascript creating the package.json file and setting up Webpack.Remember, only need to install and configure the things for myproject. we can see the menu card food items in this page"
  },
    {
      id:2,
      name:"Tic-tac",
      Link:"https://vinoth619.github.io/Tic-Tac-toe/",
      Repo:"https://github.com/vinoth619/Tic-Tac-toe.git",
      img:TIC,
      rule:"this project with HTML, CSS and Javascript files and get the Git repo all set up.You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself"
     },

     {   
        id:3,
        name:"Cv maker",
        Link:"https://vinoth619.github.io/res.app/",
        Repo:"https://github.com/vinoth619/res.app.git",
        img:CV,
        rule:"i did create this project with reactjs and css made for buld cv we can add the personal deatils,technical and non technical projects and also we can take pdf "

      },
      
      {
        id:4,
        name:"Library",
        Link:"https://vinoth619.github.io/Library/",
        Repo:"https://github.com/vinoth619/Library.git",
        img:LIBRARY,
        rule:"i did create this project  with java script css and html this is a basic crud application we can create the book and edit and delete them.local storage will helpful storing book data and we can see that in user interface"
      },

      {
        id:5,
        name:"Messege-board",
        Link:"https://msg-board-odin-node-js-3.onrender.com",
        Repo:"https://github.com/vinoth619/message-board2.git",
        img:MSG,
        rule:"i did create this project  with node js and expres js mongodb and moongoose for data base this is a basic crud application we can give two input values first one is name and second one is messge all  the values will be store in mongodb atlas then all the datas are retrived from database and displyed in user interface"
      },

      {
        id:6,
        name:"login-page",
        Link:" https://vinoth619.github.io/odin-login-css/",
        Repo:"https://github.com/vinoth619/odin-login-css.git",
        img:LOGIN,
        rule:"i did create this model login-page using html and css for odin project using flex and grid"
    },{
      id:7,
      name:"comment-box",
      Link:"https://67123c2b3dd60001113fa935--mellow-piroshki-fbe721.netlify.app/",
      Repo:"https://github.com/vinoth619/command_box.git",
      img:"",
      rule:" "
    },
    {
      id:8,
      name:"comment-full",
      Link:"https://neon-empanada-5be293.netlify.app/",
      Repo:"https://github.com/vinoth619/COMMENTBOX_CLIENT.git",
      img:"#",
      backend:"https://github.com/vinoth619/COMMENTBOX_SERVER.git",
      rule:" "
    },
    {
      id:9,
      name:"Rock_Paper",
      Link:"https://vinoth619.github.io/Rockpaper/",
      Repo:"https://github.com/vinoth619/Rockpaper.git",
      img:"#",
    
      rule:" "
    },
    {
      id:10,
      name:"Landing_Page",
      Link:"https://67172d803ddfed472f4a1153--coruscating-dolphin-5a1a89.netlify.app/",
      Repo:"https://github.com/vinoth619/odin-Landingpage.git",
      img:"#",
      rule:" "
    },
    {
      id:11,
      name:"Dash_board",
      Link:"https://vinoth619.github.io/DASHBOARD/",
      Repo:"https://github.com/vinoth619/DASHBOARD.git",
      img:"#",
      rule:" "
    },
    {
      id:12,
      name:"QR_Code_generator",
      Link:" https://vinoth619.github.io/Qr_code/",
      Repo:"https://github.com/vinoth619/Qr_code.git",
      img:"#",
      rule:""
    },
    {
      id:13,
      name:"calculator",
      Link:"https://vinoth619.github.io/ODIN_CALCULATOR/",
      Repo:"https://github.com/vinoth619/ODIN_CALCULATOR.git",
      img:"#",
      rule:""
    },
    // {
    //   id:14,
    //   name:"calculator",
    //   Link:"https://vinoth619.github.io/ODIN_CALCULATOR/",
    //   Repo:"https://github.com/vinoth619/ODIN_CALCULATOR.git",
    //   img:"#",
    //   rule:""
    // },


]

export  default data