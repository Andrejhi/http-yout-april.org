// alert('Привет, это новая страница!')
// gloAcademyList.style.backgroundColor = 'yellow';
// for (let i = 0; i < listVideo.length; i++) {
    //     wrapper.textContent += listVideo[i];
    // }
const API_KEY = 'AIzaSyC6VoFheCeVMi_QXCGsVW99pKmZHXTY-nU';

const gloAcademyList = document.querySelector('.glo-academy-list');

const createCard = (dataVideo) => {
    console.log(dataVideo)

    const imgUrl = dataVideo.snippet.thumbnails.high.url;
    const videoId = dataVideo.id.videoId;
    const titleVideo = dataVideo.snippet.title;
    const dateVideo = dataVideo.snippet.publishedAt;
    const channelTitle = dataVideo.snippet.channelTitle;

    const card = document.createElement('div');
    card.classList.add('video-card')
    card.innerHTML = `
            <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
              </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter">
                <span class="video-date">${dateVideo}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>
    `;
    return card;
}

// https://console.cloud.google.com/getting-started получение API ключа
// AIzaSyC6VoFheCeVMi_QXCGsVW99pKmZHXTY-nU API key Apr 23, 2021

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';
                                //вставляем на страницу
    listVideo.forEach(item => wrapper.append(createCard(item)));
};

createList(gloAcademyList, gloAcademy);
// console.dir(gloAcademyList)