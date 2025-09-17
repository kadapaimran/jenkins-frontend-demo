//import React from "react";



function FrontendJenkinsSteps() {
    return (
        <div>
            <h1>CICD JENKINS DEMO</h1>
            <p>Jenkins source code uses Git repo and branch /main. In <strong>Build Triggers </strong> , select <i>Poll SCM </i>and use schedule:* * * * * </p>

            <p>In <strong>Build Steps</strong>  , add <strong>Windows batch command:</strong> </p>
            
            <p>call npm install</p>
            <p>call npm run build</p>
            
            <p> rmdir "C:\tomcat9\webapps\jenkins-frontend-demo" /s /q </p>
            <p> mkdir "C:\tomcat9\webapps\jenkins-frontend-demo" </p>
            <p> xcopy "dist\*" "C:\tomcat9\webapps\jenkins-frontend-demo" /s /e /y  </p>

            <p> Another <strong>Build Step</strong> with <strong> Windows batch command </strong>to restart Tomcat: </p>
            <p> stop tomcat9 </p>
            <p> start tomcat9 </p>

            <p>Save the job and click on <strong>Build Now</strong> to trigger the build. </p>

        </div>
    );
}

export default FrontendJenkinsSteps;