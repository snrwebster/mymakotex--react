import SettingsXML from "./Settings.xml";
import XMLParser from "react-xml-parser";

const parseXml = async () => {
  try {
    const res = await fetch(SettingsXML);
    const data = await res.text();
    const xml = new XMLParser().parseFromString(data);
    
    const connectionNode = xml.children.find((child) => child.name === "Connection");
    if (connectionNode && connectionNode.children.length > 1) {
      const portalCodeNode = connectionNode.children.find((child) => child.name === "PortalCode");
      const mobileServiceNode = connectionNode.children.find((child) => child.name === "MobileService");
      if (portalCodeNode && mobileServiceNode) {
        return {
          portalCode: portalCodeNode.value,
          mobileService: mobileServiceNode.value
        };
      }
    }
    
    return {
      portalCode: null,
      mobileService: null
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { parseXml };


