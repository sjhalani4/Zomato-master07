import React from 'react'
//icon
import { AiOutlineCamera } from 'react-icons/ai';


const ImageGrid = (props) => {
    return (
        <>
        <div className="w-full h-60  overflow:hidden  md:hidden">
             <img src={props.images.length && props.images[0].location}
              alt="Restaurant Image"
              className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-110 " />
              </div>
              <div className="hidden w-full h-96 md:flex gap-1">
                  <div className="w-full h-full overflow-hidden">
                  <img src={props.images.length && props.images[0].location}
                     alt="Restaurant Image"
                    className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-110 " />
                  </div>
                  <div className="w-1/4 flex flex-col gap-1 h-full  overflow-hidden">
                  <img src={props.images.length>=1 && props.images[1].location}
                     alt="Restaurant Image"
                    className="w-full h-2/4 object-cover rounded-lg transform transition duration-500 hover:scale-110" />
                    <img src={props.images.length>=2 && props.images[2].location}
                     alt="Restaurant Image"
                    className="w-full h-2/4 object-cover rounded-lg transform transition duration-500 hover:scale-110" />
                    </div>
                    <div className="w-1/4 flex flex-col gap-1 h-full">
                  <div className="w-full h-2/4 relative">
                  <img src={props.images.length>=3 && props.images[3].location}
                     alt="Restaurant Image"
                    className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute rounded-lg inset-0 bg-opacity-40 bg-black w-full h-full">
                        <h4 className="absolute z-20 inset-y-1/2 text-center w-full h-full text-white font-semibold">
                            view gallery
                        </h4>
                    </div>
                  </div>
                  <div className="w-full h-2/4 relative">
                  <img src={props.images.length>=4 && props.images[4].location}
                     alt="Restaurant Image"
                    className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute rounded-lg inset-0 bg-opacity-90 text-white bg-gray-400 w-full h-full ">
                        <div className="absolute z-20 inset-y-1/4 items-center w-full h-full flex flex-col font-semibold">
                                <div className="bg-black bg-opacity-50 p-3 rounded-full text-3xl">
                                <AiOutlineCamera />
                                 </div>

                        <h4 >
                           Add Photos
                        </h4>
                        </div>
                    </div>
                  </div>
                    </div>
                  

              </div>
            
        </>

    );
};

export default ImageGrid;
