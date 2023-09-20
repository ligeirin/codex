let doc = document;

let ENTRIES_DATA = [];

function init() {
	ENTRIES_DATA = JSON.parse(JSON.stringify(ENTRIES));
	render();
}

function render() {
	let entriesDiv = document.getElementById("entriesDiv");

	entriesDiv.innerHTML = '';

	ENTRIES_DATA.forEach((entry, i) => {
		let entryWrapper = doc.createElement("div");
		entryWrapper.id = "entry" + i;
		entryWrapper.classList.add("entry");
		entryWrapper.dataset.entry_id = i;

		let tagWrapper = doc.createElement("div");
		tagWrapper.classList.add("tag-wrapper");
		tagWrapper.id = "tagWrapper" + i;

		entry.tags.forEach((tagId, j) => {
			let tagDiv = doc.createElement("tag");
			tagDiv.classList.add("tag");
			tagDiv.id = "tag" + i + "-" + j;
			tagDiv.innerText = TAGS[tagId].name;
			tagDiv.style.backgroundColor = TAGS[tagId].color;

			tagWrapper.append(tagDiv);
		});

		let entryTitle = doc.createElement("span");
		entryTitle.classList.add("entry-title");
		entryTitle.id = "entryTitle" + i;
		entryTitle.innerText = entry.name;

		let descriptionWrapper = doc.createElement("div");
		descriptionWrapper.classList.add("entry-description-wrapper");

		let descriptionGradientOverlay = doc.createElement("div");
		descriptionGradientOverlay.classList.add("entry-description-overlay");

		let entryDescription = doc.createElement("span");
		entryDescription.classList.add("entry-description");
		entryDescription.id = "entryDescription" + i;
		entryDescription.innerText = entry.description + entry.description;

		descriptionWrapper.append(entryDescription);
		descriptionWrapper.append(descriptionGradientOverlay);

		entryWrapper.append(entryTitle);
		entryWrapper.append(descriptionWrapper);
		entryWrapper.append(tagWrapper);

		entryWrapper.onclick = (ev) => {
			let id = ev.currentTarget.dataset.entry_id;
			window.location.href = ENTRIES_DATA[id].path;
		};

		entriesDiv.append(entryWrapper);
	});
}


function filterEntries(){
	ENTRIES_DATA = ENTRIES;

	let titleFilter = document.getElementById("titleFilterInput").value;
		titleFilter = titleFilter ? titleFilter : null;

	let tagFilter = document.getElementById("tagFilterInput").value;
		tagFilter = tagFilter ? tagFilter.split(',') : null;

	ENTRIES_DATA = ENTRIES_DATA.filter((entry) => {
		if (titleFilter === null && tagFilter === null)
			return true;

		let titleCondition = titleFilter ? entry.name.toUpperCase().includes(titleFilter.toUpperCase()) : false;
		let tagCondition = false;

		if (tagFilter){
			for (let tagF of tagFilter){
				for (let tagDB of entry.tags){
					if (tagF.toUpperCase() == TAGS[tagDB].name.toUpperCase())
						tagCondition = true;
				}
			}
		}

		return tagCondition || titleCondition;
	});

	render();
}