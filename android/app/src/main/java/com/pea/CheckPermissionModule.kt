package com.pea

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.telephony.SmsManager
import com.facebook.react.bridge.Promise

class CheckPermissionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext),
        ActivityCompat.OnRequestPermissionsResultCallback {

        private val SMS_PERMISSION_REQUEST_CODE = 123

        override fun getName() = "SmsModule"

        @ReactMethod
        fun checkSmsPermission() {
                val currentActivity = currentActivity
                currentActivity?.let {
                        if (hasSmsPermissions(it)) {
                                // Perform actions that require SMS permissions
                        } else {
                                // Request SMS permissions
                                ActivityCompat.requestPermissions(
                                        it,
                                        arrayOf(
                                                Manifest.permission.READ_SMS,
                                                Manifest.permission.SEND_SMS
                                        ),
                                        SMS_PERMISSION_REQUEST_CODE
                                )
                        }
                }
        }

        @ReactMethod
        fun sendSms(text: String, phoneNumber: String, promise: Promise) {
                try {
                        val smsManager = SmsManager.getDefault()
                        smsManager.sendTextMessage(phoneNumber, null, text, null, null)
                        promise.resolve(true) // SMS sent successfully
                } catch (e: Exception) {
                        // Handle exceptions, such as SecurityException or IllegalArgumentException
                        e.printStackTrace()
                        promise.reject("SMS_ERROR", "Failed to send SMS") // SMS sending failed
                }
        }

        fun hasSmsPermissions(context: Context): Boolean {
                val readSmsPermission = ContextCompat.checkSelfPermission(
                        context,
                        Manifest.permission.READ_SMS
                )

                val sendSmsPermission = ContextCompat.checkSelfPermission(
                        context,
                        Manifest.permission.SEND_SMS
                )

                return readSmsPermission == PackageManager.PERMISSION_GRANTED &&
                        sendSmsPermission == PackageManager.PERMISSION_GRANTED
        }

        override fun onRequestPermissionsResult(
                requestCode: Int,
                permissions: Array<out String>,
                grantResults: IntArray
        ) {
                if (requestCode == SMS_PERMISSION_REQUEST_CODE) {
                        if (grantResults.isNotEmpty() &&
                                grantResults[0] == PackageManager.PERMISSION_GRANTED &&
                                grantResults[1] == PackageManager.PERMISSION_GRANTED
                        ) {
                                // Permission granted, perform actions that require SMS permissions
                        } else {
                                // Permission denied, handle accordingly
                        }
                }
        }
}
