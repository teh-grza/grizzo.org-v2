import React, { Component } from "react";
import AnimatedWrapper from "./../AnimatedWrapper";
class ProfessionalPage extends Component {
 render() {
  return (
   <div className="page">
     <h1>professional interests</h1>
     <section>
      <div className="text_wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nisl nulla. Nam vel lobortis enim. Vivamus consectetur metus eros, et vehicula orci euismod et. Sed auctor lorem non enim pretium accumsan convallis vel risus. Curabitur feugiat est et orci mattis, sit amet aliquet libero accumsan. Nulla sed ex eget eros accumsan congue euismod sit amet ipsum. Nulla sed magna quis neque luctus blandit. Aenean feugiat orci et tortor tempor scelerisque. Etiam iaculis odio nisl, inconsequat nisl gravida vel. Vestibulum volutpat quis est ut varius. Ut vel felis consequat, vehicula justo ac, rutrum nisl. Nulla et metus porttitor leo ultricies cursus.
        </p>
        <h2>Ut fringilla congue orci a porttitor.</h2>
        <p>Donec risus leo, tincidunt nec lacinia vel, egestas id ligula. Quisque efficitur sem ac ex tincidunt fringilla. Sed ac accumsan nunc, eget placerat lectus. Vestibulum et interdum nisl, a ultrices sem. Duis nec tempus turpis. Fusce feugiat volutpat nisi vel faucibus. Integer laoreet nulla in justo dictum, quis molestie odio blandit. Aliquam sagittis enim quis facilisis tempor. Aliquam ac convallis lorem. Praesent rhoncus leo sit amet scelerisque imperdiet. Etiam mattis leo quis nunc pretium, eget fermentum arcu ullamcorper. Aliquam volutpat faucibus nisl nec pharetra. Fusce nec feugiat neque. Mauris tempus porttitor efficitur. Quisque in ipsum ut lorem tincidunt faucibus vel nec lacus.
        </p>
      </div>
    </section>
    <section>
      <div className="text_wrapper">
        <h2>Suspendisse potenti.</h2>
        <p>Mauris eu pellentesque mi. Vestibulum felis lectus, hendrerit sed lectus ac, tempor malesuada metus. Aliquam non tristique ipsum. Nunc sed iaculis ligula. Praesent vulputate nisl nec bibendum gravida. In vitae turpis sit amet lectus interdum vulputate sit amet eu augue. Praesent sollicitudin, erat eu dictum molestie, ex enim sagittis erat, sed dapibus purus leo sit amet ex. Vivamus quis lacus sagittis, luctus ipsum suscipit, aliquet elit. Curabitur et ex at ipsum ullamcorper suscipit vel quis nisl. Donec consequat in dolor non gravida. Donec hendrerit pellentesque arcu, sed sagittis eros tempus congue. Ut eros erat, condimentum at orci elementum, congue fermentum augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id quam et odio gravida elementum.
        </p>
      </div>
    </section>
  </div>
  )
 }
}
const Professional = AnimatedWrapper(ProfessionalPage);
export default Professional;
