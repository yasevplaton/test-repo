import { changeCargoColor } from "./common";
import {
  changeEdgesColor,
  changeCitiesFillColor,
  changeCitiesStrokeColor
} from "./render";

import "nouislider";
import { changeColorInfoWindowColorBox } from "./info-window";
import { changeColorLegendColorBox } from "./legend";

const Huebee = require("huebee");

// function to get text elements of app
export function getTextElems(
  greetingPanel,
  handleDataPanel,
  mainInterface,
  infoWindow,
  legend
) {
  const greetingRow = mainInterface.querySelector(".greeting-row");
  const greetingRowTitle = greetingRow.querySelector(".title");

  const uploadRow = mainInterface.querySelector(".upload-data");
  const uploadRowTitle = uploadRow.querySelector(".step-title");
  const uploadRowText = uploadRow.querySelector(".upload-data__text");

  const uploadForm = uploadRow.querySelector(".upload-data__form");
  const dataTypeText = uploadForm.querySelector(".upload-data__text");
  const isInclusiveYes = uploadForm.querySelector(".radio-label__inclusive-yes");
  const isInclusiveNo = uploadForm.querySelector(".radio-label__inclusive-no");
  const buttonSubmit = uploadForm.querySelector("#btn-submit");
  const buttonDownload = uploadForm.querySelector("#btn-template-download");

  const cargoColorsRow = mainInterface.querySelector(".cargo-colors");
  const cargoColorsRowTitle = cargoColorsRow.querySelector(".step-title");
  const cargoColorsRowText = cargoColorsRow.querySelector(
    ".cargo-colors__text"
  );

  const linearScaleRow = mainInterface.querySelector(".linear-scale");
  const linearScaleRowTitle = linearScaleRow.querySelector(".step-title");
  const linearScaleRowText = linearScaleRow.querySelector(
    ".linear-scale__text"
  );

  const nodesSettingsRow = mainInterface.querySelector(".nodes-settings");
  const nodesSettingsRowTitle = nodesSettingsRow.querySelector(".step-title");

  const citiesFillLabel = nodesSettingsRow.querySelector(
    ".nodes-settings__text--fill-color"
  );
  const citiesStrokeLabel = nodesSettingsRow.querySelector(
    ".nodes-settings__text--stroke-color"
  );
  const nodesSettingsSliderText = nodesSettingsRow.querySelector(
    ".nodes-settings__text--slider"
  );

  const layersRow = mainInterface.querySelector(".other-settings");
  const layersRowTitle = layersRow.querySelector(".step-title");
  const citiesCheckboxLabel = layersRow.querySelector(
    ".checkbox__label--cities"
  );
  const junctionsCheckboxLabel = layersRow.querySelector(
    ".checkbox__label--junctions"
  );

  const ribbonsCheckboxLabel = layersRow.querySelector(
    ".checkbox__label--ribbons"
  );
  const cargoNodesCheckboxLabel = layersRow.querySelector(
    ".checkbox__label--cargo-nodes"
  );
  const shadowCheckboxLabel = layersRow.querySelector(
    ".checkbox__label--shadow"
  );

  const basemapText = layersRow.querySelector(".other-settings__text--basemap");
  const darkBasemap = layersRow.querySelector(".radio-label__dark");
  const lightBasemap = layersRow.querySelector(".radio-label__light");

  const greetingPanelText = greetingPanel.querySelector(
    ".greeting-panel__text"
  );
  const demoBtn = greetingPanel.querySelector("#btn-demo");
  const uploadBtn = greetingPanel.querySelector("#btn-upload");

  const handleDataPanelText = handleDataPanel.querySelector(
    ".handle-data-panel__text"
  );

  const infoWindowThead = infoWindow.querySelector(
    ".info-window__table-heading"
  );
  const infoWindowTypeColText = infoWindowThead.querySelector(
    ".info-window__col--cargo-color"
  );
  const infoWindowDirOneColText = infoWindowThead.querySelector(
    ".info-window__col--dir-1"
  );
  const infoWindowDirTwoColText = infoWindowThead.querySelector(
    ".info-window__col--dir-2"
  );
  const infoWindowTotalColText = infoWindow.querySelector(
    ".info-window__col--total-title"
  );

  const legendCargoTypesGroup = legend.querySelector(".legend__group--cargo-types");
  const legendCargoTypesTitle = legendCargoTypesGroup.querySelector(".legend__group-title");
  
  const legendCargoVolumeGroup = legend.querySelector(".legend__group--cargo-volume");
  const legendCargoVolumeTitle = legendCargoVolumeGroup.querySelector(".legend__group-title");

  const legendCityVolumeGroup = legend.querySelector(".legend__group--city-volume");
  const legendCityVolumeTitle = legendCityVolumeGroup.querySelector(".legend__group-title");


  const textElems = {
    mainInterface: {
      greetingRow: {
        title: greetingRowTitle
      },
      uploadDataRow: {
        title: uploadRowTitle,
        uploadText: uploadRowText,
        uploadDataForm: {
          dataTypeText: dataTypeText,
          isInclusiveYes: isInclusiveYes,
          isInclusiveNo: isInclusiveNo,
          btnSubmit: buttonSubmit,
          btnDownload: buttonDownload
        }
      },
      cargoColorsRow: {
        title: cargoColorsRowTitle,
        text: cargoColorsRowText
      },
      linearScaleRow: {
        title: linearScaleRowTitle,
        text: linearScaleRowText
      },
      nodesSettingsRow: {
        title: nodesSettingsRowTitle,
        citiesFillLabel: citiesFillLabel,
        citiesStrokeLabel: citiesStrokeLabel,
        nodesSettingsSliderText: nodesSettingsSliderText
      },
      layersRow: {
        title: layersRowTitle,
        citiesCheckboxLabel: citiesCheckboxLabel,
        junctionsCheckboxLabel: junctionsCheckboxLabel,
        ribbonsCheckboxLabel: ribbonsCheckboxLabel,
        cargoNodesCheckboxLabel: cargoNodesCheckboxLabel,
        shadowCheckboxLabel: shadowCheckboxLabel,
        basemapText: basemapText,
        darkBasemap: darkBasemap,
        lightBasemap: lightBasemap
      }
    },

    greetingPanel: {
      greetingPanelText: greetingPanelText,
      demoBtn: demoBtn,
      uploadBtn: uploadBtn
    },

    handleDataPanelText: handleDataPanelText,

    infoWindow: {
      typeText: infoWindowTypeColText,
      dirOneText: infoWindowDirOneColText,
      dirTwoText: infoWindowDirTwoColText,
      totalText: infoWindowTotalColText
    },
    
    legend: {
      cargoTypesTitle: legendCargoTypesTitle,
      cargoVolumeTitle: legendCargoVolumeTitle,
      cityVolumeTitle: legendCityVolumeTitle
    }
  };

  return textElems;
}

