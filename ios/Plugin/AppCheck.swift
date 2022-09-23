import Foundation

@objc public class AppCheck: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
