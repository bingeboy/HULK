var formidable = require ('formidable');

exports.imageForm = function(req, res) {
    res.render('upload', {
        title: 'Upload Images'
    });
};

exports.uploadImage = function(req, res){
    var form = new formidable.IncomingForm({ uploadDir: __dirname + '' })
        , files = []
        , fields = [];
    form.keepExtensions = true;

    form.on('field', function(field, value) {
        fields.push([field, value]);
    })
    .on ('fileBegin', function(name, file){
        //rename the incoming file to the file's name
        file.path = form.uploadDir + "/" + file.name;
    })
    .on('file', function(field, file) {
            console.log('file: ', file.name);
            files.push([field, file]);
    })
    .on('progress', function(bytesReceived, bytesExpected) {
        var percent = (bytesReceived / bytesExpected * 100) | 0;
        process.stdout.write('Uploading: %' + percent + '\r');
    })
    .on('end', function() {
            console.log('done');
            res.redirect('upload');
    });

    form.parse(req, function() {
        res.render('upload');
    });
};