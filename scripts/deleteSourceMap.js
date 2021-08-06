var path = require("path"),
  fs = require("fs")

function fromDir(startPath, filter, callback) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath)
    return
  }

  var files = fs.readdirSync(startPath)
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i])
    var stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback) //recurse
    } else if (filename.indexOf(filter) >= 0) callback(filename)
  }
}

fromDir("../build/static/js", ".map", function (filename) {
  console.log("-- deleting: ", filename)
  try {
    fs.unlinkSync(filename)
    console.log("Successfully deleted the file.")
  } catch (err) {
    throw err
  }
})
