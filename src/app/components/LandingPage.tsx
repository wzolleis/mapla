import React, { useState } from 'react';
import Map from '../../map/components/Map';
import { MarkerData } from '../appTypes'
import { INITIAL_POSITION } from '../../common/constants'


export const LandingPage = () => {
    const [markersData, setMarkersData] = useState([
        {latLng: INITIAL_POSITION, title: 1}
    ]);

    const addMarker = () => {
        const lastMarker: MarkerData = markersData[markersData.length - 1];

        setMarkersData([
            ...markersData,
            {
                title: +lastMarker.title + 1,
                latLng: {
                    lat: lastMarker.latLng.lat + 0.0001,
                    lng: lastMarker.latLng.lng + 0.0001
                }
            }
        ]);
    }

    return (
        <div>
            <Map markersData={markersData}/>
        </div>
    );
}