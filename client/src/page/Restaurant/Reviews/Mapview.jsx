import React from 'react'
import { MdContentCopy } from 'react-icons/md';
import { FaDirections } from 'react-icons/fa';
//Map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Mapview = (props) => {
    return (
        <>
        <div>
                  <div className="">
                  <h4 className="text-xl font-medium  ">Call</h4>
                  <h5 className="text-zomato-400 font-medium">{props.phno}</h5>
                  </div>
                  <div>
                  <h4 className="text-xl font-medium  ">Direction</h4>
                 <div className="w-full h-48">
                 <MapContainer   center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={props.mapLocation}>
                        <Popup>
                         {props.title}
                        </Popup>

                      </Marker>
                    </MapContainer>
                  
                 </div>
                  </div>
                  <p>{props.address}</p>
                 <div className="flex items-center gap-3">
                 <button className="flex gap-1 items-center px-3 py-2 border border-gray-400 rounded-lg font-light">
                    <MdContentCopy className="text-gray-400"/> Copy
                 </button>
                 <button className="flex gap-1 items-center px-3 py-2 border border-gray-400 rounded-lg font-light" >
                   <FaDirections className="text-zomato-400"/> Direction
                 </button>
                 </div>
        </div>
            
        </>
        
    );
};

export default Mapview;
