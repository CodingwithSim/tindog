class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="profile-container" id="profile-container">
                <img class="dog-img" src="${avatar}">
                <div class="dog-info">
                    <p> ${name}, ${age} </p>
                    <p class="dog-bio">${bio}</p>
                </div>
                <div class="badges">
                    <img src="./images/badge-like.png" class="badge badge-like hidden" id="badge-like">
                    <img src="./images/badge-nope.png" class="badge badge-nope hidden" id="badge-nope">
                </div>
            </div>`
    }
}

export default Dog