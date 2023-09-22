//setup the canvas
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

/**make the canvas always fill the screen**/;
(function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    window.onresize = resize
})()

//for this code (as in code before this line), I almost always use the same stuff, so its going to stay here

//all the sites
let sites = [
    { name: 'Full-BAB', url: 'https://full-bab.vercel.app' },
    { name: 'Full-Clicker', url: 'https://full-clicker.vercel.app' },
    { name: 'Full-PONG', url: 'https://full-pong.vercel.app' },
    { name: 'Full-Snake', url: 'https://full-snake.vercel.app' },
    { name: 'Quick-BAB', url: 'https://quick-bab.vercel.app' },
    { name: 'Quick-Clicker', url: 'https://quick-clicker.vercel.app' },
    { name: 'Quick-PONG', url: 'https://quick-pong.vercel.app' },
    { name: 'Quick-Snake', url: 'https://quick-snake.vercel.app' }
]

//remember the mouse
let mouseY = 0
document.addEventListener('mousemove', e => mouseY = e.y)

//listen for clicks
document.addEventListener('click', e => window.location.href = sites[Math.floor(mouseY / (canvas.height / sites.length))].url)

//listen for the mouse leaving
document.addEventListener('mouseleave', e => mouseY = 0)

    //the render loop
    ;
(function render() {
    //clear the screen
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //render rows for the boxes
    ctx.textBaseline = 'top'
    ctx.textAlign = 'center'
    ctx.strokeStyle = 'rgb(0,255,0)'
    const rowHeight = canvas.height / sites.length
    for (const index in sites) {
        const site = sites[index]
        if (mouseY > index * rowHeight && mouseY < index * rowHeight + rowHeight)
            ctx.fillStyle = 'rgb(0,0,255)'
        else ctx.fillStyle = 'rgb(0,255,0)'
        ctx.strokeRect(0, index * rowHeight, canvas.width, rowHeight)
        ctx.font = `${rowHeight / 2}px arial`
        ctx.fillText(site.name, canvas.width / 2, index * rowHeight)
        ctx.font = `${rowHeight / 4}px arial`
        ctx.fillText(site.url, canvas.width / 2, index * rowHeight + rowHeight / 4 * 3)
    }

    requestAnimationFrame(render)
})()