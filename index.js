let Data = [{
    dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww", story: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww'
}, {
    dp: 'https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D', story: 'https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D'
},
{
    dp: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D', story: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D'
},
{
    dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D', story: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D'
}, {
    dp: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww', story: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww'
}, {
    dp: 'https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww', story: 'https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww'
}, {
    dp: 'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D', story: 'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D'
}]


let storys = document.querySelector('.storys');
let code = ""
Data.forEach(function (data, indx) {
    code += `<div class="story">
                <img src="${data.dp}" id='${indx}' alt="">
            </div>`;
})
storys.innerHTML = code;
let shwstry = document.querySelector('.shwStory');
let currentIndex;
storys.addEventListener('click', (e) => {

    shwstry.innerHTML = ''
    currentIndex = parseInt(e.target.id)
    shwstry.style.backgroundImage = `url(${Data[e.target.id].story})`;
    shwstry.style.display = 'flex'

    let h1 = document.createElement('h1')
    h1.textContent = '+'
    h1.classList.add('closeIcon')
    h1.setAttribute('onClick', 'closeStory()')
    shwstry.appendChild(h1)


    let div = document.createElement('div')
    div.classList.add('inputandIcon');

    let input = document.createElement('input')
    input.setAttribute('id', 'sendMess')
    input.setAttribute('placeholder', 'Send Message...')
    div.appendChild(input)
    div.innerHTML += `<i class=" like fa-solid fa-heart" onClick='likeStory()'></i><i class="fa-brands fa-telegram"></i>`
    shwstry.appendChild(div)

    let nxtIndex = parseInt(e.target.id)
    console.log(shwstry.style.display);

    intervalId = setInterval(() => {
        if (nxtIndex == Data.length) {
            console.log(Data.length, nxtIndex);
            nxtIndex = 0
        }
        nxtIndex += 1;
        console.log(nxtIndex);
        shwstry.style.backgroundImage = `url(${Data[nxtIndex].story})`;
    }, 100000)

})


shwstry.addEventListener('click', (event) => {
    console.log('click');
    let x = event.clientX;
    let midPoint = shwstry.clientWidth;

    if (event.target.tagName.toLowerCase() === 'h1' || event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'i') {
        return; // Ignore clicks on the close icon
    }

    if (midPoint > x) {
        currentIndex += -1
        if (currentIndex === -1) {
            currentIndex = Data.length - 1
        }
        console.log(currentIndex);
        shwstry.style.backgroundImage = `url(${Data[currentIndex].story})`;
    } else {

        if (currentIndex === Data.length - 1) {
            currentIndex = -1
        }
        currentIndex += 1
        console.log(currentIndex);
        shwstry.style.backgroundImage = `url(${Data[currentIndex].story})`;
    }

})

let intervalId;
function clearIntervals() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null
    }
}
let flag = true;
function likeStory() {
    if (flag) {
        flag = false;
        document.querySelector('.like').style.color = 'red'
    }
    else {
        document.querySelector('.like').style.color = 'white'
        flag = true;
    }
}

function closeStory() {
    shwstry.style.display = 'none'
    clearIntervals()
    document.querySelector('.closeIcon').style.display = 'none'
}


function showaddPostDiv() {
    document.querySelector('.addPostDiv').style.display = 'flex'
    document.querySelector('.posts').style.display = 'none'
}

function addPost() {
    let url = document.querySelector('.postUrl').value;
    let caption = document.querySelector('.caption').value;

    if (!url) {
        alert('Enter url')
        return;
    }


    let postArray = JSON.parse(localStorage.getItem('postArray')) || [];
    let videoInput = document.querySelector('.postUrl')
    if (videoInput.getAttribute('placeholder') == 'Enter url of video') {
        let obj = {
            url: url,
            type: 'video',
            caption: caption
        }
        postArray.push(obj)
        localStorage.setItem('postArray', JSON.stringify(postArray))

        document.querySelector('.addPostDiv').style.display = 'none'
        let posts = document.querySelector('.posts');
        posts.style.display = 'block'
    }
    else {

        let obj = {
            url: url,
            type: 'image', caption: caption
        }
        postArray.push(obj)
        localStorage.setItem('postArray', JSON.stringify(postArray))

        document.querySelector('.addPostDiv').style.display = 'none'
        let posts = document.querySelector('.posts');
        posts.style.display = 'block'
    }
    location.reload(true);
    url.value = ''
}
// localStorage.clear()
function addVideo() {
    document.querySelector('.postUrl').setAttribute('placeholder', 'Enter url of video')
    document.querySelector('.imgbtn').style.cssText = 'background-color: white; color:black;';
    document.querySelector('.vdobtn').style.cssText = 'background-color: green; color: white;';
}

function addImage() {
    document.querySelector('.postUrl').setAttribute('placeholder', 'Enter url of image')
    document.querySelector('.vdobtn').style.cssText = ' color:black;';
    document.querySelector('.imgbtn').style.cssText = 'background-color: green; color: white;';
}
function addPosttoDiv() {
    let postArray = JSON.parse(localStorage.getItem('postArray')) || [];
    let posts = document.querySelector('.posts');
    posts.style.display = 'block'

    postArray.forEach((elem, indx) => {

        let div = document.createElement('div')
        div.classList.add('newPostHead')
        let h3 = document.createElement('h3')
        h3.textContent = 'New Post'
        div.appendChild(h3)

        let i = document.createElement('i')
        i.classList.add('fa-solid')
        i.classList.add('fa-ellipsis')
        i.setAttribute('onClick', `deletePost(${indx})`)
        i.setAttribute('id', 'indx')

        div.appendChild(i)

        let postItem;

        if (elem.type == 'video') {
            console.log('video');
            postItem = document.createElement('video')
            postItem.setAttribute('src', `${elem.url}`)
            postItem.autoplay = true;
            postItem.controls = true;
            postItem.muted = true;
            postItem.loop = true;

        }
        else {
            console.log('img');
            postItem = document.createElement('img')
            postItem.setAttribute('src', `${elem.url}`)
        }

        let imgandCaptionDiv = document.createElement('div')
        imgandCaptionDiv.classList.add('imgandCaptionDiv')
        let caption = document.createElement('h3')
        caption.textContent = `Caption : ${elem.caption}`;
        caption.classList.add('captionText')
        imgandCaptionDiv.appendChild(postItem)
        imgandCaptionDiv.appendChild(caption)
        posts.appendChild(div)
        posts.appendChild(imgandCaptionDiv)

    })
}
window.onload = function () {
    // Your function call here
    addPosttoDiv();
};

let currentIndexoDelete;
function deletePost(dets) {
    currentIndexoDelete = dets
    document.querySelector('.deleteAlertDiv').style.display = 'flex'
}

function yes() {
    console.log('yes');
    let postArray = JSON.parse(localStorage.getItem('postArray'))
    postArray.splice(currentIndexoDelete, 1)
    localStorage.setItem('postArray', JSON.stringify(postArray))
    location.reload(true);
    alert('Post Deleted')
    document.querySelector('.deleteAlertDiv').style.display = 'none'
}

function no() {
    console.log('no');
    document.querySelector('.deleteAlertDiv').style.display = 'none'
}


function showAllPostsPage() {

    document.querySelector('.addPostDiv').style.display = 'none'
    document.querySelector('.posts').style.display = 'block'
}