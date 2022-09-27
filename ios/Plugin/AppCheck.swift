import Capacitor
import FirebaseCore
import FirebaseAppCheck
import Foundation

/// Please read the Capacitor iOS Plugin Development Guide
/// here: https://capacitorjs.com/docs/plugins/ios
@objc(AppCheckPlugin)
public class AppCheckPlugin: CAPPlugin {
  private let appAttestProvider = AppAttestProvider(app: FirebaseApp.app())
  private let debugProvider = AppCheckDebugProvider(app: FirebaseApp.app())
  private let debugMode = false

  @objc func load() {

  }

  @objc func getToken(_ call: CAPPluginCall) {
    if debugMode {
      debugProvider.getToken { token, error in
        if let error = error {
          call.reject(error.localizedDescription)
        } else if let token = token {
          call.resolve([
            "token": token.token,
            "expireTimeMillis": String(Int64(token.expirationDate.timeIntervalSince1970 * 1000.0)),
          ])
        }
      }
    } else {
      appAttestProvider.getToken { token, error in
        if let error = error {
          call.reject(error.localizedDescription)
        } else if let token = token {
          call.resolve([
            "token": token.token,
            "expireTimeMillis": String(Int64(token.expirationDate.timeIntervalSince1970 * 1000.0)),
          ])
        }
      }
    }
  }

    @objc func enableDebug(_ call: CAPPluginCall) {
        debugMode = true
        call.resolve()
    }

}
