import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { INITIAL_POSITION } from '../../common/constants'
import { MarkerData } from '../../app/appTypes'

const style = {
    width: "100%",
    height: "600px"
};

const Map = ({ markersData }: {markersData: MarkerData[]}) => {
    // create map
    const mapRef = useRef(null);
    useEffect(() => {
        // @ts-ignore
        mapRef.current = L.map("map", {
            center: [INITIAL_POSITION.lat, INITIAL_POSITION.lng],
            zoom: 16,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });
    }, []);

    // add layer
    const layerRef = useRef(null);
    useEffect(() => {
        // @ts-ignore
        layerRef.current = L.layerGroup().addTo(mapRef.current);
    }, []);

    // update markers
    useEffect(
        () => {
            // @ts-ignore
            layerRef.current.clearLayers();
            markersData.forEach(marker => {
                // @ts-ignore
                L.marker(marker.latLng, { title: marker.title }).addTo(
                    layerRef.current
                );
            });
        },
        [markersData]
    );

    return <div id="map" style={style} />;
}

export default Map;
