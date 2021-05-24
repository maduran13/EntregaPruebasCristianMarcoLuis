var table = [];
var tableHeaders = [];
const fs = require('fs');

const directory1 = `./MOCK_DATA.json`;

async function makeFiles(directory1){
    let jsonProperties='';
    fs.readFile(directory1, 'utf8', function (err, data) {
        let allTextLines = data.split(/\r\n|\n/);
        for(line in allTextLines){
            let curline = allTextLines[line];
            jsonProperties += '{ "@user1" :';
            curline.replace('},','}');
            
                if(line==allTextLines.length-1){
                    var ret = curline.replace(']',' ').replace('},','}');
                    jsonProperties += ret;
                }
                else{
                    var ret = curline.replace('[',' ').replace('},','}');
                    jsonProperties += ret;
                }
            jsonProperties += '}\n';
            fs.writeFile(`kraken_mobile_properties_${line}.json`, jsonProperties, function(err, result) {
                if(err) console.log('error', err);
              });
        }


        
       });

    return jsonProperties;
}
(async ()=>console.log(await makeFiles(directory1)))();