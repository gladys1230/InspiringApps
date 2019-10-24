class Dot {

  constructor(id, color, src, size){
      this.id = id;            
      this.color = color;         
      this.img_src = src;     
      this.size = size;   
  }

  print(){
      return  "<img class='dataDot' "
              + "id='" + this.id + "' "
              + "src='" + this.img_src + "' " 
              + "style='height:" + this.size + "px; width:" + this.size + "px;' "
              + "ondragstart='dragDot(event, \"" + this.img_src+ "\"," + this.size + ", \"" + this.color + "\", \"" + this.id + "\")'"
              + "draggable='true'/>";
  }
}
