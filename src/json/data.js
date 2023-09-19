let TAGS = [
	{ name: "HTML", icon: "AAAA", color: "#f06529" },
	{ name: "JavaScript", icon: "BBBB", color: "#feca3f" },
	{ name: "CSS", icon: "CCCC", color: "#0074be" },
];

let ENTRIES = [
	{
		name: "TESTE 1",
		tags: [0, 1, 2],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa odio, ornare ut felis et, imperdiet posuere nisi. Donec malesuada aliquet bibendum.",
		path: "src/entries/test1.html",
	},
	{
		name: "TESTE 2",
		tags: [0, 1],
		description:
			"Lorem ipsum dolor sit amet Etiam tempor efficitur ornare. Donec non pretium magna, in aliquet sapien. Sed eleifend sapien quis leo ultrices fermentum.",
		path: "src/entries/test2.html",
	},
];

ENTRIES = [].concat(ENTRIES, ENTRIES);
ENTRIES = [].concat(ENTRIES, ENTRIES);
