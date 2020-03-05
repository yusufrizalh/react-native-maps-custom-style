import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, { Marker, Polyline, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'; 

const imgMarker = require('./imgs/placeholder.png');

mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 5
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 5
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      markers: [
        {
          title: 'Inixindo Surabaya', 
          description: 'Lembaga Training IT di Surabaya', 
          coordinates: {
            latitude: -7.3239686, 
            longitude: 112.739035, 
          }, 
        }, 
        {
          title: 'Honda Jemursari', 
          description: 'Dealer dan Bengkel Resmi Honda', 
          coordinates: {
            latitude: -7.3152139, 
            longitude: 112.7509183, 
          }, 
        }, 
        {
          title: 'Petra Christian University', 
          description: 'Universitas Kristen Petra di Siwalankerto', 
          coordinates: {
            latitude: -7.3395519, 
            longitude: 112.7353752, 
          }, 
        }, 
        {
          title: 'Transmart Rungkut', 
          description: 'Belanja Barang Retail dan Kebutuhan Harian Anda', 
          coordinates: {
            latitude: -7.320895, 
            longitude: 112.7681156, 
          }, 
        }, 
      ], 
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
          customMapStyle={mapStyles} 
          showsUserLocation={true} 
          showsMyLocationButton={true}
          zoomEnable={true}
          zoomControlEnabled={true}
          minZoomLevel={5} 
          maxZoomLevel={15} 
          initialRegion={{
            latitude: -7.3333751,
            longitude: 112.7894965,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}>
          {
              this.state.markers.map(marker => (
                <Marker 
                  coordinate={marker.coordinates} 
                  title={marker.title} 
                  description={marker.description} 
                  //pinColor={'#6432ed'} 
                  image={imgMarker} 
                  centerOffset={{ x: -18, y: -60 }}
                  anchor={{ x: 0.69, y: 1 }} 
                  onPress={() => this.setState({ marker1: !this.state.marker1 })}
                 />
              ))
            }
            <Polyline
              coordinates={[
                { latitude: -7.3239686, longitude: 112.739035, }, 
                { latitude: -7.3152139, longitude: 112.7509183, }, 
                { latitude: -7.320895, longitude: 112.7681156, },
                { latitude: -7.3395519, longitude: 112.7353752, }, 
                { latitude: -7.3239686, longitude: 112.739035, }, 
              ]}
              strokeColor="#fd2612"
              strokeWidth={3} />
            
        </MapView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },  
  mapStyle: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    width: '100%', 
    height: '100%', 
  }
});