// functiont to fetch language data depending on language mode
export function fetchLanguageData(elems, langMode) {
  let languageDataPromise;

  if (langMode === "en") {
    languageDataPromise = fetch("./data/en.json?ass=" + Math.random()).then(
      response => response.json()
    );

    languageDataPromise.then(data => {
      changeInterfaceLanguage(elems, data);
    });
  }

  if (langMode === "ru") {
    languageDataPromise = fetch("./data/ru.json?ass=" + Math.random()).then(
      response => response.json()
    );

    languageDataPromise.then(data => {
      changeInterfaceLanguage(elems, data);
    });
  }
}

// function to change interface language
function changeInterfaceLanguage(elems, data) {
  const greetingRow = elems.mainInterface.greetingRow;
  const dataGreetingRow = data.mainInterface.greetingRow;
  changeInnerHtml(greetingRow.title, dataGreetingRow.title);

  const uploadDataRow = elems.mainInterface.uploadDataRow;
  const dataUploadDataRow = data.mainInterface.uploadDataRow;
  const uploadDataForm = uploadDataRow.uploadDataForm;
  const dataUploadDataForm = dataUploadDataRow.uploadDataForm;

  changeInnerHtml(uploadDataRow.title, dataUploadDataRow.title);
  changeInnerHtml(uploadDataRow.uploadText, dataUploadDataRow.uploadText);
  
  changeInnerHtml(uploadDataForm.dataTypeText, dataUploadDataForm.dataTypeText);
  changeInnerHtml(uploadDataForm.isInclusiveYes, dataUploadDataForm.isInclusiveYes);
  changeInnerHtml(uploadDataForm.isInclusiveNo, dataUploadDataForm.isInclusiveNo);
  changeInnerHtml(uploadDataForm.btnSubmit, dataUploadDataForm.btnSubmit);
  changeInnerHtml(uploadDataForm.btnDownload, dataUploadDataForm.btnDownload);

  const cargoColorsRow = elems.mainInterface.cargoColorsRow;
  const dataCargoColorsRow = data.mainInterface.cargoColorsRow;
  changeInnerHtml(cargoColorsRow.title, dataCargoColorsRow.title);
  changeInnerHtml(cargoColorsRow.text, dataCargoColorsRow.text);

  const linearScaleRow = elems.mainInterface.linearScaleRow;
  const dataLinearScaleRow = data.mainInterface.linearScaleRow;
  changeInnerHtml(linearScaleRow.title, dataLinearScaleRow.title);
  changeInnerHtml(linearScaleRow.text, dataLinearScaleRow.text);

  const nodesSettingsRow = elems.mainInterface.nodesSettingsRow;
  const dataNodesSettingsRow = data.mainInterface.nodesSettingsRow;
  changeInnerHtml(nodesSettingsRow.title, dataNodesSettingsRow.title);
  
  changeInnerHtml(
    nodesSettingsRow.citiesFillLabel,
    dataNodesSettingsRow.citiesFillLabel
  );
  changeInnerHtml(
    nodesSettingsRow.citiesStrokeLabel,
    dataNodesSettingsRow.citiesStrokeLabel
  );
  changeInnerHtml(
    nodesSettingsRow.nodesSettingsSliderText,
    dataNodesSettingsRow.nodesSettingsSliderText
  );

  const layersRow = elems.mainInterface.layersRow;
  const dataLayersRow = data.mainInterface.layersRow;
  changeInnerHtml(layersRow.title, dataLayersRow.title);
  changeInnerHtml(
    layersRow.citiesCheckboxLabel,
    dataLayersRow.citiesCheckboxLabel
  );
  changeInnerHtml(
    layersRow.junctionsCheckboxLabel,
    dataLayersRow.junctionsCheckboxLabel
  );
  changeInnerHtml(
    layersRow.ribbonsCheckboxLabel,
    dataLayersRow.ribbonsCheckboxLabel
  );
  changeInnerHtml(
    layersRow.cargoNodesCheckboxLabel,
    dataLayersRow.cargoNodesCheckboxLabel
  );
  changeInnerHtml(
    layersRow.shadowCheckboxLabel,
    dataLayersRow.shadowCheckboxLabel
  );
  changeInnerHtml(
    layersRow.basemapText,
    dataLayersRow.basemapText
  );
  changeInnerHtml(
    layersRow.darkBasemap,
    dataLayersRow.darkBasemap
  );
  changeInnerHtml(
    layersRow.lightBasemap,
    dataLayersRow.lightBasemap
  );

  const greetingPanel = elems.greetingPanel;
  const dataGreetingPanel = data.greetingPanel;
  changeInnerHtml(
    greetingPanel.greetingPanelText,
    dataGreetingPanel.greetingPanelText
  );
  changeInnerHtml(greetingPanel.demoBtn, dataGreetingPanel.demoBtn);
  changeInnerHtml(greetingPanel.uploadBtn, dataGreetingPanel.uploadBtn);

  const handleDataPanelText = elems.handleDataPanelText;
  const datahandleDataPanelText = data.handleDataPanelText;
  changeInnerHtml(handleDataPanelText, datahandleDataPanelText);

  const infoWindow = elems.infoWindow;
  const dataInfoWindow = data.infoWindow;
  changeInnerHtml(infoWindow.typeText, dataInfoWindow.typeText);
  changeInnerHtml(infoWindow.dirOneText, dataInfoWindow.dirOneText);
  changeInnerHtml(infoWindow.dirTwoText, dataInfoWindow.dirTwoText);
  changeInnerHtml(infoWindow.totalText, dataInfoWindow.totalText);

  const legend = elems.legend;
  const dataLegend = data.legend;
  changeInnerHtml(legend.cargoTypesTitle, dataLegend.cargoTypesTitle);
  changeInnerHtml(legend.cargoVolumeTitle, dataLegend.cargoVolumeTitle);
  changeInnerHtml(legend.cityVolumeTitle, dataLegend.cityVolumeTitle);
}

