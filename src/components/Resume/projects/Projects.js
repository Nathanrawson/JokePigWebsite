import React from 'react';
import SectionHeader from '../SectionHeader';
import Project from './project';

const Projects = (props) => {

    const getImage = (image) => {
        return(<div class="carousel-item active">
        <img class="d-block w-100" src={"data:image/png;base64,"+ image} alt="First slide"></img>
      </div>)
    }
    const GetImages = () => {
        var images;
        if(props.images != null){
            return props.images.map((x, index) => <div className={ index == 0 ? "carousel-item active" : "carousel-item"}>
            <img class="d-block w-100" src={"data:image/png;base64,"+ x} alt="First slide"></img>
          </div>);       
        }
    }
    return (
        <div>
            <SectionHeader h1="Pig Gallery" h3="“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs" />
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    {GetImages()}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}

export default Projects