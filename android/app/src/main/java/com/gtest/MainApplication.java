package com.gtest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.levelasquez.androidopensettings.AndroidOpenSettingsPackage;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.beefe.picker.PickerViewPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import com.mapbox.rctmgl.RCTMGLPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader; // <--- add here!
import com.wix.reactnativenotifications.RNNotificationsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // <-- Add this line
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // <-- Add this line


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new AndroidOpenSettingsPackage(),
            new RNCameraKitPackage(),
            new PickerViewPackage(),
            new RNFirebasePackage(),
                new RNFirebaseMessagingPackage(), // <-- Add this line,
            new RCTMGLPackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseFirestorePackage(),
          new RNFirebaseNotificationsPackage(),
	        new RNNotificationsPackage(MainApplication.this)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
