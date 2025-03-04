<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $article = Article::create([
            'title' => 'Find out where Lens is located',
            'location' => 'Lens - France',
            'content' => 
            '<h1>Lens - France</h1>
            <p>I recently had the chance to visit Lens, a small but fascinating city in northern France, and I have to say—it really surprised me! Known for its coal-mining past, Lens has reinvented itself as a cultural hub, blending history, art, and local charm.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed at Hôtel Louvre-Lens, a beautifully renovated former mining house that combines modern comfort with the city’s industrial heritage. If you\'re on a budget, there are plenty of affordable options, like B&B Hôtel Lens Musée du Louvre. Getting to Lens is easy—just over an hour by train from Paris. The city itself is compact, so walking is a great way to explore, but buses and taxis are available too.</p>
            <h2>Must-See Places</h2>
            <p>The highlight of my trip was the Louvre-Lens Museum. It’s a smaller, more intimate version of the Louvre in Paris, and I loved how the exhibits were displayed in an open, airy space. Another must-visit is the Canadian National Vimy Memorial, a deeply moving tribute to WWI soldiers. I also made a stop at Notre-Dame-de-Lorette, France’s largest war cemetery—standing there really put history into perspective. And for football fans, Stade Bollaert-Delelis is a must! The atmosphere on match days is incredible.</p>
            <h2>Food to Try</h2>
            <p>Food in Lens is hearty and delicious. I tried carbonnade flamande, a rich beef stew cooked with beer, and the famous welsh rarebit, which is basically melted cheese heaven! To finish, a slice of tarte au sucre (sugar tart) is a must.</p>
            <p>Lens may not be the most famous French city, but it has a unique charm, a rich history, and some truly unforgettable spots. Definitely worth a visit!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/src/images/Lens1.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'Ever wondered where Annecy is?',
            'location' => 'Annecy - France',
            'content' => 
            '<h1>Annecy - France</h1>
            <p>I recently had the chance to visit Annecy, and honestly, it felt like stepping into a postcard. Nestled in the French Alps, this charming lakeside town is often called the "Venice of the Alps" because of its beautiful canals, pastel-colored houses, and stunning mountain views.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed at Hôtel du Palais de l’Isle, a cozy boutique hotel right in the heart of the old town. If you’re looking for a more luxurious experience, Les Trésoms Lake & Spa Resort offers breathtaking views of Lake Annecy. The best way to get around? Walk! The town is super pedestrian-friendly, but you can also rent a bike or take a boat across the lake for a different perspective.</p>
            <h2>Must-See Places</h2>
            <p>Annecy’s Old Town (Vieille Ville) is magical—narrow cobbled streets, colorful buildings, and charming bridges over the canals. One of the most iconic sights is the Palais de l’Isle, a medieval castle in the middle of a canal that looks like something out of a fairytale. I also hiked up to the Château d’Annecy, which offers amazing views of the town and lake. Of course, Lake Annecy itself is the main attraction—the turquoise water is so clear, and you can swim, kayak, or just relax by the shore.</p>
            <h2>Food to Try</h2>
            <p>The food in Annecy is a dream, especially if you love cheese! I tried tartiflette, a baked dish with potatoes, reblochon cheese, bacon, and onions—pure comfort food. Another must-try is raclette, where melted cheese is scraped onto potatoes and charcuterie. For dessert, I couldn’t resist a savoyard blueberry tart—simple but delicious.</p>
            <p>Annecy completely stole my heart. Whether you\'re into history, nature, or just enjoying good food with a view, this place is absolutely worth a visit!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'The city you didn\'t know where to find',
            'location' => 'Toulouse - France',
            'content' => 
            '<h1>Toulouse - France</h1>
            <p>I recently visited <strong>Toulouse</strong>, also known as “La Ville Rose” (The Pink City) due to its beautiful terracotta brick buildings. Located in the southwest of France, this lively city offers a perfect blend of history, culture, and gastronomy.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed at <strong>Hôtel Albert 1er</strong>, a charming and centrally located hotel. For a more luxurious experience, <strong>La Cour des Consuls Hotel & Spa</strong> is a fantastic option. Toulouse has a well-connected public transport system with metro lines, buses, and trams, making it easy to explore. However, the best way to experience the historic center is on foot.</p>
            <h2>Must-See Places</h2>
            <p>The first place I visited was the <strong>Capitole de Toulouse</strong>, an iconic city hall and opera house with stunning architecture. The <strong>Basilique Saint-Sernin</strong>, one of the largest Romanesque churches in Europe, was another highlight—it’s truly breathtaking inside. If you’re into science, don’t miss <strong>Cité de l’Espace</strong>, an interactive space museum with real spacecraft and planetarium shows. For a relaxing stroll, the <strong>Garonne River banks</strong> and <strong>Jardin des Plantes</strong> offer beautiful scenery.</p>
            <h2>Food to Try</h2>
            <p>Toulouse is a food lover’s paradise. I had to try <strong>cassoulet</strong>, a rich and hearty dish made with white beans, duck confit, and sausage—comfort food at its best! Another regional specialty is <strong>foie gras</strong>, often served with toast and fig chutney. For dessert, I tasted <strong>Fénétra</strong>, a delicious tart made with almonds and apricots.</p>
            <p>Toulouse has an irresistible charm, mixing history, culture, and an easygoing lifestyle. Whether you’re exploring its vibrant streets or indulging in local cuisine, it’s a city that’s hard not to fall in love with!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);


        $article = Article::create([
            'title' => 'A hidden gem on North of Portugal but where is it?',
            'location' => 'Vila Nova de Gaia - Portugal',
            'content' => 
            '<h1>Vila Nova de Gaia - Portugal</h1>
            <p>I recently visited <strong>Vila Nova de Gaia</strong>, a beautiful city just across the Douro River from Porto, in northern Portugal. Known for its world-famous port wine cellars and stunning views of Porto’s skyline, Gaia offers a mix of tradition, history, and breathtaking scenery.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed at <strong>The Yeatman</strong>, a luxury wine hotel with spectacular views over the river. For a more budget-friendly stay, <strong>Rubens Hotels Royal Village</strong> is a great option, offering comfort and a central location. Getting around Gaia is easy—most attractions are within walking distance, but you can also take the metro, buses, or even a river taxi to explore the area.</p>
            <h2>Must-See Places</h2>
            <p>One of the top experiences in Gaia is visiting the <strong>Port Wine Cellars</strong>, such as <strong>Graham’s, Sandeman, and Taylor’s</strong>, where you can learn about the aging process and enjoy tastings. For a panoramic view of Porto, I took the <strong>Gaia Cable Car (Teleférico de Gaia)</strong>, which offers stunning sights over the Douro River. The <strong>Lavadores Beach</strong> is also worth a visit if you want a relaxing seaside escape. Another hidden gem is the <strong>Monastery of Serra do Pilar</strong>, a UNESCO-listed site with one of the best viewpoints in the region.</p>
            <h2>Food to Try</h2>
            <p>Gaia has incredible food, deeply connected to Porto’s culinary traditions. I couldn’t resist trying a <strong>Francesinha</strong>, a hearty sandwich filled with cured meats, covered in melted cheese, and topped with a rich beer-based sauce. Another must-try is <strong>Bacalhau à Brás</strong>, a delicious dish made with shredded codfish, eggs, and potatoes. To pair with a glass of port wine, <strong>Pastel de Nata</strong> (custard tart) is always a perfect choice.</p>
            <p>Vila Nova de Gaia is more than just a place for wine lovers—it’s a city full of culture, history, and unforgettable views. Whether you’re sipping a glass of port or watching the sunset over the Douro, it’s a destination that stays with you long after you leave!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'Guess where it is located?',
            'location' => 'Póvoa de Varzim - Portugal',
            'content' => '<h1>Póvoa de Varzim - Portugal</h1>
            <p>I recently visited <strong>Póvoa de Varzim</strong>, a charming coastal city in northern Portugal, known for its stunning beaches, rich history, and delicious seafood. Located just 30 minutes from Porto, this vibrant town is perfect for a relaxing getaway by the Atlantic Ocean.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed at <strong>Grande Hotel da Póvoa</strong>, a classic hotel right by the beach and casino. If you prefer something more modern, <strong>Axis Vermar Conference & Beach Hotel</strong> is a great choice with sea views and a pool. Getting around Póvoa is easy—the city is compact, so walking is the best way to explore. However, the <strong>Metro do Porto</strong> connects Póvoa to Porto, making day trips convenient.</p>
            <h2>Must-See Places</h2>
            <p>Póvoa de Varzim is famous for its <strong>beautiful beaches</strong>, such as <strong>Praia Redonda</strong> and <strong>Praia da Salgueira</strong>, perfect for sunbathing, surfing, or just enjoying the ocean breeze. One of my favorite spots was the <strong>Fort of São João Baptista</strong>, a 17th-century fortress that offers great views of the coast. The <strong>Casino da Póvoa</strong> is also a major attraction, especially for those looking for entertainment at night. For a cultural experience, the <strong>Ethnography and History Museum</strong> gives insight into the town’s maritime heritage.</p>
            <h2>Food to Try</h2>
            <p>Being a coastal town, seafood is the star of Póvoa’s cuisine. I had an amazing <strong>Arroz de Marisco</strong>, a rich seafood rice dish packed with shrimp, clams, and crab. Another must-try is <strong>Robalo grelhado (grilled sea bass)</strong>, which is incredibly fresh and flavorful. For dessert, I enjoyed <strong>Clarinhas de Fão</strong>, sweet pastries filled with pumpkin jam, which are a local favorite.</p>
            <p>Póvoa de Varzim has a special charm, with its mix of stunning beaches, cultural sites, and delicious food. Whether you\'re looking for relaxation or adventure, this city is definitely worth visiting!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);


        $article = Article::create([
            'title' => 'Uncovering its hystorical location',
            'location' => 'Sines - Portugal',
            'content' => 
            '<h1>Sines - Portugal</h1>
            <p>I recently visited <strong>Sines</strong>, a coastal gem in southern Portugal, known for its stunning beaches, maritime heritage, and connection to the famous explorer Vasco da Gama. Located in the Alentejo region, Sines offers a mix of history, nature, and authentic Portuguese charm.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed at <strong>Hotel Dom Vasco</strong>, a cozy and elegant hotel with a welcoming atmosphere. For a more budget-friendly option, <strong>Sinerama Hotel Apartamento</strong> provides comfortable rooms with great views. Sines is a small town, so walking is the best way to explore, but if you want to visit nearby beaches, having a car is a good idea.</p>
            <h2>Must-See Places</h2>
            <p>One of the highlights of Sines is the <strong>Castelo de Sines</strong>, a medieval castle that offers breathtaking views over the Atlantic and a small museum dedicated to Vasco da Gama, who was born here. The <strong>Port of Sines</strong>, one of Portugal’s most important harbors, gives the town a unique mix of industry and tradition. For nature lovers, the <strong>Southwest Alentejo and Vicentine Coast Natural Park</strong> is nearby, with stunning cliffs, hiking trails, and untouched beaches. Speaking of beaches, <strong>Praia de São Torpes</strong> is a must-visit, especially for surfers.</p>
            <h2>Food to Try</h2>
            <p>Sines is a paradise for seafood lovers! I tried <strong>Açorda de Marisco</strong>, a traditional bread-based seafood stew that was rich and full of flavor. Another specialty is <strong>Choco Frito (fried cuttlefish)</strong>, crispy on the outside and tender inside, usually served with a side of fries. To finish, <strong>Sericaia</strong>, a delicious Alentejo-style egg pudding with cinnamon, was the perfect sweet treat.</p>
            <p>Sines is a fantastic destination for anyone looking to experience authentic Portuguese coastal life, with its mix of history, stunning landscapes, and incredible food. Whether you\'re exploring the castle or relaxing by the sea, this town has something special to offer!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'A city waiting to be discovered, do you know where it is?',
            'location' => 'Łódź - Pologne',
            'content' => 
            '<h1>Łódź - Pologne</h1>
            <p>I recently visited <strong>Łódź</strong>, a city in central Poland that completely took me by surprise. Once an industrial hub, it has transformed into a vibrant, culturally rich destination. Historically, it grew around the textile industry in the 19th century and was known for its bustling factories. Today, the city boasts a fascinating mix of old architecture and modern art, reflecting its past while embracing the future.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>Accommodation in Łódź is quite affordable compared to other European cities. I stayed at a charming boutique hotel on <strong>Piotrkowska Street</strong>, the city’s main thoroughfare, which is lined with lovely cafes, restaurants, and shops. Whether you\'re looking for a budget-friendly hostel or a stylish, upscale hotel, there\'s something for everyone.</p>
            <p>Getting around the city is easy, with a well-connected public transport system including trams and buses. I found it convenient to use the trams to explore different parts of the city. Taxis and ride-sharing services like Uber are also readily available.</p>
            <h2>Must-See Places</h2>
            <p>There’s so much to explore here! I highly recommend visiting the <strong>Manufaktura</strong>, a former textile factory now transformed into a massive shopping and cultural center. Also, the <strong>Museum of Art</strong> in the former <strong>Księży Młyn</strong> factory is an absolute must-see for art lovers. The <strong>Piotrkowska Street</strong> is perfect for a leisurely walk, offering a glimpse into the city\'s history.</p>
            <h2>Food to Try</h2>
            <p>When it comes to food, I couldn’t get enough of the local Polish cuisine. I tried <strong>pierogi</strong> (dumplings), <strong>kielbasa</strong> (sausage), and <strong>bigos</strong> (hunter\'s stew), which were delicious and hearty, perfect for refueling after a day of exploring.</p>
            <p>If you’re visiting Poland, Łódź is definitely a city worth experiencing!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'Where in the world is Warsaw?',
            'location' => 'Warsaw - Pologne',
            'content' => 
            '<h1>Warsaw - Pologne</h1>
            <p>I recently spent some time in <strong>Warsaw</strong>, the capital of Poland, and I have to say it exceeded my expectations. The city has an incredible blend of history, modernity, and culture, making it a fascinating place to explore. Warsaw\'s story is remarkable—almost completely destroyed during World War II, the city has been meticulously rebuilt, and you can see this contrast between historical architecture and contemporary design.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed in a lovely hotel in the heart of the city, near the <strong>Royal Route</strong>, which made it easy to explore many of Warsaw\'s key attractions. There are plenty of accommodation options, from budget-friendly hostels to luxurious five-star hotels, so it suits all types of travelers.</p>
            <p>Getting around Warsaw was very convenient. The city has an efficient <strong>metro system</strong>, as well as buses and trams. I often used the metro to get around quickly, especially since some of the main attractions are spread out across the city.</p>
            <h2>Must-See Places</h2>
            <p>One of the must-see places is the <strong>Old Town (Stare Miasto)</strong>, which has been meticulously reconstructed after the war. The <strong>Royal Castle</strong> and the <strong>Warsaw Uprising Monument</strong> are both significant historical sites. The <strong>Wilanów Palace</strong>, also known as the "Polish Versailles," is another highlight. For something more modern, I recommend visiting the <strong>Warsaw Uprising Museum</strong> and the <strong>POLIN Museum of the History of Polish Jews</strong>—it was incredibly moving and informative.</p>
            <h2>Food to Try</h2>
            <p>Warsaw offers a mix of traditional Polish dishes and international cuisine. I tried <strong>pierogi</strong>, of course, along with delicious <strong>placki ziemniaczane</strong> (potato pancakes) and a hearty bowl of <strong>żurek</strong> (sour rye soup). The city’s cafes are also perfect for grabbing a coffee and watching the world go by.</p>
            <p>Warsaw truly has something for everyone—whether you\'re a history buff, a foodie, or someone who just enjoys strolling through beautiful streets. It’s a city that’s both historic and dynamic, and I’d highly recommend visiting!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'Ever heard of this place? Where is it.',
            'location' => 'Gdańsk - Pologne<',
            'content' => 
            '<h1>Gdańsk - Pologne</h1>
            <p>I had the pleasure of visiting <strong>Gdańsk</strong>, a stunning city on the Baltic Sea in northern Poland, and it quickly became one of my favorite places. Gdańsk is a city with deep historical significance, known for its role in World War II and its pivotal role in the Solidarity movement. The charming medieval architecture mixed with colorful buildings lining the <strong>Motława River</strong> made for a picturesque backdrop throughout my visit.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed in a cozy boutique hotel in the <strong>Old Town</strong>, just a short walk from the main attractions. Gdańsk offers a variety of accommodations, from charming guesthouses to more luxurious hotels, all within walking distance of the city\'s key spots.</p>
            <p>Getting around the city is easy, as it\'s quite walkable. I also used the local <strong>trams</strong> to explore areas a bit further from the Old Town, and I found the public transport system very convenient. Additionally, the city has a lovely atmosphere with lots of pedestrian-only areas, making it a joy to explore on foot.</p>
            <h2>Must-See Places</h2>
            <p>There is so much to see here! The <strong>Main Town (Główne Miasto)</strong> is a must-visit, especially the iconic <strong>Long Market</strong> and the beautiful <strong>Neptune Fountain</strong>. The <strong>Mariacka Street</strong> is another gem, lined with stunning old buildings and amber shops. The <strong>Museum of the Second World War</strong> is a deeply moving experience and a key part of understanding the city’s complex past. For a beautiful view of the city, I highly recommend a visit to <strong>St. Mary’s Church</strong>, where you can climb to the top of the tower for panoramic views.</p>
            <h2>Food to Try</h2>
            <p>When it comes to food, Gdańsk has a great selection of seafood. I indulged in fresh fish and, of course, tried the local specialty, a hearty bowl of <strong>żurek</strong>. There are also plenty of cozy cafes where you can enjoy a warm drink and relax after a day of sightseeing.</p>
            <p>Gdańsk is a perfect mix of history, culture, and natural beauty. It’s a place that offers a little bit of everything and has a welcoming, laid-back vibe. If you’re ever in Poland, make sure Gdańsk is on your list—it’s a hidden gem!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'The city and its secret location.',
            'location' => 'Dublin - Ireland',
            'content' => 
            '<h1>Dublin - Ireland</h1>
            <p>I recently had the chance to explore <strong>Dublin</strong>, the vibrant capital of Ireland, and it was such a fantastic experience! The city has a perfect blend of rich history, lively culture, and a welcoming atmosphere. Dublin may be modern in many ways, but it proudly holds onto its heritage, with historical landmarks scattered throughout the city.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed in a charming hotel just a short walk from <strong>Temple Bar</strong>, Dublin\'s famous cultural quarter. There are plenty of accommodation options in the city, from cozy guesthouses to chic boutique hotels and even luxurious five-star stays. No matter where you choose to stay, you\'ll find Dublin\'s warm hospitality shines through.</p>
            <p>Getting around Dublin was easy, with its extensive bus and tram network (<strong>Luas</strong>) and plenty of bike rental stations around the city. I loved walking, though, as Dublin is quite compact and pedestrian-friendly. Most of the major attractions are within walking distance, so I spent most of my time strolling through the lively streets.</p>
            <h2>Must-See Places</h2>
            <p>Dublin has so much to offer, especially for history lovers. I recommend visiting <strong>Dublin Castle</strong>, the beautiful <strong>St. Patrick’s Cathedral</strong>, and the iconic <strong>Trinity College Library</strong>, home to the ancient <strong>Book of Kells</strong>. The <strong>Guinness Storehouse</strong> is another must-see, where you can learn about the history of Ireland’s most famous beer and enjoy a pint at the <strong>Gravity Bar</strong> with a panoramic view of the city.</p>
            <h2>Food to Try</h2>
            <p>As for food, Dublin is a true delight for the senses. I had traditional Irish dishes like hearty stew, fresh seafood chowder, and, of course, fish and chips. The city also boasts a thriving food scene, with amazing cafés and pubs offering everything from artisanal pastries to mouthwatering Irish breakfasts.</p>
            <p>Dublin is an energetic, diverse city with something for everyone—whether you\'re into history, culture, or just enjoying a pint at a traditional pub. It’s a city full of stories, and I left already planning my next visit!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'Where’s the heart of Northern Ireland?',
            'location' => 'Belfast - Ireland',
            'content' => 
            '<h1><h1>Belfast - Ireland</h1>
            <p>I recently had the pleasure of visiting <strong>Belfast</strong>, the capital of Northern Ireland, and I was blown away by how much the city has to offer. Belfast has a fascinating history, once known for its shipbuilding industry (where the Titanic was famously built), and today, it’s a city that blends rich heritage with a vibrant, modern atmosphere.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed in a lovely hotel near the city center, making it easy to explore. Belfast has a great range of accommodations, from budget hostels to stylish boutique hotels, so you’ll find something that suits your taste and budget.</p>
            <p>Getting around the city was super easy. I mainly walked, as many of the major attractions are within walking distance, but the public transport system, including buses and the local train network, makes it convenient to travel to other parts of the city and beyond.</p>
            <h2>Must-See Places</h2>
            <p>There’s so much to see and do in Belfast! One of the highlights for me was the <strong>Titanic Belfast</strong>, an interactive museum located at the site where the Titanic was built. It’s a moving and informative experience, diving deep into the ship’s construction and tragic sinking. Another must-see is the <strong>Giant’s Causeway</strong>, which, though a bit outside the city, is an iconic natural wonder worth the trip. In the city itself, you can’t miss the <strong>Belfast murals</strong>, which tell the story of the city’s political and social history.</p>
            <h2>Food to Try</h2>
            <p>When it comes to food, Belfast offers a great variety of local and international options. I had a fantastic traditional <strong>Ulster fry</strong> (a hearty Northern Irish breakfast) and some freshly caught seafood. The city also has plenty of trendy cafes, pubs, and restaurants where you can try both local and global dishes.</p>
            <p><strong>Belfast</strong> is a city that has reinvented itself in recent years, offering a unique mix of history, culture, and contemporary life. It’s a fascinating place to visit, and I left with so much appreciation for its resilience and vibrant energy. If you’re ever in Northern Ireland, <strong>Belfast</strong> is a must!</p>
            </p>',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $article = Article::create([
            'title' => 'Have you ever wondered where it is? Let´s find out',
            'location' => 'Galway - Ireland',
            'content' => 
            '<h1>Galway - Ireland</h1>
            <p>I recently visited <strong>Galway</strong>, a lively and charming city on the west coast of Ireland, and it quickly became one of my favorite destinations. Known for its vibrant arts scene, historic streets, and beautiful landscapes, Galway has a relaxed yet energetic vibe that makes it an unforgettable place to explore.</p>
            <h2>Where to Stay & Getting Around</h2>
            <p>I stayed in a cozy guesthouse near the city center, which gave me easy access to all the sights. Galway has a variety of accommodations, from charming bed-and-breakfasts to boutique hotels and even some luxury options, making it suitable for any type of traveler.</p>
            <p>Getting around Galway was easy, as the city is small and pedestrian-friendly. I spent most of my time walking through the colorful streets, enjoying the buskers, street performers, and the local atmosphere. The city also has a great bus system if you want to venture a bit further out.</p>
            <h2>Must-See Places</h2>
            <p>Galway is full of things to see and do! The <strong>Latin Quarter</strong> is a must-visit, with its narrow, cobbled streets lined with shops, cafes, and pubs. <strong>Eyre Square</strong> is another popular spot, and from there, you can easily walk to the Galway City Museum or take a stroll along the River Corrib. I also recommend visiting the nearby <strong>Salthill Promenade</strong> for a peaceful walk along the coast, with stunning views of Galway Bay.</p>
            <h2>Food to Try</h2>
            <p>As for food, Galway is a fantastic place for foodies. I tried some delicious seafood, including fresh oysters from the Galway Bay, and I couldn\'t resist trying a traditional Irish stew. The city is known for its lively pub scene, where you can enjoy a pint of Guinness and listen to live traditional Irish music.</p>
            <p>Overall, <strong>Galway</strong> is a city that blends culture, history, and nature effortlessly. Whether you’re strolling through its lively streets, enjoying a quiet moment by the sea, or indulging in some of the best food Ireland has to offer, Galway truly has something for everyone. It\'s a must-visit when in Ireland!</p>
            ',
            'thumbnailURL' => 'ecoal2.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $tag1 = Tag::create(['name' => 'Lens']);
        $tag2 = Tag::create(['name' => 'Annecy']);
        $tag3 = Tag::create(['name' => 'Toulouse']);
        $tag4= Tag::create(['name' => 'Vila Nova de Gaia']);
        $tag5 = Tag::create(['name' => 'Póvoa de Varzim ']);
        $tag6 = Tag::create(['name' => 'Sines']);
        $tag7 = Tag::create(['name' => 'Łódź']);
        $tag8 = Tag::create(['name' => 'Warsaw']);
        $tag9 = Tag::create(['name' => 'Gdańsk']);
        $tag10 = Tag::create(['name' => 'Dublin']);
        $tag11 = Tag::create(['name' => 'Belfast']);
        $tag12 = Tag::create(['name' => 'Galway']);


        $article->tags()->attach([$tag1->id, $tag2->id]);

        #$article = Article::create([
        #    'location' => 'Welcome to ecoal25',
        #    'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
        #    'thumbnailURL' => 'ecoal.jpg',
        #    'mediaType' => 'image',
        #    'mediaURL' => 'ecoal.jpg',
        #    'leadStory' => false
        #]);

        #$tag1 = Tag::create(['name' => 'ecoal25']);
        #$tag2 = Tag::create(['name' => 'react']);

        #$article->tags()->attach([$tag1->id, $tag2->id]);
    }
}
