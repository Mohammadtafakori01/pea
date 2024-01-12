package com.pea;

import android.Manifest
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CheckPermissionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

private val MY_PERMISSIONS_REQUEST_CODE = 1

        override fun getName(): String {
        return "CheckPermissionModule"
        }

@ReactMethod
    fun checkPermission(permission: String, promise: Promise) {
            if (ContextCompat.checkSelfPermission(reactContext, permission)
            == PackageManager.PERMISSION_GRANTED) {
            promise.resolve(true) // Permission granted
            } else {
            promise.resolve(false) // Permission not granted
            }
            }

@ReactMethod
    fun requestPermission(permission: String, promise: Promise) {
            if (ContextCompat.checkSelfPermission(reactContext, permission)
            != PackageManager.PERMISSION_GRANTED) {
            // Permission is not granted, request it
            ActivityCompat.requestPermissions(currentActivity, arrayOf(permission), MY_PERMISSIONS_REQUEST_CODE)
            } else {
            promise.resolve(true) // Permission already granted
            }
            }

            // Handle the result of permission request
            fun onRequestPermissionsResult(requestCode: Int, grantResults: IntArray, promise: Promise) {
            when (requestCode) {
            MY_PERMISSIONS_REQUEST_CODE -> {
            // If request is cancelled, the result arrays are empty.
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            // Permission was granted
            promise.resolve(true)
            } else {
            // Permission denied
            promise.resolve(false)
            }
            }
            // Add more cases if needed for other permissions
            }
            }
            }