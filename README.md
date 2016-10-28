# cordova-plugin-firebase-analytics
This plugin brings Google Firebase Analytics to your Cordova project.

This is a fork of https://github.com/arnesson/cordova-plugin-firebase, removing all libraries that are not required for Analytics only.
Differently from the original, it is compatible with phonegap-plugin-push and also supports Cordova iOS platform 3.9.

Android and iOS are supported.

## Installation
See npm package for versions - https://www.npmjs.com/package/cordova-plugin-firebase

Install the plugin by adding it your project's config.xml:
```
<plugin name="cordova-plugin-firebase-analytics" spec="https://github.com/pickles-dev/cordova-plugin-firebase-analytics" />
```
or by running:
```
cordova plugin add https://github.com/pickles-dev/cordova-plugin-firebase-analytics --save
```
Download your Firebase configuration files, GoogleService-Info.plist for ios and google-services.json for android, and place them in the root folder of your cordova project:

```
- My Project/
    platforms/
    plugins/
    www/
    config.xml
    google-services.json       <--
    GoogleService-Info.plist   <--
    ...
```

See https://support.google.com/firebase/answer/7015592 for details how to download the files from firebase.

This plugin uses a hook (after prepare) that copies the configuration files to the right place, namely platforms/ios/\<My Project\>/Resources for ios and platforms/android for android.

**Note that the Firebase SDK requires the configuration files to be present and valid, otherwise your app will crash on boot or Firebase features won't work.**

### Notes about phonegap-plugin-push

If you also use phonegap-plugin-push in your app, it requires com.google.android.gms:play-services-gcm library,
which is also required as a dependency by the firebase library.
As a result, the version of both libraries must match for the project to compile.

To ensure this, you can edit `platforms/android/project.properties` and replace:
```
com.google.android.gms:play-services-gcm:+
```
by
```
com.google.android.gms:play-services-gcm:9.8.0
```

### Notes about PhoneGap Build

Hooks does not work with PhoneGap Build. This means you will have to manually make sure the configuration files are included. One way to do that is to make a private fork of this plugin and replace the placeholder config files (see src/ios and src/android) with your actual ones.


## Methods

### logEvent

Log an event using Analytics:
```
window.FirebasePlugin.logEvent("page_view", {page: "dashboard"});
```

### setUserId

Set a user id for use in Analytics:
```
window.FirebasePlugin.setUserId("user_id");
```

### setUserProperty

Set a user property for use in Analytics:
```
window.FirebasePlugin.setUserProperty("name", "value");
```