// function to change inner html of an element
function changeInnerHtml(elem, html) {
  elem.innerHTML = html;
}

export function changeInfoWindowText(infoWindowText, langMode) {
  
  if (langMode === "en") {
    infoWindowText.lineDirOne = "Straight";
    infoWindowText.lineDirTwo = "Back";
    infoWindowText.nodeDirOne = "In";
    infoWindowText.nodeDirTwo = "Out";


  } else if (langMode === "ru") {

    infoWindowText.lineDirOne = "Прямо";
    infoWindowText.lineDirTwo = "Обратно";
    infoWindowText.nodeDirOne = "Вход";
    infoWindowText.nodeDirTwo = "Выход";
  }
}

// function to create color box
export function createColorBox(cargo) {
  let colorBox = document.createElement("span");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = cargo.color;
  colorBox.id = cargo.id;

  return colorBox;
}

// function to bind color picker and change color handler
export function bindColorPicker(colorBox, cargoColorArray, map, infoWindow, legend) {
  var hueb = new Huebee(colorBox, {
    setText: false,
    notation: "hex"
  });

  hueb.on("change", function(color) {
    let cargoID = +this.anchor.id;
    changeCargoColor(cargoColorArray, cargoID, color);
    changeEdgesColor(map, cargoColorArray);
    changeColorInfoWindowColorBox(color, cargoID, infoWindow);
    changeColorLegendColorBox(color, cargoID, legend);
  });
}

