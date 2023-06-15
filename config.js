let titleDiv = "<div class='full_bleed_container'> <img src='images/P1000060.jpg'  alt='Glacier National Park' style='width:100%'><div class='centered2'><h2 class='content_text'><i>A Celebration and Archive of</i></h2><br><h1 class='content__title'>San Pablo Avenue</h1></div></div>";

let bylineDiv = "<br><br><br><div class='textblock'><p class='single-metadata-single-topic'> <span style='color: #5a6b3e'> <strong> " +
    " By William Fei</strong></span></p>" + "<p class='topic single-topic'><time class='datetime'>May. 9, 2023</time></div></div>";

let descriptionDiv =
"<div class='textblock'><p data-paragraph='main'><br><br>San Pablo Avenue is an artery of the East Bay, a historic thoroughfare stretching 23 miles through small towns, bustling cities, and everything in between. Moreover, it serves as a living archive of the region's cultural richness, uniting the earliest Mexican miners who gave the street its name with Black, Middle Eastern, Chinese, and countless other communities that continue to shape its character today. </p></div>" + 

"<div class='textblock'><p data-paragraph='main'>Traversing San Pablo Avenue, my goal was not to create a complete documentation of the street. Rather, I set out to capture moments of resilience, beauty, and change in the everyday. From multicultural markets to murals to portraits of people who've left an impact on me forever, this journey was undoubtedly extraordinary — yet still ordinary enough that I believe anyone may have similar encounters if they make the same trip. </p></div>" + 

"<div class='textblock'><p data-paragraph='main'>Through my lens, I hope to provide a glimpse into what makes this street so special. This is my archive and celebration, my tribute to the rich history and ever-evolving future of San Pablo Avenue.<br><br><br><br><br></p></div>";


// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 8;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;
+
'<p class="right-align"><i>Respectully,<br>William Fei</p>'

let text2 =
//   "<h3>PrairieD</h3>" +
 "<p> word <span style='background-color:rgb(237, 195, 145, 0.8)'>&#word&#8220</span> word.</p>" 
  + 
 "<p> word in quotes&#8220 and <span style='background-color:rgb(229, 211, 136, 0.8)'>&#8220word&#8220</span> in <span style='background-color:rgb(206, 154, 142, 0.8)'>&#8220quotes&#8220</span> word.</p>";
 
