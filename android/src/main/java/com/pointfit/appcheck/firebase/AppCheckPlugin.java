package com.pointfit.appcheck.firebase;

import android.Manifest;
import android.util.Log;
import android.content.Context;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

import com.getcapacitor.Plugin;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.google.firebase.FirebaseApp;
import com.google.firebase.appcheck.AppCheckToken;
import com.google.firebase.appcheck.FirebaseAppCheck;
import com.google.firebase.appcheck.debug.DebugAppCheckProviderFactory;
import com.google.firebase.appcheck.playintegrity.PlayIntegrityAppCheckProviderFactory;

@CapacitorPlugin(name = "AppCheck", permissions = {
        @Permission(alias = "internet", strings = { Manifest.permission.INTERNET,
                Manifest.permission.ACCESS_NETWORK_STATE }) })
public class AppCheckPlugin extends Plugin {

    protected static final String TAG = "FirebaseAppCheck";
    protected static Context applicationContext = null;
    private FirebaseAppCheck mAppCheck;
    private Boolean debugMode = false;

    @Override
    public void load() {
        Log.d(TAG, "Loading AppCheck plugin");
        super.load();
        Log.d(TAG, "AppCheck plugin loaded");
        FirebaseApp.initializeApp(bridge.getActivity().getApplicationContext());
        Log.d(TAG, "FirebaseApp initialized");
        mAppCheck = FirebaseAppCheck.getInstance();
        Log.d(TAG, "FirebaseAppCheck initialized");
        mAppCheck.installAppCheckProviderFactory(PlayIntegrityAppCheckProviderFactory.getInstance());
        Log.d(TAG, "PlayIntegrityAppCheckProviderFactory installed");
    }

    @PluginMethod
    public void getToken(PluginCall call) {
        try {
            mAppCheck.getAppCheckToken(false)
                    .addOnCompleteListener(new OnCompleteListener<AppCheckToken>() {
                        @Override
                        public void onComplete(Task<AppCheckToken> task) {
                            try {
                                if (!task.isSuccessful()) { // handle failure
                                    Log.d(TAG, "Token task unsuccessful: " + task.getException().toString());
                                    call.reject(task.getException().getMessage());
                                    return;
                                }
                                AppCheckToken result = task.getResult();
                                Log.d(TAG, "AppCheckToken: " + result.getToken());

                                // making JSON object and returning
                                JSObject returnResults = new JSObject();
                                returnResults.put("token", result.getToken());
                                returnResults.put("expireTimeMillis",
                                        Long.toString(result.getExpireTimeMillis()));
                                call.resolve(returnResults);
                            } catch (Exception e) {
                                call.reject("Error parsing JSON when getting token | " + e.getMessage());
                            }
                        }
                    });
        } catch (Exception e) {
            call.reject("Error getting token | " + e.getMessage());
        }
    }

    @PluginMethod
    public void enableDebug(PluginCall call) {
        if (debugMode) {
            call.resolve();
            return;
        }
        try {
            mAppCheck.installAppCheckProviderFactory(DebugAppCheckProviderFactory.getInstance());
            debugMode = true;
            call.resolve();
        } catch (Exception e) {
            call.reject("Error activating debug mode | " + e.getMessage());
        }
    }
}
