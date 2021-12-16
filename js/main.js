var ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')

if (ua.device !== null) {
    if (ua.device.family === 'android' || ua.device.family === 'iPhone'){
        button.textContent = "Descargue la app"
        button.href="assets/dpl/app-release.apk";  
    }
}


    
