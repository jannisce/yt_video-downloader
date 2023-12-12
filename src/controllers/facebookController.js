// import fbDownloader from 'fb-video-downloader';

// export async function downloadFacebookVideo(req, res) {
//   const videoURL = req.query.url;

//   if (!videoURL) {
//     return res.status(400).send('Se requiere una URL de video de Facebook');
//   }

//   try {
//     const videoData = await fbDownloader.getVideo(videoURL);

//     if (!videoData || !videoData.downloadUrl) {
//       return res.status(404).send('No se pudo encontrar el video de Facebook');
//     }

//     // Verifica si la información de la resolución está disponible
//     // Este código es hipotético y dependerá de cómo fb-video-downloader devuelva la información
//     let downloadUrl360p = videoData.downloadUrl; // URL por defecto si no se encuentra una de 360p

//     if (videoData.formats) {
//       const format360p = videoData.formats.find(format => format.resolution === '360p');
//       if (format360p && format360p.url) {
//         downloadUrl360p = format360p.url;
//       }
//     }

//     res.redirect(downloadUrl360p);
//   } catch (error) {
//     console.error('Error al descargar el video de Facebook: ', error);
//     return res.status(500).send('Error al procesar la solicitud');
//   }
// }

import fbDownloader from 'fb-video-downloader'

// export async function downloadFacebookVideo(req, res) {
//   // const videoURL = req.query.url
//   const videoURL = 'https://www.facebook.com/ingsebastiansiero/videos/371139878643729/'

//   if (!videoURL) {
//     return res.status(400).send('Se requiere una URL de video de Facebook')
//   }
//   try {
//     fbDownloader.getInfo(videoURL)
//       .then(info => console.log(JSON.stringify(info, null, 2)))
//       // .catch(error => console.error('Error al obtener información del video:', error))
//   } catch (error) {
//     console.error('Error al descargar el video de Facebook: ', error)
//     return res.status(500).send('Error al procesar la solicitud')
//   }

// }

fbDownloader.getInfo('https://www.facebook.com/watch/?v=371139878643729')
.then(info => console.log(JSON.stringify(info, null, 2)))