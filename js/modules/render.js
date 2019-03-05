// function to render background lines
export function renderBackgroundLines(map, origLines, origLineWidth) {

  if (map.getSource('background-lines')) {
      map.getSource('background-lines').setData(origLines);

  } else {

      map.addSource("background-lines", { type: "geojson", data: origLines });

      // add background lines layer
      map.addLayer({
          "id": "background-lines",
          "source": "background-lines",
          "filter": ["!=", "widestSideWidth", origLineWidth / 2],
          "type": "line",
          "paint": {
              'line-color': "#000",
              "line-opacity": 0.5,
              'line-width': [
                'interpolate', ['linear'], ['zoom'],
                1, ['/', ['get', 'tapeTotalWidth'], 512],
                2, ['/', ['get', 'tapeTotalWidth'], 256],
                3, ['/', ['get', 'tapeTotalWidth'], 128],
                4, ['/', ['get', 'tapeTotalWidth'], 64],
                5, ['/', ['get', 'tapeTotalWidth'], 32],
                6, ['/', ['get', 'tapeTotalWidth'], 16],
                7, ['/', ['get', 'tapeTotalWidth'], 8],
                8, ['/', ['get', 'tapeTotalWidth'], 4],
                9, ['/', ['get', 'tapeTotalWidth'], 2],
                10, ['get', 'tapeTotalWidth'],
                11, ['*', ['get', 'tapeTotalWidth'], 2],
                12, ['*', ['get', 'tapeTotalWidth'], 4],
                13, ['*', ['get', 'tapeTotalWidth'], 8],
                14, ['*', ['get', 'tapeTotalWidth'], 16],
                15, ['*', ['get', 'tapeTotalWidth'], 32],
                16, ['*', ['get', 'tapeTotalWidth'], 64],
                17, ['*', ['get', 'tapeTotalWidth'], 128],
                18, ['*', ['get', 'tapeTotalWidth'], 256],
                19, ['*', ['get', 'tapeTotalWidth'], 512],
                20, ['*', ['get', 'tapeTotalWidth'], 1024],
                21, ['*', ['get', 'tapeTotalWidth'], 2048],
                22, ['*', ['get', 'tapeTotalWidth'], 4096]
              ],
              'line-offset': [
                'interpolate', ['linear'], ['zoom'],
                1, ['/', ['get', 'shadowOffset'], 512],
                2, ['/', ['get', 'shadowOffset'], 256],
                3, ['/', ['get', 'shadowOffset'], 128],
                4, ['/', ['get', 'shadowOffset'], 64],
                5, ['/', ['get', 'shadowOffset'], 32],
                6, ['/', ['get', 'shadowOffset'], 16],
                7, ['/', ['get', 'shadowOffset'], 8],
                8, ['/', ['get', 'shadowOffset'], 4],
                9, ['/', ['get', 'shadowOffset'], 2],
                10, ['get', 'shadowOffset'],
                11, ['*', ['get', 'shadowOffset'], 2],
                12, ['*', ['get', 'shadowOffset'], 4],
                13, ['*', ['get', 'shadowOffset'], 8],
                14, ['*', ['get', 'shadowOffset'], 16],
                15, ['*', ['get', 'shadowOffset'], 32],
                16, ['*', ['get', 'shadowOffset'], 64],
                17, ['*', ['get', 'shadowOffset'], 128],
                18, ['*', ['get', 'shadowOffset'], 256],
                19, ['*', ['get', 'shadowOffset'], 512],
                20, ['*', ['get', 'shadowOffset'], 1024],
                21, ['*', ['get', 'shadowOffset'], 2048],
                22, ['*', ['get', 'shadowOffset'], 4096]
              ],
              "line-blur": 10
          }
        //   "layout": {
        //       "line-cap": "round"
        //   }
      });
  }
}

