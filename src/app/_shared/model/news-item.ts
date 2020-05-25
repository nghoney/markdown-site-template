/*
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-05-25 15:04:37
 * @LastEditors: Edward
 * @FilePath: \markdown-site-template\src\app\_shared\model\news-item.ts
 * @LastEditTime: 2020-05-25 15:48:39
 * @description: NG markdown site template @ MIT License
 */

export class NewsItem {

    labels?: string;
    milestone: string;
    page: number = 1;
    per_page: number = 20;
    state: string = 'open';
    sort: string = 'created';
    direction: string = 'desc';

}




