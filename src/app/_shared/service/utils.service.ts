/*
 * @Author: Edward https://github.com/crazybber 
 * @Date: 2020-05-25 18:12:31 
 * @Last Modified by: Edward
 * @Last Modified time: 2020-05-25 18:13:09
 */

import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';


@Injectable()
export class UtilsService {

  constructor(
    public snackBar: MatSnackBar
  ) { }


  isSmartDevice(): boolean {
    let userAgentInfo = navigator.userAgent;
    let mobileAgents = ["Android", "iPhone", "iPad", "iPod", "BlackBerry", "Opera Mini", "IEMobile"];
    let flag = false;

    if (document.body.offsetWidth < 1000) {
      flag = true;
    }
    for (var v = 0; v < mobileAgents.length; v++) {
      if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
        flag = true;
        break;
      }
    }

    return flag;
  }


  // 将字符串编码为 base64
  b64EncodeUnicode(str): string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      }));
  }

  b64DecodeUnicode(str): string {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  getErrorInfo(err: HttpErrorResponse): string {
    return err.error instanceof Error ? err.error.message : err.status + " " + err.statusText;
  }

  markdownText(text: string): Promise<string> {
    return of(text).pipe().toPromise();
  }

  emojiParser(text: string): string {
    return text
      .replace(/:art:/g, "🎨")
      .replace(/:zap:/g, "⚡️")
      .replace(/:fire:/g, "🔥")
      .replace(/:bug:/g, "🐛")
      .replace(/:ambulance:/g, "🚑")
      .replace(/:sparkles:/g, "✨")
      .replace(/:memo:/g, "📝")
      .replace(/:rocket:/g, "🚀")
      .replace(/:lipstick:/g, "💄")
      .replace(/:tada:/g, "🎉")
      .replace(/:white_check_mark:/g, "✅")
      .replace(/:lock:/g, "🔒")
      .replace(/:apple:/g, "🍎")
      .replace(/:penguin:/g, "🐧")
      .replace(/:checkered_flag:/g, "🏁")
      .replace(/:robot:/g, "🤖")
      .replace(/:green_apple:/g, "🍏")
      .replace(/:bookmark:/g, "🔖")
      .replace(/:rotating_light:/g, "🚨")
      .replace(/:construction:/g, "🚧")
      .replace(/:green_heart:/g, "💚")
      .replace(/:arrow_down:/g, "⬇️")
      .replace(/:arrow_up:/g, "⬆️")
      .replace(/:construction_worker:/g, "👷")
      .replace(/:chart_with_upwards_trend:/g, "📈")
      .replace(/:hammer:/g, "🔨")
      .replace(/:heavy_minus_sign:/g, "➖")
      .replace(/:whale:/g, "🐳")
      .replace(/:heavy_plus_sign:/g, "➕")
      .replace(/:wrench:/g, "🔧")
      .replace(/:globe_with_meridians:/g, "🌐")
      .replace(/:pencil2:/g, "✏️")
      .replace(/:hankey:/g, "⏪")
      .replace(/:twisted_rightwards_arrows:/g, "🔀")
      .replace(/:package:/g, "📦")
      .replace(/:alien:/g, "👽")
      .replace(/:truck:/g, "🚚")
      .replace(/:page_facing_up:/g, "📄")
      .replace(/:boom:/g, "💥")
      .replace(/:bento:/g, "🍱")
      .replace(/:ok_hand:/g, "👌")
      .replace(/:wheelchair:/g, "♿️")
      .replace(/:bulb:/g, "💡")
      .replace(/:beers:/g, "🍻")
      .replace(/:speech_balloon:/g, "💬")
      .replace(/:card_file_box:/g, "🗃")
      .replace(/:loud_sound:/g, "🔊")
      .replace(/:mute:/g, "🔇")
      .replace(/:bust_in_silhouette:/g, "👤")
      .replace(/:busts_in_silhouette:/g, "👥")
      .replace(/:children_crossing:/g, "🚸")
      .replace(/:email:/g, "📧");
  }
}
