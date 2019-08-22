import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'


type State = {
    lat: number,
    lng: number,
    zoom: number,
}

class MapContainer extends Component<{}, State> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13
    }

    render() {
        const position: LatLngExpression = [this.state.lat, this.state.lng]
        return (
            <div id={'MapContainer-test'}>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

export default MapContainer;