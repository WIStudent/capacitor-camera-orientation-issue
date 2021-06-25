# Capacitor Camera Orientation Issue Reproduction Repo

Project to reproduce Issue ["Camera - android - Image has wrong orientation"](https://github.com/ionic-team/capacitor-plugins/issues/503)

```
npm install
npm build
npx cap run android
```

## Possible workarounds
- Set `correctOrientation: false` or
- use css attribute `image-orientation: none` on `<img>` element

## Screenshots
### Taking portrait picture
![](./screenshots/1.png)
![](./screenshots/2.png)

### Taking landscape picture
![](./screenshots/3.png)
![](./screenshots/4.png)
