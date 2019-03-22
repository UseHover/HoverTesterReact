package com.hover.react.tester;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import com.hover.react.sdk.RNHoverReactSdkModule;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HoverTesterReact";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        RNHoverReactSdkModule.initializeHover(this.getApplicationContext());
    }

}
