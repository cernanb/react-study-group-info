


JSX

var App = (
  <div>
    <h1>
      <h3></h3>
      <p></p>
    </h1>
  </div>
);

Versus

JS

var App = (
  React.createElement("div", null,
    React.createElement("h1", null,
      React.createElement("h3", null),
      React.createElement("p", null)
    )
  )
);
