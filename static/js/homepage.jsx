'use strict';

function Homepage() {
  return (
    <React.Fragment>
    <div>
      <h3>Hi, I'm Balloonicorn, let's play cards together!</h3>
      <a href={"/cards"}>Click here to view the cards</a>
      <p></p>
      <a href={"/about"}>Click here to view information about us</a>      
      <p><img src="/static/img/balloonicorn.jpg"/></p>
    </div>
    </React.Fragment>
  );
}
// the content in the div in function Homepage is what we added
// put react.fragment outside of the div to return multiple elements
ReactDOM.render(<Homepage />, document.querySelector('#app'));

// <a href={"https://gateway.ipfs.io/ipfs/"+this.state.ipfsHash}>Click here to go to home page</a>