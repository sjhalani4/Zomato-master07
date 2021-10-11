import React, {useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import ImageViewer from 'react-simple-image-viewer';

//Redux Actions
import { getImage } from '../../Redux/Reducer/Image/Image.action';


//components
import PhotoCollection from '../../components/restaurant/PhotosCollection'

const Photos = () => {
    const [photos,setPhotos] =useState([
        // "https://b.zmtcdn.com/data/pictures/7/18989677/1f50984e5f01271615675702314b9f1c.jpg",
        // "https://b.zmtcdn.com/data/pictures/7/18989677/a1d3639bf8118e25a4557f4be3c972cd.jpg",
        // "https://b.zmtcdn.com/data/pictures/7/18989677/2ea17780672c8f93dcdddb9d6f4b23f2.jpg",
        // "https://b.zmtcdn.com/data/pictures/7/18989677/a4289ab13ad668dbf9cc48203adee422.jpg"
    ])
    const[isMenuOpen, setIsMenuOpen] = useState(false)
  const[currentImg, setCurrentImg] = useState(0)

  const reduxState = useSelector(
    (globalStore)=> globalStore.restaurant.selectedRestaurant.restaurant
  );
     const dispatch = useDispatch();

     useEffect(() => {
        if(reduxState){
         dispatch(getImage(reduxState?.photos)).then((data)=>{
         const images = [];
           data.payload.image.images.map(({location} )=>images.push(location));
           setPhotos(images);
         });
        }
         }, []);
  const closeViewer = () => setIsMenuOpen(false)
  const openViewer = () => setIsMenuOpen(true)
    return (
        <>
        {isMenuOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ currentImg }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
           <div className="flex flex-wrap gap-2">
           {
               photos.map((photo)=>(<PhotoCollection image={photo} openViewer={openViewer} />))
           }
           </div>
        </>
    );
};

export default Photos;
