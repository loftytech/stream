

interface requestObjInterface {
    path?: string
    method: string
    data?: any
    fileName?: string
    contentType?: string
    responseType?: string
    version?: string
    custormBaseURL?: string
  }

const DownloadUtility = async (requestObj: requestObjInterface) => {
    const {path, method, data, contentType = "application/json", fileName} = requestObj
  try {
    let baseURL = import.meta.env.VITE_SERVER_API_URL
    // baseURL = "https://api.fxengineering.xyz/admin-service/"

    const token = localStorage.getItem("authToken");
    
    const options = {
        method: method,
        body: JSON.stringify(data),
        headers: {
		      "Authorization": 'Bearer ' + token,
          "Content-Type": contentType
        }
    };
    const res = await fetch(`${baseURL}${path}`, options)

    if (res.status >= 200 && res.status <= 299) {
      const blob = await res.blob();
  
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', fileName ?? "file");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    } else {
      throw await res.json()
    }
  } catch (err: any) {
    throw err
  }
};

export default DownloadUtility;
