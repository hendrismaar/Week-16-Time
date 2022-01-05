const Date = require('../models/date')
const datetime = require('../getDate.js');

exports.getDate = (req, res)=> { 
    let today = datetime.getDate();
    res.send(today);

}

exports.getMainPage = (req, res)=>{
    Date.fetchDates(dates => {
        console.log(dates)
        let today = datetime.getDate();
        res.render('index', {dateToRender: today, datetimes: dates});
    });
    
    exports.postDate = (req, res) => {
        const newDate = new Date(req.body.dateToRender);
        newDate.saveDate();
    }
}
