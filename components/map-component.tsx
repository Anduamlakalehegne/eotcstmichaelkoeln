"use client"

import { useCallback, useState } from "react"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"

interface Church {
  id: number
  name: string
  address: string
  phone: string
  email: string
  website: string
  region: string
  coordinates: [number, number]
}

interface MapComponentProps {
  churches: Church[]
  selectedChurch: Church | null
  onChurchSelect: (church: Church | null) => void
}

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 51.165691,
  lng: 10.451526,
}

export default function MapComponent({ churches, selectedChurch, onChurchSelect }: MapComponentProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback() {
    setMap(null)
  }, [])

  if (!isLoaded) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      }}
    >
      {churches.map((church) => (
        <Marker
          key={church.id}
          position={{ lat: church.coordinates[0], lng: church.coordinates[1] }}
          onClick={() => onChurchSelect(church)}
          label={{
            text: church.id.toString(),
            color: "white",
            fontWeight: "bold",
          }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#ef4444",
            fillOpacity: 1,
            strokeColor: "white",
            strokeWeight: 2,
          }}
        />
      ))}

      {selectedChurch && (
        <InfoWindow
          position={{ lat: selectedChurch.coordinates[0], lng: selectedChurch.coordinates[1] }}
          onCloseClick={() => onChurchSelect(null)}
        >
          <div className="p-2">
            <h3 className="font-bold">{selectedChurch.name}</h3>
            <p className="text-sm text-gray-600">{selectedChurch.address}</p>
            <p className="text-sm">{selectedChurch.phone}</p>
            <a
              href={`mailto:${selectedChurch.email}`}
              className="text-sm text-blue-600 hover:underline"
            >
              {selectedChurch.email}
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
} 