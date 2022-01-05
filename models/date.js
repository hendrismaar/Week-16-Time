const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'dates.json');



module.exports = class Date {
    constructor(content) {
        this.content = content;
    }

    saveDate() {
        fs.readFile(filePath, (error, fileContent) => {
            let dates = [];

            if(!error) {
                dates = JSON.parse(fileContent)
            }
            else {
                console.log(error);
            }

            dates.push(this);

            fs.writeFile(filePath, JSON.stringify(dates), (error) =>{
                if(!error){
                    console.log('date has been saved');
                }
            });

        });
    }


    static fetchDates(callBack){
        fs.readFile(filePath, (error, fileContent) => {
            if(error) {
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

}