// ...If so, what zoom, pitch, and bearing should be used to follow?
//var followZoomLevel = 14;
//var followBearing = 29;
//var followPitch = 0;
// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1Ijoid2lsbGlhbWZlaSIsImEiOiJjbGdmcDhjazcwM3JjM2dreG82YXJzano5In0.c8jDFYa3CQCg7ROPwmeHYg',
    showMarkers: false,
    theme: 'light',
    title: titleDiv,
    byline: bylineDiv,
    description: descriptionDiv,
    chapters: [
        {
            id: 'slide-0',
            alignment: 'left',
            title: 'Oakland',
            image: './images/P1000071.jpg',
            description: "<i>World Famous Hotboys Chicken, 1601 San Pablo Ave, Oakland, CA 94612</i><br><br>Our route begins in Oakland where we are greeted by a vibrant display of street art, murals, and graffiti. This city’s urban landscape is a canvas – it’s clear the community takes great pride in artistic expression. Walking through, we see a kaleidoscope of vibrant colors and images that celebrate the city's rich culture and history while resisting the ongoing discrimination and disinvestment.",
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            alignment: 'left',
            title: 'Emeryville',
            image: './images/P1020793.jpg',
            description: "<i>Andante Condominiums / Bank Club Cafe, 3900 San Pablo Ave, Emeryville, CA 94608</i><br><br>Two miles north is Emeryville, a small city with a big history. The landscape seems like just another Bay Area suburb, the landscape dominated by condos, high-rises, and big-box stores. These sort of anonymous, unsigned aesthetics contribute to a sense of disconnect between residents and the built environment, but revitalization efforts are underway to return culture and life into the area.",
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            alignment: 'left',
            title: 'Berkeley',
            image: './images/P1010559.jpg',
            description: "<i>Autometrics Auto Repair, 1340 San Pablo Ave, Berkeley, CA 94702</i><br><br>As we reach Berkeley, I immediately feel the University of California's presence. Gentrification is a pressing concern as student-oriented businesses transform the city's former Auto Row. Today, cranes overlook the city and new buildings are developing everywhere: artisanal coffee shops, yoga studios, boutiques. Despite the changes, Berkeley remains a place of creativity, activism, and progressive values, and many UC Berkeley students are involved in community efforts to preserve the place.",
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            alignment: 'left',
            title: 'Albany',
            image: './images/P1010639-2.jpg',
            description: "<i>UC Gill Tract Community Farm, 1050 San Pablo Ave, Albany, CA 94706</i><br><br>Albany is home to the Gill Tract Community Farm, a serene escape in the heart of our route. This 7.5-acre garden embodies what the East Bay's future could look like. It's the only green space on the entire avenue, and it feels like an oasis in a landscape dominated by concrete and pollution. Students come to learn about the history and ecology of the land, while volunteers come to grow fresh produce for the community. Gill Tract is a living classroom, a place of gathering, a beacon of hope.",
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            alignment: 'left',
            title: 'El Cerrito',
            image: './images/P1020670.jpg',
            description: '<i>Rialto Cinemas Cerrito, 10070 San Pablo Ave, El Cerrito, CA 94530</i>',
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            alignment: 'left',
            title: 'Richmond',
            image: './images/P1020177-2.jpg',
            description: "<i>San Pablo Ave., North of Barrett at I-80 Freeway Underpass</i><br><br>'The natural landscape of Richmond is the gas station.' Indeed, Richmond's commerce is shaped by several prominent oil companies that have established refineries in the region. These refineries pollute the city's neighborhoods, having severe consequences on the health of its inhabitants. Despite these challenges, Richmond is a place of resilience, where its citizens advocate for their right to a healthy environment, for a future where the urban environment of Richmond is not dominated by gas stations, but by spaces of community health and well-being.",
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'drive-slide-5',
            alignment: 'left',
            title: 'San Pablo',
            image: './images/P1020428.jpg',
            description: '<i>San Pablo Police Department, 13880 San Pablo Ave, San Pablo, CA 94806</i>',
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            alignment: 'left',
            title: 'Pinole',
            image: './images/P1020567.jpg',
            description: "<i>Corner of Antler's Tavern, 2284 San Pablo Ave, Pinole, CA 94564</i>",
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            alignment: 'left',
            title: 'Hercules',
            image: './images/P1020571.jpg',
            description: '<i>San Francisco Bay Trail</i>.',
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-8',
            alignment: 'left',
            title: 'Rodeo',
            image: './images/P1020626-2.jpg',
            description: '<i>Lone Tree Point, 413 San Pablo Ave, Rodeo, CA 94572</i><br><br>San Pablo Avenue ends in Rodeo, a small town located on the edge of the San Pablo Bay. Upon arrival, we were met with the hospitality of the local community as well as breathtaking views of the bay.',
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro',
            alignment: 'full',
            title: 'Our Story Begins At a Shut-Down Lounge',
            location: {
                center: [-122.32793, 37.86147],
                zoom: 11.67,
                pitch: 60.55,
                bearing: -34.41,
              },
        },
        {
            id: 'image-1',
            alignment: 'full',
            image: './images/P1010230-2.jpg',
            description: '<i>The Missouri Lounge, 2600 San Pablo Ave, Berkeley, CA 94702</i>.',
            location: {
                center: [-122.28930, 37.86001],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'story-1',
            alignment: 'full',
            description: text2,
            location: {
                center: [-122.28930, 37.86001],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-2',
            alignment: 'full',
            image: './images/P1010467-2.jpg',
            description: '<i>Middle East Market, 2054 San Pablo Ave, Berkeley, CA 94702</i>.',
            location: {
                center: [37.86829, -122.29199],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-3',
            alignment: 'full',
            image: './images/P1010557.jpg',
            description: '<i>Autometrics of Berkeley, 1340 San Pablo Ave, Berkeley, CA 94702</i>.',
            location: {
                center: [-122.29542, 37.87904],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-4',
            alignment: 'full',
            image: './images/P1000751.jpg',
            description: '<i>MacArthur Freeway Underpass, San Pablo Ave, Emeryville, CA 94608</i>.',
            location: {
                center: [-122.28930, 37.86001],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-5',
            alignment: 'full',
            image: './images/P1010208-2.jpg',
            description: '<i>Berkeley Chess School, 2622 San Pablo Ave, Berkeley, CA 94702</i>.',
            location: {
                center: [-122.28878, 37.85844],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-6',
            alignment: 'full',
            image: './images/P1010415.jpg',
            description: '<i>Solar Express Car Wash, 2434 San Pablo Ave, Berkeley, CA 94702</i>.',
            location: {
                center: [-122.28980, 37.86170],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-7',
            alignment: 'full',
            image: './images/P1020798-3.jpg',
            description: '<i>Andante Condominiums / Bank Club Cafe, 3900 San Pablo Ave, Emeryville, CA 94608</i>.',
            location: {
                center: [-122.27978, 37.83047],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-8',
            alignment: 'full',
            image: './images/P1000916.jpg',
            description: '<i>East Bay Food Not Bombs, 1201 55th St, Emeryville, CA 94608</i>.',
            location: {
                center: [-122.28630, 37.83776],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-9',
            alignment: 'full',
            image: './images/P1010462.jpg',
            description: '<i>States Coffee, 2101 San Pablo Ave, Berkeley, CA 94702</i>.',
            location: {
                center: [-122.29187, 37.86807],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-10',
            alignment: 'full',
            image: './images/P1030007.jpg',
            description: '<i>Youth Radio Media, 1701 Broadway, Oakland, CA 94612</i>.',
            location: {
                center: [-122.27021, 37.80698],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-11',
            alignment: 'full',
            image: './images/P1000265.jpg',
            description: '<i>Space Burger Building, 2150 Telegraph Ave, Oakland, CA 94612</i>.',
            location: {
                center: [-122.26926, 37.81088],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-12',
            alignment: 'full',
            image: './images/P1020079.jpg',
            description: '<i>San Pablo Ave., North of Barrett at I-80 Freeway Underpass</i>.',
            location: {
                center: [-122.32636, 37.93791],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-13',
            alignment: 'full',
            image: './images/P1020740.jpg',
            description: '<i>UC Gill Tract Community Farm, 1050 San Pablo Ave, Albany, CA 94706</i>.',
            location: {
                center: [-122.29779, 37.88639],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-14',
            alignment: 'full',
            image: './images/P1010691-3.jpg',
            description: '<i>UC Gill Tract Community Farm, 1050 San Pablo Ave, Albany, CA 94706</i>.',
            location: {
                center: [-122.29779, 37.88639],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-15',
            alignment: 'full',
            image: './images/sanpablobroadway.jpg',
            description: '<i>What San Pablo Used to Look Like</i>.',
            location: {
                center: [-122.27568, 37.82367],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-16',
            alignment: 'full',
            image: './images/P1020752.jpg',
            description: '<i>Hoover Elementary, 890 Brockhurst St, Oakland, CA 94608</i>.',
            location: {
                center: [-122.27568, 37.82367],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-17',
            alignment: 'full',
            image: './images/P1020714.jpg',
            description: '<i>Belmont Village Senior Living Albany, 1100 San Pablo Ave, Albany, CA 94706</i>.',
            location: {
                center: [-122.28930, 37.86001],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-18',
            alignment: 'full',
            image: './images/P1030071.jpg',
            description: '<i>El Cerrito Plaza Station Park and Ride, 6671 Fairmount Ave, El Cerrito, CA 94530</i>.',
            location: {
                center: [-122.29929, 37.90341],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-19',
            alignment: 'full',
            image: './images/IMG_1629.jpg',
            description: '<i>Berkeley Adult School, 1701 San Pablo Ave #1701, Berkeley, CA 94702</i>.',
            location: {
                center: [-122.29344, 37.87299],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-20',
            alignment: 'full',
            image: './images/P1030162.jpg',
            description: '<i>Albany Bulb, 1 Buchanan St, Albany, CA 94706</i>.',
            location: {
                center: [-122.30710, 37.88722],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        },
        {
            id: 'image-21',
            alignment: 'full',
            image: './images/P1020891.jpg',
            description: '<i>Nicholl Skatepark, 3220 Macdonald Ave, Richmond, CA 94804</i>.',
            location: {
                center: [-122.33951, 37.93463],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
              },
        }
    ]
}
;