// function to create color table
export function createColorTable(tableBody, cargoColorArray, map, infoWindow, legend) {
  cargoColorArray.forEach(cargo => {
    let row = document.createElement("tr");
    row.classList.add("cargo-colors__row");
    let colId = document.createElement("td");
    colId.innerHTML = cargo.id;
    let colType = document.createElement("td");
    colType.innerHTML = cargo.type;

    let colColor = document.createElement("td");
    let colorBox = createColorBox(cargo);
    colColor.appendChild(colorBox);

    bindColorPicker(colorBox, cargoColorArray, map, infoWindow, legend);

    let cols = [colId, colType, colColor];

    cols.forEach(col => {
      col.classList.add("cargo-colors__col");
      row.appendChild(col);
    });

    tableBody.appendChild(row);
  });
}

// function to set up width slider
export function createSlider(el, minWidthDefault, maxWidthDefault, maxWidth) {
  noUiSlider.create(el, {
    start: [minWidthDefault, maxWidthDefault],
    connect: true,
    range: {
      min: [0, 1],
      max: [maxWidth]
    }
  });
}

// function to toggle layer visibility
export function toggleLayerVisibility(layerCheckbox, map, layerId) {
  if (layerCheckbox.checked) {
    map.setLayoutProperty(layerId, "visibility", "visible");
  } else {
    map.setLayoutProperty(layerId, "visibility", "none");
  }
}

export function toggleLayerOpacity(layerCheckbox, map, layerId) {
  if (layerCheckbox.checked) {
    map.setLayoutProperty(layerId, "line-opacity", 1);
  } else {
    map.setLayoutProperty(layerId, "line-opacity", 0);
  }
}

export function bindColorPickerToCitiesColorBoxes(
  fillColorBox,
  strokeColorBox,
  map
) {
  const fillHueb = new Huebee(fillColorBox, {
    setText: false,
    notation: "hex"
  });

  const strokeHueb = new Huebee(strokeColorBox, {
    setText: false,
    notation: "hex"
  });

  fillHueb.element.classList.add("huebee__cities-color");
  strokeHueb.element.classList.add("huebee__cities-color");

  fillHueb.container.style.left = "-241px";
  strokeHueb.container.style.left = "-241px";

  fillHueb.on("change", function(color) {
    changeCitiesFillColor(map, color);
  });

  strokeHueb.on("change", function(color) {
    changeCitiesStrokeColor(map, color);
  });
}
