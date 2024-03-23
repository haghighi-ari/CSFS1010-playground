function whoosh() {
     const swoosh = () => {
          alert("wow!");
     }

     return (
          <button onClick={swoosh}>NYOOM!!</button>
     );
}

function renderWhoosh() {
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(<whoosh />);
   }

   export { whoosh, renderWhoosh };