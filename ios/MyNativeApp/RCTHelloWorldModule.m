//
//  RCTHelloWorldModule.m
//  MyNativeApp
//
//  Created by Adam Adrian-Claudiu on 17.11.2022.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"


@interface RCT_EXTERN_MODULE(HelloWorldModule, NSObject)
RCT_EXTERN_METHOD(finish: (BOOL *) success)
RCT_EXTERN_METHOD(setError: (NSString) message)

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}
@end

