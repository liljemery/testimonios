import './App.css';



function Catalog() {
  return (
    <div className='d-flex mx-auto mt-2'>
        <div class="card">
            <img class="card-img-top" src="https://images.pexels.com/photos/7299586/pexels-photo-7299586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="https://images.pexels.com/photos/7319478/pexels-photo-7319478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="https://images.pexels.com/photos/7299585/pexels-photo-7299585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
);
}

export default Catalog;