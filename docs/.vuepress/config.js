module.exports = {
    title: 'Java阶段性学习笔记',
    description: 'Just playing around',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        // 顶部栏
        nav: [
            {text: '博客', link: 'https://www.shiguangping.com/'}, // 外部链接
            // 下拉列表
            {
                text: '代码仓库',
                items: [
                    {text: 'GitHub', link: 'https://github.com/OBKoro1'},
                    {text: 'Gitee', link: 'https://github.com/OBKoro1/Brush_algorithm'}
                ]
            }
        ],
        // 侧边栏
        sidebar: [
            {
                title: 'JavaSE',
                collapsable: false,
                children: [
                    {
                        title: '搭建开发环境',
                        collapsable: false,
                        children: [
                            ['/javase1/jdk-introduce','什么是JDK？'],
                            ['/javase1/jdk-install','安装JDK'],
                            ['/javase1/set-environment-variable','配置环境变量'],
                            ['/javase1/ide','集成开发环境'],
                            ['/javase1/hello-world','编写Hello World'],
                            ['/javase1/function-main','程序的入口-main'],
                        ]
                    },
                    ['/javase2/java-annotation','Java注释格式']

                ]
            },
            {
                title: 'Mysql数据库',
                collapsable: false
            }
        ]
    }
}