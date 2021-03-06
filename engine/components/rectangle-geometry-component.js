import Component from "../component.js"
import { Rectangle } from "../geometry/engine-geometry.js";
export default  class RectangleGeometryComponent extends Component{
    constructor(gameObject, width, height){
        super(gameObject);
        this.width = width;
        this.height = height;
        //We don't ask for the x and y because that comes from the game object
    }
    asGeometry(){
        return new Rectangle(this.width, this.height);
    }
}