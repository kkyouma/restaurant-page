const renderAbout = function () {
  const main = document.getElementById('main');

  main.innerHTML = '';

  const section = document.createElement('section');

  const aboutUsData = [
    {
        type: "image",
        src: "restaurant-team.jpg",
        alt: "Restaurant Team"
    },
    {
        type: "section",
        title: "Our Story",
        content: [
            " [Restaurant Name] was founded with a passion for creating exceptional dining experiences. Our journey began with a vision to blend culinary expertise, warm hospitality, and a welcoming ambiance.",
            " Over the years, we have evolved into a destination where food lovers gather to savor delicious meals prepared with the finest ingredients and crafted by our skilled chefs."
        ]
    },
    {
        type: "section",
        title: "Our Team",
        content: [
            " Meet our dedicated team of chefs, servers, and staff who work tirelessly to ensure every guest leaves with a smile. We believe in the power of teamwork and the joy of creating memorable moments for our patrons."
        ]
    }
];

aboutUsData.forEach(function (sectionData) {
    const section = document.createElement("section");

    if (sectionData.type === "image") {
        const imgElement = document.createElement("img");
        imgElement.src = sectionData.src;
        imgElement.alt = sectionData.alt;
        section.appendChild(imgElement);
    } else if (sectionData.type === "section") {
        const h2Element = document.createElement("h2");
        h2Element.textContent = sectionData.title;
        section.appendChild(h2Element);

        sectionData.content.forEach(paragraph => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            section.appendChild(p);
        });
    }

    main.appendChild(section);
  });
  return console.log("About page")
}
export default renderAbout