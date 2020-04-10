import React, { useState, useEffect } from 'react'
import L from 'leaflet'
import me from '../img/front-wedding.jpg'
import marker from '../img/iconfinder_map-marker_285659.png'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const NASAtile =
  'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}'

const thunderForestDark =
  'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}'

const cartoLight =
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'

const stadia =
  'https:tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'

const Contact = () => {
  const [map, setMap] = useState()
  const [colorScheme, setColorScheme] = useState('dark')
  const [layer, setLayer] = useState()

  useEffect(() => {
    const tileLayer = L.tileLayer(stadia, {
      attribution: 'stadia | carto',
    })
    setLayer(tileLayer)

    const m = L.map('map', {
      center: new L.LatLng(38.262, -85.7372),
      zoom: 13,
      minZoom: 3,
      layers: [tileLayer],
    })

    m.zoomControl.setPosition('bottomright')

    const icon = L.icon({
      iconUrl: marker,
      iconSize: [40, 40],
    })

    L.marker([38.2776, -85.7372], { icon }).addTo(m)

    setMap(m)
  }, [])

  const iconBase = {
    width: '30px',
    height: '30px',
    padding: '6px',
    textAlign: 'center',
    borderRadius: '50%',
  }

  const renderIconStyle = (scheme) => {
    if (scheme === 'dark')
      return {
        ...iconBase,
        color: 'white',
        backgroundColor: 'black',
        transform: 'translateY(2em)',
      }
    return { ...iconBase, color: 'black', backgroundColor: 'white' }
  }

  return (
    <div className="wrapper contact">
      {'Contact'.split('').map((l, i) => (
        <span className="view-header-item" data-letter={l} key={i}>
          {l}
        </span>
      ))}
      <span
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '2em',
          transform: 'translateY(-0.5em)',
          marginLeft: '12px',
          backgroundColor: 'rgba(2,16,38, 0.8)',
          padding: '6px',
          borderRadius: '10px',
          fontFamily: 'Merriweather',
          color: '#F2EEDA',
        }}
      >
        <i className="fas fa-at" />: jonathan.m.whittle (gmail)
      </span>
      <div
        style={{
          width: '100%',
          height: '85%',
          marginTop: '2em',
          border: '3px solid rgba(0,0,0,0.7)',
          borderRadius: '10px',
        }}
      >
        <div id="map" />
        <div className={`map-legend ${colorScheme}`}>
          <h2>I'm always open to hear about an opportunity</h2>
          <p>
            Relocation:
            <span>
              <i
                className="fas fa-window-close"
                style={{ color: 'red', marginLeft: '12px' }}
              />
            </span>
          </p>
          <p>
            Remote:
            <span>
              <i
                className="fas fa-check"
                style={{ color: 'green', marginLeft: '12px' }}
              />
            </span>
          </p>
          <p>
            Availability: <span>10-15 hrs/week</span>
          </p>
        </div>
        <div className="map-color">
          <i
            className={`fas fa-${
              colorScheme === 'dark' ? 'moon' : 'sun'
            } click`}
            style={renderIconStyle(colorScheme)}
            onClick={() => {
              const [next, tiles] =
                colorScheme === 'light'
                  ? ['dark', stadia]
                  : ['light', cartoLight]
              setColorScheme(next)
              layer.setUrl(tiles)
            }}
          />
        </div>
        <div className="map-slide">{'   '}</div>
      </div>
    </div>
  )
}

export default Contact
