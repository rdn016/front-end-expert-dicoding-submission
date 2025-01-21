(()=>{"use strict";var n,A,r,e={249:(n,A,r)=>{r.d(A,{A:()=>C});var e=r(354),t=r.n(e),i=r(314),o=r.n(i),a=r(417),l=r.n(a),d=new URL(r(184),r.b),E=new URL(r(340),r.b),s=o()(t()),p=l()(d),c=l()(E);s.push([n.id,`/* General Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Open Sans", sans-serif;\n  text-decoration: none;\n  list-style: none;\n  scroll-behavior: smooth;\n  font-display: optional;\n}\n\n#mainContent {\n  min-height: 400px;\n}\n\na,\nbutton,\nlabel #btn,\nlabel #cancel {\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/* Sidebar */\n.sidebar {\n  position: fixed;\n  left: -250px;\n  width: 250px;\n  height: 100%;\n  background-color: #ffffff;\n  transition: all 0.5s ease;\n  z-index: 100;\n  text-align: center;\n}\n\n.sidebar h1 {\n  font-size: 22px;\n  color: #fff;\n  justify-content: center;\n  line-height: 70px;\n}\n\n.sidebar #side {\n  height: 100%;\n  margin-top: 5rem;\n  width: 100%;\n  line-height: 65px;\n  color: black;\n  font-size: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  transition: 0.4s;\n}\n\n.sidebar #side li {\n  position: relative;\n  font-size: 20px;\n  padding: 10px 0;\n}\n\n.sidebar #side li a {\n  color: black;\n  display: block;\n}\n\n.sidebar #side li a::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 1.5px;\n  transform: translateX(-50%);\n  background-color: #000000;\n  transition: width 0.3s ease;\n}\n\n.sidebar #side li:hover a::after {\n  width: 5rem;\n}\n\n#check {\n  display: none;\n}\n\nlabel #btn,\nlabel #cancel {\n  position: fixed;\n  cursor: pointer;\n  z-index: 110;\n}\n\nlabel #btn {\n  left: 25px;\n  top: 0.7rem;\n  font-size: 30px;\n  color: black;\n  padding: 5px 10px;\n  transition: all 0.5s;\n}\n\nlabel #cancel {\n  left: -195px;\n  top: 17px;\n  font-size: 30px;\n  color: #000000;\n  padding: 4px 9px;\n  transition: all 0.5s ease;\n}\n\n#check:checked ~ .sidebar {\n  left: 0;\n}\n\n#check:checked ~ label #btn {\n  left: 250px;\n  opacity: 0;\n  pointer-events: none;\n}\n\n#check:checked ~ label #cancel {\n  left: 195px;\n}\n\n#btn {\n  display: none;\n}\n\n#judul {\n  font-weight: bolder;\n}\n\n/* Responsive Sidebar */\n@media (max-width: 575px) {\n  #check:checked ~ .sidebar {\n    left: 0;\n  }\n\n  #check:checked ~ label #btn {\n    left: 250px;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  #check:checked ~ label #cancel {\n    left: 195px;\n  }\n\n  #navbar li {\n    display: none;\n  }\n\n  #nav-btn {\n    display: none;\n  }\n\n  nav #judul {\n    position: absolute;\n    right: 10%;\n    font-size: 18px;\n  }\n\n  label #btn,\n  label #cancel {\n    display: block;\n  }\n\n  .contact-header,\n  .judul {\n    font-size: 13px;\n  }\n\n  .sidebar #side li a {\n    height: 44px;\n  }\n}\n\n/* Header and Navbar */\nnav ul li {\n  list-style: none;\n  margin: 5px 20px 0 20px;\n  position: relative;\n}\n\n#navbar {\n  display: flex;\n}\n\nheader {\n  width: 100%;\n  position: fixed;\n  background-color: white;\n  z-index: 99;\n}\n\nnav {\n  top: 0;\n  right: 0;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.5s ease;\n  display: flex;\n  margin: auto;\n  width: 90%;\n  height: 55px;\n  padding-left: 18px;\n}\n\nnav ul li::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 1.5px;\n  background: black;\n  transition: all 0.3s;\n  width: 0;\n}\n\nnav ul li:hover::after {\n  width: 100%;\n}\n\nnav ul li a {\n  color: var(--header);\n  display: block;\n  line-height: 44px;\n}\n\nspan {\n  color: #fa0;\n}\n\n/* Landing Page */\n.moto {\n  padding-top: 20%;\n  color: white;\n  font-size: 20px;\n}\n\n.moto-container {\n  width: 80%;\n  margin: auto;\n}\n\n.hero {\n  width: 100%;\n  height: 75vh;\n  padding-top: 60px;\n  position: relative;\n  background: url(${p}) no-repeat;\n  background-size: cover;\n}\n\n@media screen and (min-width: 1200px) {\n  .hero {\n    min-width: 1000px;\n  }\n}\n\n#moto {\n  background-color: rgba(255, 170, 0, 0.8);\n  color: white;\n  padding: 0 30px 0 3px;\n}\n\n@media screen and (max-width: 1025px) {\n  .moto {\n    font-size: 15px;\n    padding-top: 5rem;\n  }\n\n  .hero {\n    height: 40vh;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .moto {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .hero {\n    background: url(${c}) no-repeat;\n    background-size: cover;\n  }\n}\n\n/* List */\n#list {\n  color: #fa0;\n  font-size: 25px;\n  padding-top: 5rem;\n  margin-left: 6rem;\n}\n\n.list {\n  width: 85%;\n  margin: auto;\n}\n\n.list-cards {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 240px));\n  place-content: center;\n}\n\n.card {\n  width: 240px;\n  padding: 20px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.162);\n  height: 270px;\n}\n\n.card-head {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.card-title a {\n  font-size: 18px;\n  color: #34364a;\n  font-weight: 700;\n  display: block;\n}\n\n.card-head p {\n  font-weight: 600;\n  color: rgb(253, 198, 88);\n}\n\n.card img {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 6px;\n}\n\n@media (max-width: 500px) {\n  .card {\n    margin-top: 10px;\n  }\n\n  #list {\n    margin-left: auto;\n  }\n}\n\n/* Skeleton UI */\n.skeleton {\n  width: 240px;\n  padding: 20px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.162);\n  height: 270px;\n}\n\n.skeleton-head {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.skeleton-line {\n  width: 35%;\n  height: 20px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  animation: shimmer 1.5s infinite linear;\n  margin-bottom: 8px;\n}\n\n.skeleton-line.short {\n  width: 20%;\n}\n\n.skeleton-image {\n  width: 200px;\n  height: 150px;\n  margin-bottom: 6px;\n  animation: shimmer 1.5s infinite linear;\n}\n\n@media (max-width: 500px) {\n  .skeleton {\n    margin-top: 10px;\n  }\n\n  #list {\n    margin-left: auto;\n  }\n}\n\n/* Detail and Comment Skeleton */\n.skeleton-detail-line {\n  width: 100%;\n  height: 24px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  animation: shimmer 1.5s infinite linear;\n  margin-bottom: 8px;\n}\n\n.skeleton-detail-title {\n  width: 45%;\n  height: 28px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  animation: shimmer 1.5s infinite linear;\n  margin-bottom: 8px;\n}\n\n.skeleton-detail-line-short {\n  width: 25%;\n}\n\n.skeleton-detail-image {\n  width: 100%;\n  height: 150px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  animation: shimmer 1.5s infinite linear;\n  margin-bottom: 6px;\n}\n\n.skeleton-detail-info,\n.skeleton-detail-description {\n  margin-top: 20px;\n}\n\n.skeleton-detail-comments {\n  margin-top: 20px;\n}\n\n.skeleton-detail-comments-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.skeleton-detail-comment-card {\n  background: white;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n}\n\n/* Shimmer Effect */\n@keyframes shimmer {\n  0% {\n    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);\n    background-size: 200% 100%;\n    background-position: -100% 0;\n  }\n  100% {\n    background-position: 100% 0;\n  }\n}\n\n/* Footer */\n:root {\n  --header: #34364a;\n  --child: #b0b0b0;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-around;\n  max-width: 80vw;\n  margin: auto;\n  min-height: 140px;\n}\n\n.contact {\n  padding-right: 0;\n  width: 32%;\n}\n\n.about {\n  width: 30%;\n}\n\n.about-desc,\n.contact-list li,\n.footer p {\n  color: var(--child);\n}\n\n.about-desc,\n.contact-list li {\n  margin: 10px 0;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: end;\n}\n\n@media screen and (max-width: 1024px) {\n  .about-desc,\n  .service-list li a,\n  .contact-list li,\n  .footer p {\n    font-size: 13px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  footer {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .about,\n  .contact {\n    width: 100%;\n    text-align: center;\n  }\n}\n\n/* Submission */\n#skip-button {\n  position: absolute;\n  top: -50px;\n  font-size: 22px;\n  left: 0;\n  background-color: red;\n  color: white;\n  padding: 5px;\n  z-index: 99999;\n}\n\n#skip-button:focus {\n  top: 0;\n}\n\n/* Detail Page */\n.detail {\n  min-width: 65%;\n  padding: 70px 20px 20px 20px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto auto;\n  gap: 20px;\n}\n\n.detail-main h1 {\n  font-size: 24px;\n  margin-bottom: 7px;\n  color: #fa0;\n}\n\n.detail span {\n  margin-left: 5px;\n}\n\n.detail img {\n  width: 100%;\n}\n\n.restaurant-information h3 {\n  margin-bottom: 2px;\n}\n\n.restaurant-information p {\n  margin-bottom: 5px;\n}\n\n.restaurant-information-menu {\n  margin-top: 16px;\n}\n\n.restaurant-information-menu-header {\n  color: #fa0;\n  font-size: 20px;\n}\n\n.restaurant-information-menu h3 {\n  margin: 2px 0;\n}\n\n.restaurant-description p {\n  font-size: 14px;\n}\n\n.restaurant-description {\n  height: fit-content;\n}\n\n/* Comment Section */\n:root {\n  --text-color: #333333;\n  --accent-color: #ffd966;\n  --border-color: #f0e1c2;\n}\n\n.comment-section {\n  padding: 16px;\n}\n\n.section-title {\n  font-size: 24px;\n  margin-bottom: 16px;\n  color: var(--accent-color);\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.comment-card {\n  background: white;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n}\n\n.comment-card .name {\n  font-weight: bold;\n  color: var(--text-color);\n}\n\n.comment-card .date {\n  font-size: 14px;\n  color: #666666;\n  margin-bottom: 8px;\n}\n\n.comment-card .review {\n  font-size: 16px;\n  line-height: 1.4;\n}\n\n@media screen and (min-width: 610px) {\n  .detail {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 0.3fr;\n    width: 70%;\n    padding-top: 150px;\n  }\n\n  .detail-main {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n  }\n\n  .restaurant-information {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n  }\n\n  .restaurant-description,\n  .skeleton-detail-description {\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n  }\n\n  .comment-section {\n    grid-column: 1 / 3;\n    grid-row: 3 / 3;\n  }\n\n  .skeleton-detail-comments {\n    grid-column: 1 / 3;\n    grid-row: 3 / 3;\n  }\n\n  .detail img {\n    max-width: 400px;\n  }\n\n  .detail-main h1 {\n    font-size: 27px;\n  }\n\n  .restaurant-information-menu-header {\n    font-size: 22px;\n  }\n}\n\n/* Like Button */\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffd966;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n/* empty like idb */\n#list-cards.no-liked {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 125px;\n}\n#no-liked-restaurants {\n  position: relative;\n  font-size: 18px;\n}\n`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['/* General Styles */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Open Sans", sans-serif;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  scroll-behavior: smooth;\r\n  font-display: optional;\r\n}\r\n\r\n#mainContent {\r\n  min-height: 400px;\r\n}\r\n\r\na,\r\nbutton,\r\nlabel #btn,\r\nlabel #cancel {\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  position: fixed;\r\n  left: -250px;\r\n  width: 250px;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  transition: all 0.5s ease;\r\n  z-index: 100;\r\n  text-align: center;\r\n}\r\n\r\n.sidebar h1 {\r\n  font-size: 22px;\r\n  color: #fff;\r\n  justify-content: center;\r\n  line-height: 70px;\r\n}\r\n\r\n.sidebar #side {\r\n  height: 100%;\r\n  margin-top: 5rem;\r\n  width: 100%;\r\n  line-height: 65px;\r\n  color: black;\r\n  font-size: 20px;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n  transition: 0.4s;\r\n}\r\n\r\n.sidebar #side li {\r\n  position: relative;\r\n  font-size: 20px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.sidebar #side li a {\r\n  color: black;\r\n  display: block;\r\n}\r\n\r\n.sidebar #side li a::after {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 1.5px;\r\n  transform: translateX(-50%);\r\n  background-color: #000000;\r\n  transition: width 0.3s ease;\r\n}\r\n\r\n.sidebar #side li:hover a::after {\r\n  width: 5rem;\r\n}\r\n\r\n#check {\r\n  display: none;\r\n}\r\n\r\nlabel #btn,\r\nlabel #cancel {\r\n  position: fixed;\r\n  cursor: pointer;\r\n  z-index: 110;\r\n}\r\n\r\nlabel #btn {\r\n  left: 25px;\r\n  top: 0.7rem;\r\n  font-size: 30px;\r\n  color: black;\r\n  padding: 5px 10px;\r\n  transition: all 0.5s;\r\n}\r\n\r\nlabel #cancel {\r\n  left: -195px;\r\n  top: 17px;\r\n  font-size: 30px;\r\n  color: #000000;\r\n  padding: 4px 9px;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n#check:checked ~ .sidebar {\r\n  left: 0;\r\n}\r\n\r\n#check:checked ~ label #btn {\r\n  left: 250px;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n#check:checked ~ label #cancel {\r\n  left: 195px;\r\n}\r\n\r\n#btn {\r\n  display: none;\r\n}\r\n\r\n#judul {\r\n  font-weight: bolder;\r\n}\r\n\r\n/* Responsive Sidebar */\r\n@media (max-width: 575px) {\r\n  #check:checked ~ .sidebar {\r\n    left: 0;\r\n  }\r\n\r\n  #check:checked ~ label #btn {\r\n    left: 250px;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n  }\r\n\r\n  #check:checked ~ label #cancel {\r\n    left: 195px;\r\n  }\r\n\r\n  #navbar li {\r\n    display: none;\r\n  }\r\n\r\n  #nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  nav #judul {\r\n    position: absolute;\r\n    right: 10%;\r\n    font-size: 18px;\r\n  }\r\n\r\n  label #btn,\r\n  label #cancel {\r\n    display: block;\r\n  }\r\n\r\n  .contact-header,\r\n  .judul {\r\n    font-size: 13px;\r\n  }\r\n\r\n  .sidebar #side li a {\r\n    height: 44px;\r\n  }\r\n}\r\n\r\n/* Header and Navbar */\r\nnav ul li {\r\n  list-style: none;\r\n  margin: 5px 20px 0 20px;\r\n  position: relative;\r\n}\r\n\r\n#navbar {\r\n  display: flex;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  position: fixed;\r\n  background-color: white;\r\n  z-index: 99;\r\n}\r\n\r\nnav {\r\n  top: 0;\r\n  right: 0;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  transition: all 0.5s ease;\r\n  display: flex;\r\n  margin: auto;\r\n  width: 90%;\r\n  height: 55px;\r\n  padding-left: 18px;\r\n}\r\n\r\nnav ul li::after {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 1.5px;\r\n  background: black;\r\n  transition: all 0.3s;\r\n  width: 0;\r\n}\r\n\r\nnav ul li:hover::after {\r\n  width: 100%;\r\n}\r\n\r\nnav ul li a {\r\n  color: var(--header);\r\n  display: block;\r\n  line-height: 44px;\r\n}\r\n\r\nspan {\r\n  color: #fa0;\r\n}\r\n\r\n/* Landing Page */\r\n.moto {\r\n  padding-top: 20%;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n.moto-container {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.hero {\r\n  width: 100%;\r\n  height: 75vh;\r\n  padding-top: 60px;\r\n  position: relative;\r\n  background: url(../public/hero/hero-image-large.jpg) no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n}\r\n\r\n#moto {\r\n  background-color: rgba(255, 170, 0, 0.8);\r\n  color: white;\r\n  padding: 0 30px 0 3px;\r\n}\r\n\r\n@media screen and (max-width: 1025px) {\r\n  .moto {\r\n    font-size: 15px;\r\n    padding-top: 5rem;\r\n  }\r\n\r\n  .hero {\r\n    height: 40vh;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .moto {\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 780px) {\r\n  .hero {\r\n    background: url(../public/hero/hero-image-small.jpg) no-repeat;\r\n    background-size: cover;\r\n  }\r\n}\r\n\r\n/* List */\r\n#list {\r\n  color: #fa0;\r\n  font-size: 25px;\r\n  padding-top: 5rem;\r\n  margin-left: 6rem;\r\n}\r\n\r\n.list {\r\n  width: 85%;\r\n  margin: auto;\r\n}\r\n\r\n.list-cards {\r\n  display: grid;\r\n  gap: 16px;\r\n  grid-template-columns: repeat(auto-fill, minmax(150px, 240px));\r\n  place-content: center;\r\n}\r\n\r\n.card {\r\n  width: 240px;\r\n  padding: 20px;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.162);\r\n  height: 270px;\r\n}\r\n\r\n.card-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.card-title a {\r\n  font-size: 18px;\r\n  color: #34364a;\r\n  font-weight: 700;\r\n  display: block;\r\n}\r\n\r\n.card-head p {\r\n  font-weight: 600;\r\n  color: rgb(253, 198, 88);\r\n}\r\n\r\n.card img {\r\n  width: 200px;\r\n  height: 150px;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .card {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  #list {\r\n    margin-left: auto;\r\n  }\r\n}\r\n\r\n/* Skeleton UI */\r\n.skeleton {\r\n  width: 240px;\r\n  padding: 20px;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.162);\r\n  height: 270px;\r\n}\r\n\r\n.skeleton-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.skeleton-line {\r\n  width: 35%;\r\n  height: 20px;\r\n  background: #e0e0e0;\r\n  border-radius: 4px;\r\n  animation: shimmer 1.5s infinite linear;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.skeleton-line.short {\r\n  width: 20%;\r\n}\r\n\r\n.skeleton-image {\r\n  width: 200px;\r\n  height: 150px;\r\n  margin-bottom: 6px;\r\n  animation: shimmer 1.5s infinite linear;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .skeleton {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  #list {\r\n    margin-left: auto;\r\n  }\r\n}\r\n\r\n/* Detail and Comment Skeleton */\r\n.skeleton-detail-line {\r\n  width: 100%;\r\n  height: 24px;\r\n  background: #e0e0e0;\r\n  border-radius: 4px;\r\n  animation: shimmer 1.5s infinite linear;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.skeleton-detail-title {\r\n  width: 45%;\r\n  height: 28px;\r\n  background: #e0e0e0;\r\n  border-radius: 4px;\r\n  animation: shimmer 1.5s infinite linear;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.skeleton-detail-line-short {\r\n  width: 25%;\r\n}\r\n\r\n.skeleton-detail-image {\r\n  width: 100%;\r\n  height: 150px;\r\n  background: #e0e0e0;\r\n  border-radius: 4px;\r\n  animation: shimmer 1.5s infinite linear;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.skeleton-detail-info,\r\n.skeleton-detail-description {\r\n  margin-top: 20px;\r\n}\r\n\r\n.skeleton-detail-comments {\r\n  margin-top: 20px;\r\n}\r\n\r\n.skeleton-detail-comments-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.skeleton-detail-comment-card {\r\n  background: white;\r\n  padding: 16px;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n/* Shimmer Effect */\r\n@keyframes shimmer {\r\n  0% {\r\n    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);\r\n    background-size: 200% 100%;\r\n    background-position: -100% 0;\r\n  }\r\n  100% {\r\n    background-position: 100% 0;\r\n  }\r\n}\r\n\r\n/* Footer */\r\n:root {\r\n  --header: #34364a;\r\n  --child: #b0b0b0;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  max-width: 80vw;\r\n  margin: auto;\r\n  min-height: 140px;\r\n}\r\n\r\n.contact {\r\n  padding-right: 0;\r\n  width: 32%;\r\n}\r\n\r\n.about {\r\n  width: 30%;\r\n}\r\n\r\n.about-desc,\r\n.contact-list li,\r\n.footer p {\r\n  color: var(--child);\r\n}\r\n\r\n.about-desc,\r\n.contact-list li {\r\n  margin: 10px 0;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: end;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .about-desc,\r\n  .service-list li a,\r\n  .contact-list li,\r\n  .footer p {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  footer {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .about,\r\n  .contact {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/* Submission */\r\n#skip-button {\r\n  position: absolute;\r\n  top: -50px;\r\n  font-size: 22px;\r\n  left: 0;\r\n  background-color: red;\r\n  color: white;\r\n  padding: 5px;\r\n  z-index: 99999;\r\n}\r\n\r\n#skip-button:focus {\r\n  top: 0;\r\n}\r\n\r\n/* Detail Page */\r\n.detail {\r\n  min-width: 65%;\r\n  padding: 70px 20px 20px 20px;\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto auto auto;\r\n  gap: 20px;\r\n}\r\n\r\n.detail-main h1 {\r\n  font-size: 24px;\r\n  margin-bottom: 7px;\r\n  color: #fa0;\r\n}\r\n\r\n.detail span {\r\n  margin-left: 5px;\r\n}\r\n\r\n.detail img {\r\n  width: 100%;\r\n}\r\n\r\n.restaurant-information h3 {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.restaurant-information p {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.restaurant-information-menu {\r\n  margin-top: 16px;\r\n}\r\n\r\n.restaurant-information-menu-header {\r\n  color: #fa0;\r\n  font-size: 20px;\r\n}\r\n\r\n.restaurant-information-menu h3 {\r\n  margin: 2px 0;\r\n}\r\n\r\n.restaurant-description p {\r\n  font-size: 14px;\r\n}\r\n\r\n.restaurant-description {\r\n  height: fit-content;\r\n}\r\n\r\n/* Comment Section */\r\n:root {\r\n  --text-color: #333333;\r\n  --accent-color: #ffd966;\r\n  --border-color: #f0e1c2;\r\n}\r\n\r\n.comment-section {\r\n  padding: 16px;\r\n}\r\n\r\n.section-title {\r\n  font-size: 24px;\r\n  margin-bottom: 16px;\r\n  color: var(--accent-color);\r\n}\r\n\r\n.comments-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.comment-card {\r\n  background: white;\r\n  padding: 16px;\r\n  border: 1px solid var(--border-color);\r\n  border-radius: 8px;\r\n}\r\n\r\n.comment-card .name {\r\n  font-weight: bold;\r\n  color: var(--text-color);\r\n}\r\n\r\n.comment-card .date {\r\n  font-size: 14px;\r\n  color: #666666;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.comment-card .review {\r\n  font-size: 16px;\r\n  line-height: 1.4;\r\n}\r\n\r\n@media screen and (min-width: 610px) {\r\n  .detail {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 0.3fr;\r\n    width: 70%;\r\n    padding-top: 150px;\r\n  }\r\n\r\n  .detail-main {\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .restaurant-information {\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .restaurant-description,\r\n  .skeleton-detail-description {\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n  }\r\n\r\n  .comment-section {\r\n    grid-column: 1 / 3;\r\n    grid-row: 3 / 3;\r\n  }\r\n\r\n  .skeleton-detail-comments {\r\n    grid-column: 1 / 3;\r\n    grid-row: 3 / 3;\r\n  }\r\n\r\n  .detail img {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .detail-main h1 {\r\n    font-size: 27px;\r\n  }\r\n\r\n  .restaurant-information-menu-header {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n/* Like Button */\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #ffd966;\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n/* empty like idb */\r\n#list-cards.no-liked {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 125px;\r\n}\r\n#no-liked-restaurants {\r\n  position: relative;\r\n  font-size: 18px;\r\n}\r\n'],sourceRoot:""}]);const C=s},810:(n,A,r)=>{var e=r(72),t=r.n(e),i=r(825),o=r.n(i),a=r(659),l=r.n(a),d=r(56),E=r.n(d),s=r(540),p=r.n(s),c=r(113),C=r.n(c),B=r(249),m={};m.styleTagTransform=C(),m.setAttributes=E(),m.insert=l().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),t()(B.A,m),B.A&&B.A.locals&&B.A.locals}},t={};function i(n){var A=t[n];if(void 0!==A)return A.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,n=[],i.O=(A,r,e,t)=>{if(!r){var o=1/0;for(E=0;E<n.length;E++){for(var[r,e,t]=n[E],a=!0,l=0;l<r.length;l++)(!1&t||o>=t)&&Object.keys(i.O).every((n=>i.O[n](r[l])))?r.splice(l--,1):(a=!1,t<o&&(o=t));if(a){n.splice(E--,1);var d=e();void 0!==d&&(A=d)}}return A}t=t||0;for(var E=n.length;E>0&&n[E-1][2]>t;E--)n[E]=n[E-1];n[E]=[r,e,t]},i.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return i.d(A,{a:A}),A},i.d=(n,A)=>{for(var r in A)i.o(A,r)&&!i.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},i.f={},i.e=n=>Promise.all(Object.keys(i.f).reduce(((A,r)=>(i.f[r](n,A),A)),[])),i.u=n=>n+".3bfa328cd1bfd44b4112.bundle.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),A={},r="owanrestaurant:",i.l=(n,e,t,o)=>{if(A[n])A[n].push(e);else{var a,l;if(void 0!==t)for(var d=document.getElementsByTagName("script"),E=0;E<d.length;E++){var s=d[E];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==r+t){a=s;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",r+t),a.src=n),A[n]=[e];var p=(r,e)=>{a.onerror=a.onload=null,clearTimeout(c);var t=A[n];if(delete A[n],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((n=>n(e))),r)return r(e)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var A=i.g.document;if(!n&&A&&(A.currentScript&&"SCRIPT"===A.currentScript.tagName.toUpperCase()&&(n=A.currentScript.src),!n)){var r=A.getElementsByTagName("script");if(r.length)for(var e=r.length-1;e>-1&&(!n||!/^http(s?):/.test(n));)n=r[e--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),(()=>{i.b=document.baseURI||self.location.href;var n={446:0};i.f.j=(A,r)=>{var e=i.o(n,A)?n[A]:void 0;if(0!==e)if(e)r.push(e[2]);else{var t=new Promise(((r,t)=>e=n[A]=[r,t]));r.push(e[2]=t);var o=i.p+i.u(A),a=new Error;i.l(o,(r=>{if(i.o(n,A)&&(0!==(e=n[A])&&(n[A]=void 0),e)){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+A+" failed.\n("+t+": "+o+")",a.name="ChunkLoadError",a.type=t,a.request=o,e[1](a)}}),"chunk-"+A,A)}},i.O.j=A=>0===n[A];var A=(A,r)=>{var e,t,[o,a,l]=r,d=0;if(o.some((A=>0!==n[A]))){for(e in a)i.o(a,e)&&(i.m[e]=a[e]);if(l)var E=l(i)}for(A&&A(r);d<o.length;d++)t=o[d],i.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return i.O(E)},r=self.webpackChunkowanrestaurant=self.webpackChunkowanrestaurant||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),i.nc=void 0;var o=i.O(void 0,[986,210,884,16,794],(()=>i(401)));o=i.O(o)})();
//# sourceMappingURL=app~04e4ec69.d93f2b212c687f80b34c.bundle.js.map