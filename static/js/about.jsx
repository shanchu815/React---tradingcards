'use strict';

function Aboutpage() {
    return (
      <React.Fragment>
      <div>
        <h3>Balloonicorn's Friends</h3>
        <p>Shannon is on Github @ shanchu815</p>
        <p>Sahara is on Github @ roadrunnerinthesun</p>
        <a href={"/"}>Click here to go back to the homepage</a>      
        <p><img src="/static/img/balloonicorn.jpg"/></p>
      </div>
      </React.Fragment>
    );
  }

ReactDOM.render(<Aboutpage />, document.querySelector('#ourinfo'));
  