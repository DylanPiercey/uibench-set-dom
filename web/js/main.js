import render from 'set-dom'
import delegate from 'delegate'
render.KEY = 'data-id'
let delegators = []

const TableCell = (text) => {
  const td = document.createElement('td')
  td.setAttribute('class', 'TableCell')
  td.setAttribute('data-id', text)
  td.appendChild(document.createTextNode(text))
  return td
}

const TableRow = ({ id, active, props }) => {
  const tr = document.createElement('tr')
  const children = document.createDocumentFragment()

  tr.setAttribute('data-id', id)
  children.appendChild(TableCell('#' + id))
  for (let i = 0; i < props.length; i++) {
    children.appendChild(TableCell(props[i]))
  }

  tr.setAttribute('data-id', id)
  tr.setAttribute('class', active ? 'TableRow active' : 'TableRow')
  tr.appendChild(children)

  return tr
}

const Table = ({ items }) => {
  delegators.push(delegate(window, '.TableCell', 'click', (e) => {
    console.log('Clicked' + e.delegateTarget.firstChild.nodeValue)
    e.stopPropagation()
  }, true))

  const table = document.createElement('table')
  const tbody = document.createElement('tbody')
  const children = document.createDocumentFragment()
  for (let i = 0; i < items.length; i++) {
    children.appendChild(TableRow(items[i]))
  }

  table.setAttribute('class', 'Table')
  tbody.appendChild(children)
  table.appendChild(tbody)

  return table
}

const AnimBox = ({ id, time }) => {
  const div = document.createElement('div')

  div.setAttribute('class', 'AnimBox')
  div.setAttribute('data-id', id)
  div.setAttribute('style', `border-radius:${time % 10}px;background:rgba(0,0,0,${0.5 + ((time % 10) / 10)})`)

  return div
}

const Anim = ({ items }) => {
  const div = document.createElement('div')
  const children = document.createDocumentFragment()

  for (let i = 0; i < items.length; i++) {
    children.appendChild(AnimBox(items[i]))
  }

  div.setAttribute('class', 'Anim')
  div.appendChild(children)

  return div
}

const TreeLeaf = ({ id }) => {
  const li = document.createElement('li')

  li.setAttribute('class', 'TreeLeaf')
  li.appendChild(document.createTextNode(id))

  return li
}

const TreeNode = ({ children: items }) => {
  const ul = document.createElement('ul')
  const children = document.createDocumentFragment()

  for (let i = 0; i < items.length; i++) {
    const n = items[i]
    children.appendChild(n.container
      ? TreeNode(n)
      : TreeLeaf(n)
    )
  }

  ul.setAttribute('class', 'TreeNode')
  ul.appendChild(children)

  return ul
}

const Tree = ({ root }) => {
  const div = document.createElement('div')

  div.setAttribute('class', 'Tree')
  div.appendChild(TreeNode(root))

  return div
}

const Main = (data) => {
  delegators.map(({ destroy }) => destroy())
  delegators = []
  const div = document.createElement('div')
  div.setAttribute('class', 'Main')

  switch (data.location) {
    case 'table':
      div.appendChild(Table(data.table))
      break
    case 'anim':
      div.appendChild(Anim(data.anim))
      break
    case 'tree':
      div.appendChild(Tree(data.tree))
      break
  }

  return div
}

window.uibench.init('Deku', '2.0.0-rc16')

document.addEventListener('DOMContentLoaded', function (e) {
  const container = document.querySelector('#App')

  window.uibench.run(
    function (state) {
      render(container, Main(state))
    },
    function (samples) {
      const pre = document.createElement('pre')
      pre.appendChild(document.createTextNode(JSON.stringify(samples, null, ' ')))
      render(container, pre)
    }
  )
})
