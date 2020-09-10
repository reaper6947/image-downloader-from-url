const imageDownloader = require('image-downloader')

const options = {
    url: 'https://avatars3.githubusercontent.com/u/61895712?s=400&v=4.png',
    //dest: './output/' //for actual name
    dest: './output/photo.png' //for custom name
}
imageDownloader.image(options)
  .then(({ filename }) => {
    console.log(filename, 'saved') // file saved
  })
  .catch((err) => console.error(err))