//
//  HelloWorldModule.swift
//  MyNativeApp
//
//  Created by Adam Adrian-Claudiu on 17.11.2022.
//

import Foundation
import UIKit
import AVFoundation

@objc(HelloWorldModule)
class HelloWorldModule: NSObject {
    @objc func finish(_ success: Bool) {
      if (success) {
          print("Finished with success");
      } else {
          print("Finished with failure");
      }
    }
    
    @objc func setError(_ message: NSString) {
        print("MESSAGE FROM SWIFT: " + String(message))
    }
}
