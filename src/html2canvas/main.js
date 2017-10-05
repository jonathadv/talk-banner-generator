function generateImage(download){
 html2canvas(
   document.getElementById('content'), {
    onrendered: function(canvas) {
      var url = canvas.toDataURL()
      if(download){
        url = url.replace(/^data:image\/[^;]/, 'data:application/octet-stream')
      }
      console.log('url: ', url)
      window.open(url)
    },
      background:'#ffffff',
      width: 1920,
      height: 1080
  });
}


var fileReader = new FileReader();
var fileFilter = /^(image\/bmp|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/tiff)$/i;

function loadImageFile(imgElementId) {
  fileReader.onload = function (fileReaderEvent) {
    document.getElementById(imgElementId).src = fileReaderEvent.target.result;
  };

  var filesList = document.getElementById("uploadImage").files
  if (filesList.length === 0) {
    return;
  }
  var imageFile = filesList[0];
  if (!fileFilter.test(imageFile.type)) {
    alert("You must select a valid image file!");
    return;
  }

  fileReader.readAsDataURL(imageFile);
}
