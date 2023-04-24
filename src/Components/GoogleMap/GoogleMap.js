import React from 'react';

const GoogleMap = () => {
    return (
        <div>
            
          <iframe
            style={{ "height": "500px", "width": "100%", "border": "0"}}
            frameborder=' 0 '
            src="https://www.google.com/maps/embed/v1/place?q=Dhaka,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
    );
};

export default GoogleMap;