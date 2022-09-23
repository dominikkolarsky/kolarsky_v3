// dynamicke vykreslovani projektu
import data from '../projects.json' assert {type: 'json'};

const projects = document.getElementById('projects');

projects.innerHTML = data.filter((projects, index) => index < 3).map((projects) => {
    return `<li class="project__item hidden">
    <div class="project__item--img">
        <img loading="lazy" src="${projects.img}" alt="${projects.alt}">
    </div>
    <div class="project__item--text">
        <div class="project__item--header">
            <h5>${projects.name}</h5><span class="project__item--tech">${projects.tech}</span>
        </div>
        <p class="project__item--description">${projects.description}</p>
        <ul class="project__item--links">
            <li>
                <a href="${projects.github}" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-github" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                        </path>
                    </svg>
                    GitHub
                </a>
            </li>
            <li>
                <a href="${projects.link}" target="_blank">
                    Visite
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                        <line x1="10" y1="14" x2="20" y2="4"></line>
                        <polyline points="15 4 20 4 20 9"></polyline>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</li>`
}).join('');

const moreBtn = document.getElementById('moreBtn');
const label = document.getElementById('showMore');

moreBtn.addEventListener('click', AddMore)

function AddMore() {
    projects.innerHTML += data.filter((projects, index) => index > 2).map((projects) => {
        return `<li class="project__item show2">
        <div class="project__item--img">
            <img loading="lazy" src="${projects.img}" alt="${projects.alt}">
        </div>
        <div class="project__item--text">
            <div class="project__item--header">
                <h5>${projects.name}</h5><span class="project__item--tech">${projects.tech}</span>
            </div>
            <p class="project__item--description">${projects.description}</p>
            <ul class="project__item--links">
                <li>
                    <a href="${projects.github}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-github" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                            </path>
                        </svg>
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="${projects.link}" target="_blank">
                        Visite
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                            <line x1="10" y1="14" x2="20" y2="4"></line>
                            <polyline points="15 4 20 4 20 9"></polyline>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </li>`
    }).join('');

    label.remove();
}

