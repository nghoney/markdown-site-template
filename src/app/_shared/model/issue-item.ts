/*
 * @Repo: https://github.com/nghoney/markdown-site-template
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-06-03 16:24:09
 * @Last Modified by: Edward
 * @Last Modified time: 2020-06-03 17:14:50
 */

export class IssueItem {
    title: string;
    state: string;
    url: string;
    assignee: string;
    body: string;
    collaborators: any[];
    comments: number;
    comments_url: string;
    issue_type: string;
    finished_at:string;
    created_at: string;
    updated_at: string;
    labels: any[];

}

/*

assignee: null
body: "this is long content"
collaborators: []
comments: 0
comments_url: "https://gitee.com/api/v5/repos/crazybber/markdown-site-template/issues/I1ICN6/comments"
created_at: "2020-05-25T20:01:39+08:00"
deadline: null
finished_at: null
html_url: "https://gitee.com/crazybber/markdown-site-template/issues/I1ICN6"
id: 2535810
issue_type: "任务"
labels: [{…}]
labels_url: "https://gitee.com/api/v5/repos/crazybber/markdown-site-template/issues/I1ICN6/labels"
milestone: {url: "https://gitee.com/api/v5/repos/crazybber/markdown-site-template/milestones/36542", html_url: "https://gitee.com/crazybber/markdown-site-template/milestones/36542", id: 36542, number: 36542, repository_id: null, …}
number: "I1ICN6"
parent_url: null
plan_started_at: null
program: null
repository: {id: 9420731, full_name: "crazybber/markdown-site-template", human_name: "Edward/markdown-site-template", url: "https://gitee.com/api/v5/repos/crazybber/markdown-site-template", namespace: {…}, …}
repository_url: "https://gitee.com/api/v5/repos/crazybber/markdown-site-template"
scheduled_time: 0
security_hole: false
state: "open"
title: "字节序"
updated_at: "2020-05-25T20:01:49+08:00"
url: "https://gitee.com/api/v5/repos/crazybber/markdown-site-template/issues/I1ICN6"
*/
