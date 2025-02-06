const img = document.querySelector("#firstImage");
const projectsContainer = document.querySelector(".projects");

function projectCard(name,discription,url,image){
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const projectName = document.createElement("p");
    const projectDiscription = document.createElement("p");
    const projectBtn = document.createElement("a");
    const cardImage = document.createElement("div");
    const projectImage = document.createElement("img");

    card.classList.add("projectsCard");
    cardContent.classList.add("projectCardContent");
    projectName.setAttribute("id","projectName");
    projectDiscription.setAttribute("id","projectDiscription");
    projectBtn.setAttribute("id","projectBtn");
    cardImage.classList.add("projectCardImg");

    projectName.textContent = name;
    projectDiscription.textContent = discription;
    projectBtn.textContent = "View My Work"
    projectBtn.target = "_blank"
    projectBtn.href = url;
    projectImage.src = image;

    projectsContainer.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(projectName);
    cardContent.appendChild(projectDiscription);
    cardContent.appendChild(projectBtn);
    card.appendChild(cardImage);
    cardImage.appendChild(projectImage);
}

fetch("./data.json")
.then((res) => res.json())
.then((data) => {
    data.map((el) => {
        console.log(el);
        projectCard(el.name,el.discription,el.url,el.image)
    })
})

