var ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.download')

if (ua.device !== null) {
    if (ua.device.type === 'Mobile'){
        button.textContent = "Descargue la app";
        button.href="assets/dpl/app-release.apk";  
    }else if(ua.device.type === 'Desktop'){
        button.textContent = "Obtener QR para descargar app";        
        button.href="assets/img/qr.png"; 
    } 
}    
