class Box {

  constructor(ratio, color, posX, posY, s){
      this.ratio = ratio;             
      this.color = color;                 
      this.x = posX * ratio;          
      this.y = posY * ratio;          
      this.size = s;                  
  }

  print(){
      return  "<div class='dataBox' "
              + "ondragover='dragDotOver(event)'"
              + "ondrop='dropDot(event, \"" + this.color + "\")'"
              + "style='position: absolute; margin-left: " + this.x + "px; margin-top: " + this.y + "px; z-index: 1;"
              + "height: " + this.size + "; width: " + this.size + "'></div>";
  }

}
