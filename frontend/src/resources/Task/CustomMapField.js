import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Box } from '@material-ui/core';
import { useRecordContext } from 'react-admin';

const CustomMapField = ({ height, addLabel, ...rest }) => {
  const record = useRecordContext();
  const position = [record["prats:lat"], record["prats:lng"]];
  if (!position[0] || !position[1]) return null;

  return (
    <Box>
      <MapContainer style={{ height }} center={position} {...rest}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    </Box>
  );
};

CustomMapField.defaultProps = {
  height: 400,
  zoom: 11,
  addLabel: true
};

export default CustomMapField;
