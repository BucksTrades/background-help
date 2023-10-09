import * as React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import geoData from '../assets/NYSimplemap.json';

const SimpleMap: React.FC = () => {
  return (
<div style={{marginLeft: '-2900px'}}>
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{ scale: 1500, center: [0, 0] }} // Adjust center point here
      width={1000}
      height={500}
    >
      <Geographies geography={geoData} fill='transparent' stroke='white' strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Annotation
        subject={[-74.006, 40.7128]}
        dx={-20}
        dy={5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 0.5,
          strokeLinecap: "round"
        }}
      >
        <text x="-2" textAnchor="end" alignmentBaseline="middle" fill="#F53" style={{ fontSize: '5px' }}>
          {"And Here!"}
        </text>
      </Annotation>
      <Annotation
          subject={[-73.6408, 40.6388]}
          dx={10}
          dy={-40}
          connectorProps={{
            stroke: "rgb(51, 201, 64)",
            strokeWidth: 0.5,
            strokeLinecap: "round"
          }}
        >
          <text x="-2" y="-2" textAnchor="start" alignmentBaseline="middle" fill="rgb(51, 201, 64)" style={{ fontSize: '5px' }}>
            {"Find Me Here"}
          </text>
        </Annotation>
    </ComposableMap>
    </div>
  );
};

export default SimpleMap;
