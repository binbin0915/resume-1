import './assets/css/app.scss'
import { createLink } from './utils'

function initNav() {
    const pages = document.querySelector('header')
    // 获取所有模板的链接
    const links = pages.innerText.split(',').map(pageName => {
        const link = createLink(pageName, `./pages/${pageName}`)
        // iframe中打开
        link.target = 'page'
        return link
    })

    // 插入自定义的链接
    links.push(createLink('Github', 'https://github.com/ATQQ/resume', true))

    // 插入所有模板的链接
    const t = document.createDocumentFragment()
    links.forEach(link => {
        t.appendChild(link)
    })
    pages.innerHTML = ''
    pages.append(t)

    // 默认页面
    const page = document.getElementById('page')
    page.src = links[0].href
}

initNav()