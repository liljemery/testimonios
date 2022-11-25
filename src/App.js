import './App.css';



function App() {
  return (
    <div className='mx-auto mt-2'>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img className='d-block w-100' src="https://static.vecteezy.com/system/resources/previews/001/138/321/non_2x/couple-having-their-house-built-photo.jpg" alt="First slide"/>
            </div>
        </div>
      </div>
      <div id='cardcontainer' className='d-flex mt-3'>
          <div class="card mx-2">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card mx-2">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card mx-2">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
      </div>
    </div>
);
}

export default App;
