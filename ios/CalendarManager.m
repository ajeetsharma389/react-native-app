//
//  CalendarManager.m
//  productapp
//
//  Created by Krish on 18/09/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  
  
}

RCT_EXPORT_METHOD(addEvent2:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  //NSArray *events = ...
  NSArray *events = @[@"Event 1", @"Event 2", @"Event 3", @"Event 4", @"Event 5"];
  
  callback(@[[NSNull null], events]);
}

RCT_REMAP_METHOD(findEventsWithPromise,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events = @[@"Event 1", @"Event 2", @"Event 3", @"Event 4", @"Event 5"];
  if (events) {
    resolve(events);
  }
  //    } else {
  //      NSError *error = ...
  //      reject(@"no_events", @"There were no events", error);
  //    }
}


RCT_REMAP_METHOD(findEventsWithReject,
                 findEventsWithResolver2:(RCTPromiseResolveBlock)resolve
                 rejecter2:(RCTPromiseRejectBlock)reject)
{
  
  NSURL *url = [[NSURL alloc] initWithString:@"https://www.facebook.com"];
  
  NSError *error = [NSError errorWithDomain:@"domain" code:68 userInfo:@{@"url": url}];
  
  
  reject(@"no_events", @"There were no events", error);
  
}


@end
