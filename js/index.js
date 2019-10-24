//background logo and color dots
var START= {                                           
  "logo": "imgs/ia-logo-back.png",
  "dots": [
    {"color":"black", "src": "imgs/ia-logo-dot-black.png"},
    {"color":"blue", "src": "imgs/ia-logo-dot-blue.png"},
    {"color":"green", "src": "imgs/ia-logo-dot-green.png"},
    {"color":"red", "src": "imgs/ia-logo-dot-red.png"}
  ],
  //indicatating the color dots are positioned as centered as possible
  "boxes": [
    {"x": 40, "y": 185, "color": "black"},
    {"x": 410, "y": 280, "color": "black"},
    {"x": 450, "y": 65, "color": "red"},
    {"x": 135, "y": 330, "color": "green"},
    {"x": 270, "y": 40, "color": "blue"}
]
};
var DOTS = [];
var BOXES = [];
var CORRECTS = 0;

// called once when the app starts
function initialize(){
  var workspace = $("#logoArea");

  START.height = workspace.height();
  START.width = workspace.width();
  START.logoSize = START.height;
  START.dotSize = START.logoSize * (100 / 600);    
  START.ratio = START.logoSize / 600;
  loadImages();
}
// loads images into the logoArea and populates global data
function loadImages(){
  var workspace = $("#logoArea");
  var dotRack = $("<div class='row d-flex justify-content-between' style='min-width:" + START.logoSize + "px; max-width:" + START.logoSize + "px'></div>");
  workspace.append(dotRack);
  
  var id = 1;

  // Load images of the color dots
  $(START.dots).each(function(){

      var d = new Dot("dot"+id, this.color, this.src, START.dotSize);
      
      id = id + 1;

      dotRack.append(d.print());
      DOTS.push(d);

      // the logo has 2 black color dots
      if(this.color == "black"){
          d = new Dot("dot"+id, this.color, this.src, START.dotSize);
          id = id + 1;
          dotRack.append(d.print());
          DOTS.push(d);
      }
      
  });

  var logoArea = $("<div class='row d-flex justify-content-between mt-1' style='min-width:" + START.logoSize + "px; max-width:" + START.logoSize + "px'></div>");
  workspace.append(logoArea);
  logoArea.append("<img src='" + START.logo + "' style='position: absolute; height:" + START.logoSize + "px; width:" + START.logoSize + "px;' z-index: 0;/>");

  // append boxes
  $(START.boxes).each(function(){
      var s = new Box(START.ratio, this.color, this.x, this.y, START.dotSize);
      BOXES.push(s);
      logoArea.append(s.print());
  });

  messageLog("Get the color dots to their boxes. Have Fun!");
}

//messageLog to the area under the reset button
function messageLog(message, type = "basic") {
  var bullet = $("<li>" + message + "</li>");

  if(type === "error") {
    bullet.addClass("text-danger");
  }
  $("#messageList").prepend(bullet)
}

// Initialize
$(document).ready(function(){
  initialize();
});

// When a color Dot is at the wrong Box
function reject(ex){
  messageLog(ex, "error");
}

// drag dots handling
function dragDot(dr, src, size, color, id){
  dr.dataTransfer.setData("text/plain", JSON.stringify ({"color": color, "id": id}));
  dr.dataTransfer.setDragImage(new Image(src), size, size);
  dr.dataTransfer.dropEffect = "move";
}

// drag dots over to box
function dragDotOver(dr){
  dr.preventDefault();
  dr.dataTransfer.dropEffect = "move"
}

// drop dots to boxes
function dropDot(dr, color){
  dr.preventDefault();

  var td = JSON.parse(dr.dataTransfer.getData("text/plain"));
  try{
      if(color == td.color){
          //when the 2nd block dot goes to the occupied block dot box, shows this message
          if($(dr.target).children().length > 0 || $(dr.target).hasClass("dataDot")){
              throw "This box is occupied, find another one!"
          }else{
              CORRECTS = CORRECTS + 1;            
              var dot = document.getElementById(td.id);
              dot.draggable = false;
              dr.target.append(dot);

              if(CORRECTS == 5){
                  winner();
              }else{
                  messageLog("Correct! " + (5 - CORRECTS) + " dots left to go!");
              }
          }
      //otherwise, shows this message
      }else{
          throw "Wrong color dot for this box!";
      }
  }catch(ex){
      reject(ex);
  }
}

//Resets to the starting state
function reset(){
  messageLog("Color dots going back to the starting position");
  DOTS = [];
  BOXES = [];
  CORRECTS = 0;
  $("#logoArea").empty();
  loadImages();
}

//When there is the Winner!!!
function winner(){
  messageLog("You are the Champion!!!");
  $("#winnerIsHere").modal("show");
}

