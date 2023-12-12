import ytdl from 'ytdl-core'

export async function downloadYouTubeVideo(req, res) {
  const videoURL = req.query.url

  // Comprueba si la URL es válida
  if (!videoURL || !ytdl.validateURL(videoURL)) {
    return res.status(400).send('URL inválida')
  }

  try {
    const videoInfo = await ytdl.getInfo(videoURL)
    const videoTitle = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_') // Reemplaza caracteres no alfanuméricos

    // Encuentra el formato de 360p
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' })
    if (!format) {
      return res.status(404).send('Formato de 360p no encontrado')
    }

    res.header('Content-Disposition', `attachment; filename="${videoTitle}.mp4"`)
    ytdl.downloadFromInfo(videoInfo, { format: format }).pipe(res)
  } catch (error) {
    console.error('Error al descargar el video: ', error)
    return res.status(500).send('Error al procesar la solicitud')
  }
}
