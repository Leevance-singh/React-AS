// const heading = document.getElementById("first")  ;

const heading = React.createElement("h1",{id:"second"},"Hello from app.js"); 

const root  = ReactDOM.createRoot(document.getElementById("first"))  ;

root.render(heading) ;
