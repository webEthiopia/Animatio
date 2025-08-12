let device = getDeviceType();
let buttonContainer = document.getElementById('buttons');
function getDeviceType() {
    const userAgent = navigator.userAgent;


    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return "Tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-L|Opera Mini/i.test(userAgent)) {
        return "Mobile";
    }
        return "Desktop";
}
if(device == 'Desktop'){
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(2,1fr)';
    buttonContainer.style.columnGap = '20px';
}
if(device == "Mobile" || device == 'tablet'){
    let container = document.getElementById('container');

    container.style.width = '100vw';

    container.style.height = '100vh';

    buttonContainer.innerHTML = '';

    let button = document.createElement('button');

    button.setAttribute('class','btn download');
    let img = document.createElement('img');
    img.setAttribute('src' , 'images/android_icon.svg');
    button.append(img);
    let button2 = document.createElement('button');
    button2.setAttribute('class','btn download apple');
    let img2 = document.createElement('i');
    img2.setAttribute('class' , 'fa-brands fa-apple');
    img2.style.fontSize = '20px';
    button2.append(img2);
    let download = document.getElementById('desktop');
    download.innerHTML = '';
    download.append(button);
    download.style.display = 'flex';
    download.style.padding = '10px 80px';
    download.style.alignItems = 'center';
    download.style.justifyContent ='space-between';
    download.append(button2);
    
}