// function to render edges
export function renderEdges(map, edges, cargoColorArray, multipleCargoNodesObject) {

    const reverseCargoArray = cargoColorArray.slice().reverse();

    if (map.getSource('edges')) {
        map.getSource('edges').setData(edges);

        reverseCargoArray.forEach(cargoObj => {
            map.getSource(`${cargoObj.type}-nodes`).setData(multipleCargoNodesObject[cargoObj.type]);
        });


    } else {

        map.addSource("edges", { type: "geojson", data: edges });

        // add array of layers to map (one for each type of cargo)
        reverseCargoArray.forEach(cargoObj => {

            map.addLayer({
                "id": cargoObj.type,
                "source": "edges",
                "type": "line",
                "filter": [
                    "all",
                    ["==", "type", cargoObj.type],
                    ["!=", "value", 0]
                ],
                "paint": {
                    'line-color': cargoObj.color,
                    "line-opacity": 1,
                    // "line-offset": ['get', 'offset'],
                    'line-offset': [
                        'interpolate', ['linear'], ['zoom'],
                        1, ['/', ['get', 'offset'], 512],
                        2, ['/', ['get', 'offset'], 256],
                        3, ['/', ['get', 'offset'], 128],
                        4, ['/', ['get', 'offset'], 64],
                        5, ['/', ['get', 'offset'], 32],
                        6, ['/', ['get', 'offset'], 16],
                        7, ['/', ['get', 'offset'], 8],
                        8, ['/', ['get', 'offset'], 4],
                        9, ['/', ['get', 'offset'], 2],
                        10, ['get', 'offset'],
                        11, ['*', ['get', 'offset'], 2],
                        12, ['*', ['get', 'offset'], 4],
                        13, ['*', ['get', 'offset'], 8],
                        14, ['*', ['get', 'offset'], 16],
                        15, ['*', ['get', 'offset'], 32],
                        16, ['*', ['get', 'offset'], 64],
                        17, ['*', ['get', 'offset'], 128],
                        18, ['*', ['get', 'offset'], 256],
                        19, ['*', ['get', 'offset'], 512],
                        20, ['*', ['get', 'offset'], 1024],
                        21, ['*', ['get', 'offset'], 2048],
                        22, ['*', ['get', 'offset'], 4096],

                        // 22, ['*', ['get', 'offset'], 1],
                    ],
                    // "line-width": ['get', 'width']
                    "line-width": [
                        'interpolate', ['linear'], ['zoom'],
                        1, ['/', ['get', 'width'], 512],
                        2, ['/', ['get', 'width'], 256],
                        3, ['/', ['get', 'width'], 128],
                        4, ['/', ['get', 'width'], 64],
                        5, ['/', ['get', 'width'], 32],
                        6, ['/', ['get', 'width'], 16],
                        7, ['/', ['get', 'width'], 8],
                        8, ['/', ['get', 'width'], 4],
                        9, ['/', ['get', 'width'], 2],
                        10, ['get', 'width'],
                        11, ['*', ['get', 'width'], 2],
                        12, ['*', ['get', 'width'], 4],
                        13, ['*', ['get', 'width'], 8],
                        14, ['*', ['get', 'width'], 16],
                        15, ['*', ['get', 'width'], 32],
                        16, ['*', ['get', 'width'], 64],
                        17, ['*', ['get', 'width'], 128],
                        18, ['*', ['get', 'width'], 256],
                        19, ['*', ['get', 'width'], 512],
                        20, ['*', ['get', 'width'], 1024],
                        21, ['*', ['get', 'width'], 2048],
                        22, ['*', ['get', 'width'], 4096],
                        // 22, ['*', ['get', 'width'], 1],
                    ]
                }
            });


            // render junctions nodes layer
            // const cargoRadiusName = `${cargoObj.type}-radius`;
            // const cargoTranslateName = `${cargoObj.type}-translate`;

            map.addSource(`${cargoObj.type}-nodes`, { type: "geojson", data: multipleCargoNodesObject[cargoObj.type] });

            map.addLayer({
                "id": cargoObj.type + "-nodes",
                "source": `${cargoObj.type}-nodes`,
                "type": "circle",
                // "filter": [
                //     "all",
                //     ["!=", "deadEnd", true],
                //     ["!=", "radius", 0]
                // ],
                "filter": ["!=", "radius", 0],
                "paint": {
                    "circle-color": cargoObj.color,
                    "circle-radius": [
                        'interpolate', ['linear'], ['zoom'],
                        1, ['/', ['get', 'radius'], 512],
                        2, ['/', ['get', 'radius'], 256],
                        3, ['/', ['get', 'radius'], 128],
                        4, ['/', ['get', 'radius'], 64],
                        5, ['/', ['get', 'radius'], 32],
                        6, ['/', ['get', 'radius'], 16],
                        7, ['/', ['get', 'radius'], 8],
                        8, ['/', ['get', 'radius'], 4],
                        9, ['/', ['get', 'radius'], 2],
                        10, ['get', 'radius'],
                        11, ['*', ['get', 'radius'], 2],
                        12, ['*', ['get', 'radius'], 4],
                        13, ['*', ['get', 'radius'], 8],
                        14, ['*', ['get', 'radius'], 16],
                        15, ['*', ['get', 'radius'], 32],
                        16, ['*', ['get', 'radius'], 64],
                        17, ['*', ['get', 'radius'], 128],
                        18, ['*', ['get', 'radius'], 256],
                        19, ['*', ['get', 'radius'], 512],
                        20, ['*', ['get', 'radius'], 1024],
                        21, ['*', ['get', 'radius'], 2048],
                        22, ['*', ['get', 'radius'], 4096],
                    ]
                }
            });

        });
    }
}

