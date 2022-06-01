const hobbies = {
	0: {
		src: "res/Golf.jpg",
		alt: "A picture of me teeing off at a teebox",
		class: "profile",
		text: "&#9971Playing golf&#127948",
	},
	1: {
		src: "res/Dog.jpg",
		alt: "A picture of my dogs",
		class: "profile",
		text: "&#128054Play with my dogs&#128021",
	},
	2: {
		src: "res/RoadTrip.jpg",
		alt: "Road Trip",
		class: "profile",
		text: "&#128663Road Trip!&#128678",
	},
	3: {
		src: "res/Coding.jpg",
		alt: "Coding",
		class: "profile",
		text: "&#9000Software development!&#128187",
	},
};

let count = 0;
let end = 3;
const divClass = "hobby";

$(document).ready(function () {
	$("#load-hobby").click(function () {
		if (count <= end) {
			$("#hobbies").append(
				`<div class=hobby">
            <img
                src=${hobbies[count].src}
                alt=${hobbies[count].alt}
                class=${hobbies[count].class}
            />
            <p class="description">${hobbies[count].text}</p>
            </div>`
			);
			count++;
		} else {
			$("#hobbies").append(
				`<p class="description">Thats about it!&#128518</p>`
			);
			$("#load-hobby").hide();
		}
	});
});
