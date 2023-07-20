import { parseXml } from "./config/Settings";

const apiRequest = async (endpoint, data, method) => {
  try {
    const { portalCode, mobileService } = await parseXml();
    if (portalCode != null && mobileService != null) {
      try {
        let URL = `${mobileService}/${endpoint}`;
       
        // Append query string to URL for POST request
        if (method === "POST") {
          data.portalCode = portalCode;
        }
        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(URL, options);
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        throw new Error(error);
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data from XML.");
  }
};

export { apiRequest };