// function to change colors of edges
export function changeEdgesColor(map, cargoColorArray) {
    let reverseCargoArray = cargoColorArray.slice().reverse();

    reverseCargoArray.forEach(cargoObj => {
        map.setPaintProperty(cargoObj.type, 'line-color', cargoObj.color);
        let layerNodeID = cargoObj.type + "-nodes";
        map.setPaintProperty(layerNodeID, 'circle-color', cargoObj.color);
    })

}

// function to render nodes
export function renderNodes(map, nodes, loadingClassArray) {

    if (map.getSource('nodes')) {
        map.getSource('nodes').setData(nodes);

    } else {

        map.addSource("nodes", { type: "geojson", data: nodes });

        // add junctions layer
        map.addLayer({
            "id": "junctions",
            "source": "nodes",
            "type": "circle",
            "filter": [
                "all",
                ["==", "name_rus", "junction"],
                [">", "cityRadius", 0]
            ],
            'layout': {
                'visibility': 'none'
            },
            "paint": {
                "circle-color": "#c4c4c4",
                "circle-radius": [
                    'interpolate', ['linear'], ['zoom'],
                    1, ['/', 3, 2],
                    10, 3
                ],
                // "circle-radius": 2,
                "circle-stroke-color": "#000000",
                "circle-stroke-width": 1
            }
        });

        // add cities layer
        map.addLayer({
            "id": "cities",
            "source": "nodes",
            "type": "circle",
            "filter": [
                "all",
                ["!=", "name_rus", "junction"],
                [">", "cityRadius", 0]
            ],
            "paint": {
                "circle-color": "#fff",
                "circle-radius": [
                    'interpolate', 
                    ['linear'], 
                    ['zoom'],
                    2, ['/', ['get', 'cityRadius'], 4],
                    10, ['get', 'cityRadius']
                ],
                // "circle-radius": ['get', 'cityRadius'],
                "circle-stroke-color": "#000",
                "circle-stroke-width": 1
            }
        });

        loadingClassArray.forEach(loadingClass => {

        // add cities labels
        map.addLayer({
            "id": `nodes-label-class-${loadingClass}`,
            "source": "nodes",
            "type": "symbol",
            "filter": [
                "all",
                ["!=", "name_rus", "junction"],
                [">", "cityRadius", 0],
                ["==", "loadingClass", loadingClass]
            ],
            "layout": {
                "text-font": ["Arial Unicode MS Regular"],
                "text-field": "{name_rus}",
                "text-size": [
                    'match',
                    ['get', 'loadingClass'],
                    1, 12,
                    2, 15,
                    3, 18,
                    4, 21,
                    5, 24,
                    0
                ],
                // "text-anchor": 'bottom-left',
                // "text-justify": 'left',
                "text-offset": [0, -1]
            },
            "paint": {
                "text-color": "#fff",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                // "text-halo-blur": 2
            }
        });
        });
    }
}

// function to render original lines
export function renderOrigLines(map, origLines, origLineWidth) {

    if (map.getSource('lines')) {
        map.getSource('lines').setData(origLines);

    } else {

        map.addSource("lines", { type: "geojson", data: origLines });

        // add orig lines layer
        map.addLayer({
            "id": "lines",
            "source": "lines",
            // "filter": ["!=", "tapeTotalWidth", 0],
            "type": "line",
            "paint": {
                'line-color': "#333",
                "line-opacity": 1,
                "line-width": origLineWidth
            },
            "layout": {
                "line-cap": "round"
            }
        });
    }
}

// functions to change fill color and stoke color of nodes
export function changeCitiesFillColor(map, color) {
    map.setPaintProperty('cities', 'circle-color', color);
}

export function changeCitiesStrokeColor(map, color) {
    map.setPaintProperty('cities', 'circle-stroke-color', color);
}