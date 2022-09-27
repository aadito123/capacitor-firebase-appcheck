import Capacitor
import FirebaseAppCheck
import FirebaseCore
import Foundation

/// Please read the Capacitor iOS Plugin Development Guide
/// here: https://capacitorjs.com/docs/plugins/ios
@available(iOS 14.0, *)
@objc(AppCheckPlugin)
public class AppCheckPlugin: CAPPlugin {
  private var appAttestProvider: AppAttestProvider? = nil
  private var debugProvider: AppCheckDebugProvider? = nil
  private var debugMode = false
  private var errorMessage: String? = nil

  override public func load() {
    NSLog("FirebaseAppCheck loading...")
    FirebaseApp.configure()
    if let firebaseAppInst = FirebaseApp.app() {
      appAttestProvider = AppAttestProvider(app: firebaseAppInst)
      debugProvider = AppCheckDebugProvider(app: firebaseAppInst)
      NSLog("Firebase Debug Token: " + (debugProvider?.localDebugToken())!)
    } else {
      errorMessage = "FirebaseApp instance is null"
    }
    NSLog("FirebaseAppCheck loaded")
  }

  @objc func getToken(_ call: CAPPluginCall) {
    NSLog("FirebaseAppCheck ")
    if let errorMessage = errorMessage {
      call.reject(errorMessage)
      return
    }
    if debugMode, let debugProvider = debugProvider {
      debugProvider.getToken { token, error in
        if let error = error {
          NSLog("FirebaseAppCheck rejecting (1)")
          call.reject(error.localizedDescription)
        } else if let token = token {
          call.resolve([
            "token": token.token,
            "expireTimeMillis": String(Int64(token.expirationDate.timeIntervalSince1970 * 1000.0)),
          ])
        }
      }
    } else if let appAttestProvider = appAttestProvider {
      appAttestProvider.getToken { token, error in
        if let error = error {
          NSLog("FirebaseAppCheck rejecting (2)")
          call.reject(error.localizedDescription)
        } else if let token = token {
          call.resolve([
            "token": token.token,
            "expireTimeMillis": String(
              Int64(token.expirationDate.timeIntervalSince1970 * 1000.0)),
          ])
        }
      }
    } else {
      NSLog("FirebaseAppCheck rejecting (3)")
      call.reject("Providers are null")
    }
  }

  @objc func enableDebug(_ call: CAPPluginCall) {
    NSLog("FirebaseAppCheck enableDebug")
    debugMode = true
    call.resolve()
  }

}

