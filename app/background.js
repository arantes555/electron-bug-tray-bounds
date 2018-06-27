const path = require('path')
const {app, Menu, Tray} = require('electron')

app.on('ready', () => {
  const tray = new Tray(path.resolve(app.getAppPath(), 'bug.png'))
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Exit', click: () => process.exit(0)}
  ])
  tray.on('click', (event, eventBounds) => {
    const programmaticBounds = tray.getBounds()
    console.log('click eventBounds:', eventBounds)
    console.log('click programmaticBounds:', programmaticBounds)
  })
  tray.on('right-click', (event, eventBounds) => {
    const programmaticBounds = tray.getBounds()
    console.log('right-click eventBounds:', eventBounds)
    console.log('right-click programmaticBounds:', programmaticBounds)
    tray.popUpContextMenu(contextMenu, eventBounds)
  })
})
