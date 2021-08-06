'use strict';

var path = require('path'), fs=require('fs');

function fromDir(startPath,filter,callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filename.indexOf(filter)>=0) callback(filename);
    };
};

// fromDir('./src','.scss',function(filename){
    fromDir('./src','.'+process.argv[2],function(filename){
    console.log('-- found: ',filename, filename.split('.')[0]+'.'+process.argv[3]);
    fs.renameSync(filename,filename.split('.')[0]+'.'+process.argv[3]); 
});


