//Write a JavaScript exercise to get the filename extension.
function getFileExtension(fileName){
    //extract file extension
    const extension = fileName.split('.').pop();
    return extension;
   }
   
   // passing the filename
   const fileExtension = getFileExtension('Challenge.js');
   console.log(fileExtension);