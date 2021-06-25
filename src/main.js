import {Camera, CameraSource, CameraResultType} from '@capacitor/camera';

const img = document.querySelector('#img');

const button = document.querySelector('#button');
button.addEventListener('click', async () => {
  const {webPath} = await Camera.getPhoto({
    source: CameraSource.Camera,
    resultType: CameraResultType.Uri,
    correctOrientation: true
  });
  img.src = webPath;
});
