import React from "react"
import { FireCMSCloudApp } from "@firecms/cloud";
import appConfig from "./index";

function App() {
    return <FireCMSCloudApp
        projectId={"finesse-id"}
        appConfig={appConfig}
    />;
}

export default App
