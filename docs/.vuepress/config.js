module.exports = {
    title: 'Flutter学习笔记',
    description: 'Just playing around',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        // 顶部栏
        nav: [
            {text: '博客', link: 'https://www.shiguangping.com/'}, // 外部链接
            // 下拉列表
            {
                text: '代码仓库',
                items: [
                    {text: 'GitHub', link: 'https://github.com/ENNRIaaa'},
                    {text: 'Gitee', link: 'https://gitee.com/ENNRIAAA'}
                ]
            }
        ],
        // 侧边栏
        sidebar: [
            {
                title: 'Dart',
                collapsable: false,
                children: [
                    ['/d1/dart', 'Dart编程语言概览'],
                ]
            }
        ]
    }
}