const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');


const { viewportHeight, viewportWidth, options, versionGhost1,versionGhost2,fileSpecVersionGhost1,fileSpecVersionGhost2, scenarios } = config;

const directory1 = `./screenshots/${fileSpecVersionGhost1}/screen_${versionGhost1}/`;
const directory2 = `./screenshots/${fileSpecVersionGhost2}/screen_${versionGhost2}/`;

async function executeTest(directory1,directory2){
    if(scenarios.length === 0){
        return;
    }
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    await Promise.all(scenarios.map(async ({name , takes})  => {
        let realTakes = 1;
        while(realTakes<takes+1){

            const data = await compareImages(
                fs.readFileSync(directory1.concat(`${name}_take_${realTakes}.png`)),
                fs.readFileSync(directory2.concat(`${name}_take_${realTakes}.png`)),
                options
            );
            resultInfo[name.concat(realTakes)] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }

            fs.writeFileSync(`./screenshots/compared/compare_${name}_take_${realTakes}.png`, data.getBuffer());
            realTakes++;
        }
    }));

    fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo,directory1,directory2));
    fs.copyFileSync('./index.css', `./results/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")

    return resultInfo;  
}
(async ()=>console.log(await executeTest(directory1,directory2)))();





function browser(name, takes, info,directory1,directory2){
    let realTakes = 1;
    let innerHTML = "";
    while(realTakes<takes+1){
        innerHTML+=
            `<div class="Scenario" id="take${realTakes}">
            <div class=" btitle">
                <h2>Scenario & step: ${name} & ${realTakes}</h2>
                <p>Data: ${JSON.stringify(info)}</p>
            </div>
            <div class="imgline">
              <div class="imgcontainer">
                <span class="imgname">Ghost Version 4.4.0</span>
                <img class="img2" src=".${directory2}${name}_take_${realTakes}.png" id="version4-4-0${name}${realTakes}" label="version4-4-0">
              </div>
              <div class="imgcontainer">
                <span class="imgname">Ghost Version 3.42.5</span>
                <img class="img2" src=".${directory1}${name}_take_${realTakes}.png" id="version3-42-5${name}${realTakes}" label="version3-42-5">
              </div>
            </div>
            <div class="imgline">
              <div class="imgcontainer">
                <span class="imgname">Diff</span>
                <img class="imgfull" src="../screenshots/compared/compare_${name}_take_${realTakes}.png" id="diffImage${name}${realTakes}" label="Diff">
              </div>
            </div>
          </div>`;
        realTakes++;     
    }
    return innerHTML;
}

function createReport(datetime,resultInfo,directory1,directory2){
    console.log(directory1);
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.scenarios.map( ({name , takes})=>browser(name , takes, resultInfo[name.concat(takes)],directory1,directory2))}
            </div>
        </body>
    </html>`
}