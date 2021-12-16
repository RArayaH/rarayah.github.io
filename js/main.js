var ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')

if (ua.device !== null) {
    if (ua.device.type === 'Mobile'){
        button.textContent = "Descargue la app";
        button.href="assets/dpl/app-release.apk";
    } 
}    
