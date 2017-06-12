'use strict';


const electron = require('electron');

let applicationWindow;

electron.app.on('ready', () => {
		applicationWindow = new electron.BrowserWindow({
				width: 400,
				height: 600,
			});

		applicationWindow.loadURL('file:///' + __dirname + '/index.html');
		applicationWindow.setFullScreen(true);
	});
