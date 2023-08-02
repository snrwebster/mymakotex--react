import { parseXml } from "./config/Settings";



const apiRequest = async (endpoint, data, method) => {
  
  try {
    const { portalCode, mobileService } = await parseXml();
    if (portalCode != null && mobileService != null) {
      try {
        let URL = `${mobileService}/${endpoint}`;

        if (method === "POST") {
          try {
            data.portalCode = portalCode;

            let options = {
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
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
              // Handle fetch-related errors (e.g., network issues, server not reachable)
              console.error('Failed to fetch data. Please check your internet connection or try again later.');
            } else {
              // Handle other errors
              console.error('An error occurred:', error.message);
            }
          }
        } else if (method === "GET" && endpoint === "SelectFromMobile") {
         
          try {
            let options = {
              method,
            };
            URL += `?columns=${data.columns}&table=${data.table}`;
            console.log(URL);
            const response = await fetch(URL, options);
            const responseData = await response.json();
        
            return responseData;
          } catch (Ex) {}
        }else if (method === "GET" && endpoint === "UserCustomers"){
          try{
            let options = {
              method,
            };
            URL +=`?ID=${data.id}&isAdmin=${data.isAdmin}`;
            const response = await fetch(URL, options);
            const responseData = await response.json();
            return responseData;
          }catch(Ex){

          }
        }
        
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
